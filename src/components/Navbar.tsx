import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-6'
      }`}
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='flex items-center'
          >
            <img
              src='logo.png'
              alt='BHAGWATI BAZAAR Logo'
              className='h-12 w-12 mr-2'
            />
            <div>
              <span className='font-display text-2xl md:text-3xl font-bold tracking-tight text-gray-900'>
                BHAGWATI BAZAAR
              </span>
              <p className='text-sm text-yellow-600 font-medium'>
                विश्वास का दूसरा नाम
              </p>
            </div>
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              to='/'
              className={`${
                location.pathname === '/'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors duration-300`}
            >
              Home
            </Link>
            <Link
              to='/about'
              className={`${
                location.pathname === '/about'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              to='/services'
              className={`${
                location.pathname === '/services'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors duration-300`}
            >
              Services
            </Link>
            <Link
              to='/offers'
              className={`${
                location.pathname === '/offers'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors duration-300`}
            >
              Offers
            </Link>
            <Link
              to='/contact'
              className={`${
                location.pathname === '/contact'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors duration-300`}
            >
              Contact
            </Link>
          </nav>

          <div className='flex items-center'>
            <button
              className='md:hidden text-gray-800 hover:text-gray-600 transition-colors duration-300'
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label='Menu'
            >
              <Menu className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='container mx-auto px-4 py-6'>
          <div className='flex items-center justify-between mb-8'>
            <Link
              to='/'
              className='flex items-center'
              onClick={closeMenu}
            >
              <img
                src='logo.png'
                alt='BHAGWATI BAZAAR Logo'
                className='h-10 w-10 mr-2'
              />
              <div>
                <span className='font-display text-2xl font-bold tracking-tight text-gray-900'>
                  BHAGWATI BAZAAR
                </span>
                <p className='text-sm text-yellow-600 font-medium'>
                  विश्वास का दूसरा नाम
                </p>
              </div>
            </Link>
            <button
              className='text-gray-800 hover:text-gray-600 transition-colors duration-300'
              onClick={closeMenu}
              aria-label='Close menu'
            >
              <X className='w-6 h-6' />
            </button>
          </div>
          <nav className='flex flex-col space-y-6'>
            <Link
              to='/'
              className={`text-xl font-medium ${
                location.pathname === '/'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to='/about'
              className={`text-xl font-medium ${
                location.pathname === '/about'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to='/services'
              className={`text-xl font-medium ${
                location.pathname === '/services'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to='/offers'
              className={`text-xl font-medium ${
                location.pathname === '/offers'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors`}
              onClick={closeMenu}
            >
              Offers
            </Link>
            <Link
              to='/contact'
              className={`text-xl font-medium ${
                location.pathname === '/contact'
                  ? 'text-yellow-600'
                  : 'text-gray-800 hover:text-yellow-600'
              } transition-colors`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
