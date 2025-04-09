
// Cloudinary configuration
 const CLOUDINARY_CLOUD_NAME = 'dcppcvjhj';
export const CLOUDINARY_API_KEY = '';
export const CLOUDINARY_API_SECRET = '';
export const CLOUDINARY_UPLOAD_PRESET = '';
const CLOUDINARY_TAG = 'bhagwati_bazaar_offers';

// Interface for Offer Image
export interface OfferImage {
  url: string;
  public_id: string;
}

// Function to fetch all images with a specific tag
export const getAllOfferImages = async (): Promise<OfferImage[]> => {
  try {
    // Use Cloudinary's public JSON list API to get images by tag
    const url = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/list/${import.meta.env.VITE_CLOUDINARY_TAG}.json`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Error fetching from Cloudinary: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (data.resources && data.resources.length > 0) {
      // Map resources to full image URLs and sort by public_id
      return data.resources
        .map((img: any) => ({
          url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/${img.public_id}`,
          public_id: img.public_id
        }))
        .sort((a: OfferImage, b: OfferImage) => a.public_id.localeCompare(b.public_id));
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching offer images:", error);
    return [];
  }
};

// Function to initialize Cloudinary upload widget
export const openCloudinaryUploadWidget = (
  callback: (error: any, result: any) => void
) => {
  // Check if cloudinary is available
  if (typeof window.cloudinary === 'undefined') {
    console.error('Cloudinary widget not loaded');
    return;
  }

  window.cloudinary.openUploadWidget(
    {
      cloudName: CLOUDINARY_CLOUD_NAME,
      uploadPreset: CLOUDINARY_UPLOAD_PRESET,
      tags: [CLOUDINARY_TAG],
      sources: ["local", "url", "camera"],
      multiple: true,
    },
    callback
  );
};

// Function to delete an image from Cloudinary
export const deleteCloudinaryImage = async (publicId: string): Promise<boolean> => {
  try {
    // Create the timestamp for the signature
    const timestamp = Math.round(new Date().getTime() / 1000);
    
    // Generate the signature string
    const signatureString = `public_id=${publicId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    
    // Generate SHA-1 hash of the signature string
    const signature = await generateSHA1(signatureString);
    
    // Create form data for the request
    const formData = new FormData();
    formData.append('public_id', publicId);
    formData.append('api_key', CLOUDINARY_API_KEY);
    formData.append('timestamp', timestamp.toString());
    formData.append('signature', signature);
    
    // Make the request to Cloudinary's destroy API
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/destroy`, {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    console.log('Delete result:', result);
    
    if (result.result === 'ok') {
      return true;
    } else {
      console.error("Error deleting image:", result.result);
      return false;
    }
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
};

// Generate SHA-1 hash for Cloudinary API authentication
async function generateSHA1(message: string): Promise<string> {
  // Convert the message string to an array of bytes
  const msgBuffer = new TextEncoder().encode(message);
  
  // Hash the message using SubtleCrypto
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
  
  // Convert the hash to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Function to clear all offer images with a specific tag
export const clearAllOfferImages = async (): Promise<boolean> => {
  try {
    // Fetch all images
    const images = await getAllOfferImages();
    
    if (images.length === 0) {
      return true;
    }

    const results = await Promise.all(
      images.map(image => deleteCloudinaryImage(image.public_id))
    );
    
    // Check if all deletions were successful
    return results.every(result => result === true);
  } catch (error) {
    console.error("Error clearing offer images:", error);
    return false;
  }
};
