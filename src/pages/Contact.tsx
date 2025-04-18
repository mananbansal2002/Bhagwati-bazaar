import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />

      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 md:px-6 pt-16'>
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

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='mx-auto w-16 h-16 mb-4 bg-yellow-100 rounded-full flex items-center justify-center'>
                <MapPin className='w-8 h-8 text-yellow-600' />
              </div>
              <h3 className='font-semibold mb-2 text-gray-900'>Address</h3>
              <p className='text-gray-600 mb-3'>
                Plot No.1, Block-C, 40 Feet Road, Chanakyapuri, New Delhi-110059
              </p>
              <a
                href='https://maps.google.com/?q=Bhagwati-bazaar'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-yellow-600 hover:text-yellow-700'
              >
                View on Map
                <ExternalLink className='ml-1 w-4 h-4' />
              </a>
            </div>

            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='mx-auto w-16 h-16 mb-4 bg-yellow-100 rounded-full flex items-center justify-center'>
                <Phone className='w-8 h-8 text-yellow-600' />
              </div>
              <h3 className='font-semibold mb-2 text-gray-900'>Phone</h3>
              <p className='text-gray-600 mb-3'>+91 99688 02907</p>
              <p className='text-gray-600 mb-3'>011-48026274</p>
              <a
                href='https://wa.me/919968802907'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-green-600 hover:text-green-700'
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

            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='mx-auto w-16 h-16 mb-4 bg-yellow-100 rounded-full flex items-center justify-center'>
                <Mail className='w-8 h-8 text-yellow-600' />
              </div>
              <h3 className='font-semibold mb-2 text-gray-900'>Email</h3>
              <p className='text-gray-600 mb-3'>Bhagwatibazaar@gmail.com</p>
              <a
                href='mailto:Bhagwatibazaar@gmail.com'
                className='inline-flex items-center text-yellow-600 hover:text-yellow-700'
              >
                Send Email
                <ExternalLink className='ml-1 w-4 h-4' />
              </a>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 mb-16'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-6 text-gray-900'>
                Store Hours
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between pb-2 border-b border-gray-100'>
                  <span className='text-gray-700'>Everday</span>
                  <span className='font-medium text-gray-900'>
                    10:00 AM - 10:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-6 text-gray-900'>
                Order Now
              </h3>
              <p className='text-gray-700 mb-6'>
                Can't visit our store? Order directly through WhatsApp or fill
                our order form!
              </p>
              <div className='space-y-4'>
                <a
                  href='https://wa.me/919968802907?text=Hi,%20I%20want%20to%20place%20an%20order'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center bg-green-500 text-white px-4 py-3 rounded hover:bg-green-600 transition-colors w-full justify-center'
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
                  href='https://forms.gle/nQ6on2wxQh1iQ6C67'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center bg-yellow-600 text-white px-4 py-3 rounded hover:bg-yellow-700 transition-colors w-full justify-center'
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

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-6 text-gray-900 text-center'>
              Our Location
            </h3>
            <div className='aspect-video w-full rounded-lg overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.588556274156!2d77.0716187!3d28.6114177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0502afaeb49f%3A0x88c020d77761af43!2sBHAGWATI%20BAZAAR!5e0!3m2!1sen!2sin!4v1712736336502!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
