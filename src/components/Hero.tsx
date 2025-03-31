
import React, { useEffect } from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-dark flex items-center">
      {/* Background overlay with image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/70 to-dark z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsJTIwYmFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-4">
            Happy Hours – <span className="text-gold">Unwind & Indulge!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-poppins">
            Exclusive discounts on cocktails, beers, and gourmet bites. 
            Join us for the perfect evening!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#reserve" className="btn-gold text-center">
              Reserve Your Table
            </a>
            <a 
              href="#offers" 
              className="border-2 border-gold text-gold px-6 py-3 font-medium rounded-md transition-all hover:bg-gold hover:bg-opacity-10 text-center"
            >
              View Offers
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gold"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
