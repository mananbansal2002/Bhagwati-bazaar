import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />

      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 md:px-6 pt-16'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4'>
                About Us
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
                BHAGWATI BAZAAR: Since 1997
              </h2>
              <p className='text-gray-700 mb-4'>
                Founded with a passion for quality and community, Bhagwati
                Bazaar has been serving local families since 1997. We pride
                ourselves on delivering fresh, high-quality products and
                exceptional customer service.
              </p>
              <p className='text-gray-700 mb-6'>
                From local produce to everyday essentials, we're more than just
                a store - we're a part of your community.
              </p>

              <div className='bg-white p-6 rounded-lg shadow-sm mb-6'>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                  Our Mission
                </h3>
                <p className='text-gray-700'>
                  To provide customers with the highest quality products at
                  competitive prices, while maintaining exceptional customer
                  service and supporting our local community.
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                  Our Values
                </h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                  <li>Quality and freshness in every product</li>
                  <li>Customer satisfaction is our top priority</li>
                  <li>Fair pricing and value for money</li>
                  <li>Community engagement and support</li>
                  <li>Ethical business practices</li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src='/images/store-front.jpg'
                alt='BHAGWATI BAZAAR Storefront'
                className='w-full max-h-[550px] object-cover rounded-lg shadow-lg mb-6'
              />

              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white p-4 rounded-lg shadow-sm text-center'>
                  <div className='text-3xl font-bold text-yellow-500 mb-2'>
                    26+
                  </div>
                  <p className='text-gray-600'>Years of Excellence</p>
                </div>

                <div className='bg-white p-4 rounded-lg shadow-sm text-center'>
                  <div className='text-3xl font-bold text-yellow-500 mb-2'>
                    5000+
                  </div>
                  <p className='text-gray-600'>Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
