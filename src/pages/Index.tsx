
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import OffersSection from '@/components/OffersSection';
import FeaturedMenu from '@/components/FeaturedMenu';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <OffersSection />
      <FeaturedMenu />
      <TestimonialsSection />
      <ReservationSection />
      <Footer />
      <CountdownTimer />
    </div>
  );
};

export default Index;
