import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />

      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 md:px-6 pt-16'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <span className='inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4'>
              Our Services
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
              What We Offer
            </h2>
            <p className='text-gray-600'>
              At BHAGWATI BAZAAR, we provide a range of services designed to
              make your shopping experience convenient, enjoyable, and tailored
              to your needs.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6'>
                <ShoppingCart className='w-6 h-6 text-yellow-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                Grocery Shopping
              </h3>
              <p className='text-gray-600 mb-4'>
                We offer a comprehensive range of grocery items including fresh
                products, packaged goods, and household essentials.
              </p>
              <ul className='space-y-2'>
                {['Packaged foods', 'Household items'].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center text-gray-700'
                  >
                    <Check className='w-5 h-5 text-green-500 mr-2' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-yellow-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                Payment Options
              </h3>
              <p className='text-gray-600 mb-4'>
                We accept multiple payment methods for your convenience,
                including cash, credit/debit cards, and digital wallets.
              </p>
              <ul className='space-y-2'>
                {[
                  'Cash payments',
                  'Credit & debit cards',
                  'UPI payments',
                  'Digital wallets',
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center text-gray-700'
                  >
                    <Check className='w-5 h-5 text-green-500 mr-2' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-yellow-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                Self Pickup
              </h3>
              <p className='text-gray-600 mb-4'>
                Fill out the order form, visit our store, and instantly pick up
                your items.
              </p>
              <ul className='space-y-2'>
                {[
                  'Fast service',
                  'Convenient pickup',
                  'Flexible timing',
                  'Order tracking',
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center text-gray-700'
                  >
                    <Check className='w-5 h-5 text-green-500 mr-2' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='bg-yellow-50 border border-yellow-100 rounded-lg p-8 text-center'>
            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>
              Looking for Special Offers?
            </h3>
            <p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
              We regularly update our special offers and discounts. Check out
              our current promotions to save on your favorite products.
            </p>
            <Button className='bg-yellow-500 hover:bg-yellow-600 text-black font-medium'>
              <Link to='/offers'>View Current Offers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
