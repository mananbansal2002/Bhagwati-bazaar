import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-800'>
      <div className='container mx-auto px-4 md:px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          <div>
            <Link
              to='/'
              className='font-display text-2xl font-bold mb-6 inline-block text-gray-900'
            >
              Bhagwati Bazaar
            </Link>
            <p className='text-gray-600 mb-2 text-sm font-medium'>
              Vishwaas ka dusra naam
            </p>
            <p className='text-gray-600 mb-6'>
              Your one-stop destination for premium groceries and household
              essentials at competitive prices.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center transition-colors duration-300 hover:bg-yellow-500 hover:text-white'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center transition-colors duration-300 hover:bg-yellow-500 hover:text-white'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center transition-colors duration-300 hover:bg-yellow-500 hover:text-white'
              >
                <Twitter className='w-5 h-5' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-gray-900'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/'
                  className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-gray-900'>
              Popular Brands
            </h3>
            <ul className='space-y-3'>
              <li className='text-gray-600'>Tata</li>
              <li className='text-gray-600'>Patanjali</li>
              <li className='text-gray-600'>Amul</li>
              <li className='text-gray-600'>Nestle</li>
              <li className='text-gray-600'>Parle</li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-gray-900'>
              Contact Information
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <MapPin className='w-5 h-5 text-yellow-600 mr-3 mt-0.5' />
                <span className='text-gray-600'>
                  Plot No.1, Block-C, 40 Feet Road, Chanakyapuri, New
                  Delhi-110059
                </span>
              </li>
              <li className='flex items-center'>
                <Phone className='w-5 h-5 text-yellow-600 mr-3' />
                <div>
                  <span className='text-gray-600'>+91 99688 02907, </span>
                  {/* <br /> */}
                  <span className='text-gray-600'>011-48026274</span>
                </div>
              </li>
              <li className='flex items-center'>
                <Mail className='w-5 h-5 text-yellow-600 mr-3' />
                <span className='text-gray-600'>
                  contact@bhagwatibazaar.com
                </span>
              </li>
              <li className='flex items-start'>
                <Clock className='w-5 h-5 text-yellow-600 mr-3 mt-0.5' />
                <div className='text-gray-600'>
                  <p>10:00 AM - 10:00 PM Everyday</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-200'>
        <div className='container mx-auto px-4 md:px-6 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-600 text-sm'>
              © {new Date().getFullYear()} Bhagwati Bazaar. All rights reserved.
            </p>
            <div className='mt-4 md:mt-0'>
              <ul className='flex items-center space-x-6'>
                <li>
                  <Link
                    to='/privacy'
                    className='text-gray-600 hover:text-yellow-600 text-sm transition-colors duration-300'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to='/terms'
                    className='text-gray-600 hover:text-yellow-600 text-sm transition-colors duration-300'
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
