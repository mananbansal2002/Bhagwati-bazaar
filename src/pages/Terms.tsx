
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 pt-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Terms of Service
            </h1>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                Welcome to Bhagwati Bazaar. These terms and conditions outline the rules and regulations 
                for the use of our website and services.
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Acceptance</h2>
              <p className="text-gray-700 mb-6">
                By accessing this website, we assume you accept these terms and conditions in full. 
                Do not continue to use Bhagwati Bazaar's website if you do not accept all of the terms and conditions stated on this page.
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">3. License</h2>
              <p className="text-gray-700 mb-6">
                Unless otherwise stated, Bhagwati Bazaar and/or its licensors own the intellectual property rights 
                for all material on this website. All intellectual property rights are reserved.
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Restrictions</h2>
              <p className="text-gray-700 mb-6">
                You are specifically restricted from:
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Publishing any website material in any other media</li>
                  <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
                  <li>Using this website in any way that is or may be damaging to this website</li>
                  <li>Using this website contrary to applicable laws and regulations</li>
                </ul>
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at:
                <br />
                Email: legal@bhagwatibazaar.com
                <br />
                Phone: +91 99688 02907
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
