import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Trash2, AlertTriangle, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { Loader } from '@/components/ui/loader';
import {
  getAllOfferImages,
  openCloudinaryUploadWidget,
  clearAllOfferImages,
  deleteCloudinaryImage,
  OfferImage,
} from '@/lib/cloudinary';
import { useLoading } from '@/context/LoadingContext';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Define the type for Cloudinary widget and image data
declare global {
  interface Window {
    cloudinary: {
      openUploadWidget: (
        options: any,
        callback: (error: any, result: any) => void
      ) => void;
    };
  }
}

const Offers = () => {
  const [allImages, setAllImages] = useState<OfferImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState<
    Record<string, boolean>
  >({});
  const [deleteInProgress, setDeleteInProgress] = useState<string | null>(null);
  const { setIsLoading: setPageLoading } = useLoading();

  // Function to load the Cloudinary upload widget script
  useEffect(() => {
    // Only load if not already loaded
    if (!document.getElementById('cloudinary-upload-widget')) {
      const script = document.createElement('script');
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.id = 'cloudinary-upload-widget';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Load all offer images
    const loadOfferImages = async () => {
      setIsLoading(true);
      try {
        const images = await getAllOfferImages();
        console.log('Fetched images:', images);
        setAllImages(images);
      } catch (error) {
        console.error('Error loading offer images:', error);
        toast.error('Failed to load the current offers');
      } finally {
        setIsLoading(false);
      }
    };

    loadOfferImages();

    // Listen for admin keyboard shortcut
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        // setShowAdminButton(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleImageLoad = (public_id: string) => {
    setImageLoadStatus((prev) => ({ ...prev, [public_id]: true }));
  };

  const handleImageError = (public_id: string) => {
    console.error(`Failed to load image: ${public_id}`);
    setImageLoadStatus((prev) => ({ ...prev, [public_id]: true })); // Still mark as loaded to remove loader
  };

  const handleUploadWidget = () => {
    if (!isAdmin) {
      setShowAdminModal(true);
      return;
    }

    setPageLoading(true);
    openCloudinaryUploadWidget((error, result) => {
      if (!error && result.event === 'success') {
        console.log('Uploaded:', result.info.secure_url);
        // Refresh the gallery after successful upload
        refreshGallery();
        toast.success('Offer image uploaded successfully!');
      } else if (result.event === 'close') {
        console.log('Upload widget closed');
        setPageLoading(false);
      }
    });
  };

  const handleDeleteImage = async (publicId: string) => {
    if (!isAdmin) {
      setShowAdminModal(true);
      return;
    }

    if (
      confirm(
        'Are you sure you want to delete this image? This action cannot be undone.'
      )
    ) {
      setDeleteInProgress(publicId);
      try {
        const success = await deleteCloudinaryImage(publicId);
        if (success) {
          toast.success('Image deleted successfully');
          // Filter out the deleted image from the state
          setAllImages((prev) =>
            prev.filter((img) => img.public_id !== publicId)
          );
        } else {
          toast.error('Failed to delete the image');
        }
      } catch (error) {
        console.error('Error deleting image:', error);
        toast.error('An error occurred while deleting the image');
      } finally {
        setDeleteInProgress(null);
      }
    }
  };

  const handleClearAllImages = async () => {
    if (!isAdmin) {
      setShowAdminModal(true);
      return;
    }

    if (
      confirm(
        'Are you sure you want to delete all offer images? This action cannot be undone.'
      )
    ) {
      setPageLoading(true);
      try {
        const result = await clearAllOfferImages();
        if (result) {
          toast.success('All offer images have been deleted');
          // Clear the images from the state
          setAllImages([]);
        } else {
          toast.error('Failed to delete all images. Please contact support.');
        }
      } catch (error) {
        console.error('Error clearing images:', error);
        toast.error('Failed to delete all offer images');
      } finally {
        setPageLoading(false);
      }
    }
  };

  const refreshGallery = async () => {
    try {
      const images = await getAllOfferImages();
      setAllImages(images);
    } catch (error) {
      console.error('Error refreshing gallery:', error);
    } finally {
      setPageLoading(false);
    }
  };

  const checkAdminPassword = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setShowAdminModal(false);
      toast.success('Admin access granted');
      setTimeout(() => {
        handleUploadWidget();
      }, 500);
    } else {
      toast.error('Invalid admin password');
    }
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <div className='container mx-auto px-4 py-24 flex-grow'>
        <div className='text-center mb-8'>
          <h1 className='font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
            Current Offers
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Browse our latest special offers and deals. Valid until stocks last.
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8'>
          <div className='flex flex-wrap justify-between mb-4'>
            <div className='flex space-x-2 w-full md:w-auto justify-end'>
              {(isAdmin || showAdminButton) && (
                <>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={handleUploadWidget}
                    className='flex items-center'
                  >
                    <Upload className='h-4 w-4 mr-1' /> Upload New Offer
                  </Button>
                  <Button
                    variant='destructive'
                    size='sm'
                    onClick={handleClearAllImages}
                    className='flex items-center'
                  >
                    <Trash2 className='h-4 w-4 mr-1' /> Clear All Offers
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className='overflow-auto border border-gray-200 rounded-lg relative'>
            {isLoading ? (
              <div className='min-h-[60vh] flex items-center justify-center'>
                <Loader
                  size='lg'
                  text='Loading offers...'
                />
              </div>
            ) : allImages.length > 0 ? (
              <div className='flex flex-col'>
                {allImages.map((image, index) => (
                  <div
                    key={image.public_id}
                    className='relative'
                  >
                    {!imageLoadStatus[image.public_id] && (
                      <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-80'>
                        <Loader
                          size='md'
                          text='Loading image...'
                        />
                      </div>
                    )}

                    <img
                      src={image.url}
                      alt={`Bhagwati Bazaar Offer ${index + 1}`}
                      className='w-full h-auto'
                      onLoad={() => handleImageLoad(image.public_id)}
                      onError={() => handleImageError(image.public_id)}
                      style={{
                        opacity: imageLoadStatus[image.public_id] ? 1 : 0,
                      }}
                    />

                    {/* Admin delete button overlaid on each image */}
                    {(isAdmin || showAdminButton) && (
                      <Button
                        variant='destructive'
                        size='sm'
                        className='absolute top-2 right-2 h-8 w-8 rounded-full p-0 flex items-center justify-center'
                        onClick={() => handleDeleteImage(image.public_id)}
                        disabled={deleteInProgress === image.public_id}
                      >
                        {deleteInProgress === image.public_id ? (
                          <Loader
                            size='sm'
                            className='h-4 w-4'
                          />
                        ) : (
                          <X className='h-4 w-4' />
                        )}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className='min-h-[60vh] flex flex-col items-center justify-center p-8'>
                <AlertTriangle className='h-12 w-12 text-yellow-500 mb-4' />
                <p className='text-gray-500 mb-4 text-center'>
                  No offers available at the moment.
                </p>
                {(isAdmin || showAdminButton) && (
                  <Alert
                    variant='default'
                    className='max-w-md mb-4'
                  >
                    <AlertDescription>
                      As an admin, you can upload the first offer using the
                      button below.
                    </AlertDescription>
                  </Alert>
                )}
                {(isAdmin || showAdminButton) && (
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={handleUploadWidget}
                    className='flex items-center'
                  >
                    <Upload className='h-4 w-4 mr-1' /> Upload First Offer
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-4 text-gray-900'>
              How to Redeem Offers
            </h2>
            <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
              <li>
                Visit our store at Plot No.1, Block-C, 40 Feet Road,
                Chanakyapuri, New Delhi-110059
              </li>
              <li>Show this offer page to the cashier</li>
              <li>Select your products from the displayed offers</li>
              <li>Enjoy your savings!</li>
            </ol>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-4 text-gray-900'>
              Order Now
            </h2>
            <p className='text-gray-700 mb-4'>
              Can't visit our store? Order directly through WhatsApp or fill our
              order form!
            </p>
            <div className='space-y-3'>
              <a
                href='https://wa.me/919968802907?text=Hi,%20I%20want%20to%20place%20an%20order'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 mr-2'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                </svg>
                WhatsApp: Send "Hi" to 9968802907
              </a>
              <a
                href='https://forms.google.com/order-form'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors w-full justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-5 h-5 mr-2'
                >
                  <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
                </svg>
                Fill Order Form
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {showAdminModal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h3 className='text-xl font-semibold mb-4'>
              Admin Access Required
            </h3>
            <p className='mb-4'>
              Please enter the admin password to update the offers flyer:
            </p>
            <input
              type='password'
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className='w-full border border-gray-300 rounded-md p-2 mb-4'
              placeholder='Enter admin password'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  checkAdminPassword();
                }
              }}
            />
            <div className='flex justify-end space-x-2'>
              <Button
                variant='outline'
                onClick={() => setShowAdminModal(false)}
              >
                Cancel
              </Button>
              <Button onClick={checkAdminPassword}>Submit</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
