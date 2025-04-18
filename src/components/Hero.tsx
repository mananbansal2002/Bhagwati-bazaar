import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Fresh Products',
    description: 'Discover the finest quality products from premium brands.',
    image: '/images/hero1.jpg',
    ctaText: 'Order Now',
    ctaLink: 'https://forms.gle/nQ6on2wxQh1iQ6C67',
  },
  {
    id: 2,
    title: 'Premium Grocery Selection',
    description:
      'Explore our wide range of premium grocery products at competitive prices.',
    image:
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop',
    ctaText: 'Order Now',
    ctaLink: 'https://forms.gle/nQ6on2wxQh1iQ6C67',
  },
  {
    id: 3,
    title: 'Special Offers & Deals',
    description:
      'Take advantage of our weekly special offers and exclusive deals.',
    image: '/images/hero2.jpg',

    ctaText: 'Order Now',
    ctaLink: 'https://forms.gle/nQ6on2wxQh1iQ6C67',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Main slider for hero content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative h-screen w-full overflow-hidden'>
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='absolute inset-0 bg-black/20 z-10' />
          <img
            src={slide.image}
            alt={slide.title}
            className='absolute inset-0 h-full w-full object-cover object-center'
          />
        </div>
      ))}

      {/* Content */}
      <div className='relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center'>
        <div className='max-w-3xl'>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute'
              }`}
            >
              <h1
                className='font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-in-bottom'
                style={{ animationDelay: '0.2s' }}
              >
                {slide.title}
              </h1>
              <p
                className='text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-in-bottom'
                style={{ animationDelay: '0.4s' }}
              >
                {slide.description}
              </p>
              <a
                href={slide.ctaLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary text-white px-8 py-3 rounded-md font-medium inline-flex items-center group animate-slide-in-bottom'
                style={{ animationDelay: '0.6s' }}
              >
                {slide.ctaText}
                <ArrowRight className='ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
              </a>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className='absolute bottom-10 left-0 right-0'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='flex items-center space-x-2'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
