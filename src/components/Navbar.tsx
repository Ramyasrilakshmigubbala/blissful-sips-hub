
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        'fixed w-full transition-all duration-300 z-50',
        isScrolled 
          ? 'bg-dark bg-opacity-95 shadow-lg py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-white font-playfair text-2xl font-bold">
          Bistro<span className="text-gold">Elite</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-gold transition-colors">About</a>
          <a href="#offers" className="text-white hover:text-gold transition-colors">Offers</a>
          <a href="#menu" className="text-white hover:text-gold transition-colors">Menu</a>
          <a href="#testimonials" className="text-white hover:text-gold transition-colors">Testimonials</a>
          <a href="#reserve" className="btn-gold">Reserve Now</a>
        </div>
        
        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
