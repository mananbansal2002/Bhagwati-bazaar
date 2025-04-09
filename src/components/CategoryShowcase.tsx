import React from 'react';
import { ArrowRight, Check, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    name: 'Grocery Shopping',
    description:
      'Comprehensive range of grocery items including fresh produce, packaged goods, and household essentials.',
    image:
      'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop',
    features: ['Packaged foods', 'Household items'],
  },
  {
    id: 2,
    name: 'Payment Options',
    description:
      'Multiple payment methods for your convenience, including cash, credit/debit cards, and digital wallets.',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Cash payments',
      'Credit & debit cards',
      'UPI payments',
      'Digital wallets',
    ],
  },
  {
    id: 3,
    name: 'Self Pickup',
    description:
      'Fill out the order form, visit our store, and instantly pick up your items.',
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Fast service',
      'Convenient pickup',
      'Flexible timing',
      'Order tracking',
    ],
  },
  {
    id: 4,
    name: 'Customer Support',
    description: 'Dedicated assistance for all your queries and concerns.',
    image:
      'https://images.unsplash.com/photo-1583947581825-3d53985f500c?q=80&w=2070&auto=format&fit=crop',
    features: [
      'In-store assistance',
      'Phone support',
      'WhatsApp assistance',
      'Quick resolution',
    ],
  },
];

const CategoryShowcase = () => {
  return (
    <section
      className='py-20 bg-gray-50'
      id='services'
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-12 animate-fade-in'>
          <span className='inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4'>
            Our Services
          </span>
          <h2 className='font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
            What We Offer
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            At Bhagwati Bazaar, we provide a range of services designed to make
            your shopping experience convenient, enjoyable, and tailored to your
            needs.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6'>
                <ShoppingCart className='w-6 h-6 text-yellow-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                {service.name}
              </h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <ul className='space-y-2'>
                {service.features.map((item, index) => (
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
          ))}
        </div>

        <div className='bg-yellow-50 border border-yellow-100 rounded-lg p-8 text-center'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-900'>
            Looking for Special Offers?
          </h3>
          <p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
            We regularly update our special offers and discounts. Check out our
            current promotions to save on your favorite products.
          </p>
          <Button className='bg-yellow-500 hover:bg-yellow-600 text-black font-medium'>
            <Link
              to='/offers'
              className='flex items-center'
            >
              View Current Offers
              <ArrowRight className='ml-2 w-4 h-4' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
