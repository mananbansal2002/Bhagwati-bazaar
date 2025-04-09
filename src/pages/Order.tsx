
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink } from 'lucide-react';

const Order = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4">
              Order Online
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Place Your Order
            </h1>
            
            <p className="text-gray-700 mb-8">
              We're excited to serve you! Fill out our order form and we'll process your request promptly.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold mb-6 text-gray-900">Order Process</h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-yellow-600">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Submit Order</h3>
                  <p className="text-sm text-gray-600">Fill out our order form with your grocery list and delivery details.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-yellow-600">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Confirmation</h3>
                  <p className="text-sm text-gray-600">We'll confirm your order via WhatsApp or phone call.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <span className="font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Delivery/Pickup</h3>
                  <p className="text-sm text-gray-600">Choose between home delivery or store pickup for your items.</p>
                </div>
              </div>
              
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <a 
                  href="https://forms.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Place Order Now
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="text-left bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <h3 className="font-semibold mb-3 text-gray-900">Need Assistance?</h3>
              <p className="text-gray-700 mb-3">
                If you need help with your order or have special requirements, feel free to contact us directly:
              </p>
              <p className="text-gray-700">
                <strong>WhatsApp/Call:</strong> +91 99688 02907<br />
                <strong>Email:</strong> orders@bhagwatibazaar.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Order;
