import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import Footer from '../components/Footer';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  ExternalLink,
  ShoppingCart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <div id='home'>
        <Hero />
      </div>
      <CategoryShowcase />

      {/* Stats Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <span className='inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4'>
              Trusted Since 1997
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
              Vishwaas ka dusra naam
            </h2>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <div className='text-4xl font-bold text-yellow-500 mb-2'>26+</div>
              <p className='text-gray-600'>Years of Excellence</p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <div className='text-4xl font-bold text-yellow-500 mb-2'>
                5000+
              </div>
              <p className='text-gray-600'>Products</p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <div className='text-4xl font-bold text-yellow-500 mb-2'>
                100+
              </div>
              <p className='text-gray-600'>Brands</p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <div className='text-4xl font-bold text-yellow-500 mb-2'>
                1000+
              </div>
              <p className='text-gray-600'>Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <span className='inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4'>
              Popular Brands
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
              Top Brands We Carry
            </h2>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              'Tata',
              'Patanjali',
              'Amul',
              'Nestle',
              'Parle',
              'Britannia',
              'Haldiram',
              'ITC',
            ].map((brand, index) => (
              <div
                key={index}
                className='bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center'
              >
                <span className='text-xl font-semibold text-gray-800'>
                  {brand}
                </span>
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <Button className='bg-yellow-500 hover:bg-yellow-600 text-black font-medium'>
              <Link
                to='/order'
                className='inline-flex items-center'
              >
                <ShoppingCart className='w-5 h-5 mr-2' />
                Order Now
                <ExternalLink className='ml-2 w-4 h-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-20 bg-gray-50'
      >
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4'>
                About Us
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
                Bhagwati Bazaar: Since 1997
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
              <div className='flex mb-6'>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star
                    key={index}
                    className='w-5 h-5 text-yellow-500 fill-yellow-500'
                  />
                ))}
              </div>
              <Link to='/about'>
                <Button
                  variant='outline'
                  className='border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div>
              <img
                src='/images/store-front.jpg'
                alt='Bhagwati Bazaar Storefront'
                className='w-full max-h-[550px] object-cover rounded-lg shadow-lg mb-6'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-white'
      >
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <span className='inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4'>
              Contact Us
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
              Get In Touch
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              We're here to help. Reach out to us for any inquiries or support.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6 bg-gray-50 rounded-lg shadow-sm'>
              <div className='mx-auto w-16 h-16 mb-4 bg-yellow-100 rounded-full flex items-center justify-center'>
                <MapPin className='w-8 h-8 text-yellow-600' />
              </div>
              <h3 className='font-semibold mb-2 text-gray-900'>Address</h3>
              <p className='text-gray-600'>
                Plot No.1, Block-C, 40 Feet Road, Chanakyapuri, New Delhi-110059
              </p>
              <a
                href='https://maps.google.com/?q=Plot+No.1,+Block-C,+40+Feet+Road,+Chanakyapuri,+New+Delhi-110059'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center mt-3 text-yellow-600 hover:text-yellow-700'
              >
                View on Map
                <ExternalLink className='ml-1 w-4 h-4' />
              </a>
            </div>

            <div className='text-center p-6 bg-gray-50 rounded-lg shadow-sm'>
              <div className='mx-auto w-16 h-16 mb-4 bg-yellow-100 rounded-full flex items-center justify-center'>
                <Phone className='w-8 h-8 text-yellow-600' />
              </div>
              <h3 className='font-semibold mb-2 text-gray-900'>Phone</h3>
              <p className='text-gray-600'>+91 99688 02907</p>
              <p className='text-gray-600 mb-3'>011-48026274</p>
              <a
                href='https://wa.me/919968802907'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center mt-3 text-green-600 hover:text-green-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 mr-1'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                </svg>
                WhatsApp Us
              </a>
            </div>

            <div className='text-center p-6 bg-gray-50 rounded-lg shadow-sm'>
              <div className='mx-auto w-16 h-16 mb-4 bg-yellow-100 rounded-full flex items-center justify-center'>
                <Mail className='w-8 h-8 text-yellow-600' />
              </div>
              <h3 className='font-semibold mb-2 text-gray-900'>Email</h3>
              <p className='text-gray-600'>Bhagwatibazaar@gmail.com</p>
              <a
                href='mailto:Bhagwatibazaar@gmail.com'
                className='inline-flex items-center mt-3 text-yellow-600 hover:text-yellow-700'
              >
                Send Email
                <ExternalLink className='ml-1 w-4 h-4' />
              </a>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <Link to='/contact'>
              <Button className='bg-yellow-500 hover:bg-yellow-600 text-black font-medium'>
                View All Contact Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
