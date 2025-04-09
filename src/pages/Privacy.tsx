
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 pt-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Privacy Policy
            </h1>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                At Bhagwati Bazaar, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">2. The Data We Collect</h2>
              <p className="text-gray-700 mb-6">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Identity Data: name, username</li>
                  <li>Contact Data: address, email address, telephone numbers</li>
                  <li>Technical Data: internet protocol (IP) address, browser type and version</li>
                  <li>Usage Data: information about how you use our website and services</li>
                </ul>
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">3. How We Use Your Data</h2>
              <p className="text-gray-700 mb-6">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>To register you as a new customer</li>
                  <li>To process and deliver your orders</li>
                  <li>To manage our relationship with you</li>
                  <li>To improve our website, products/services, marketing or customer relationships</li>
                </ul>
              </p>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                <br />
                Email: privacy@bhagwatibazaar.com
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

export default Privacy;
