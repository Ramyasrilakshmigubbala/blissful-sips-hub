
import React from 'react';
import { Clock, Wine, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  icon: React.ElementType;
  title: string;
  frontDetails: string[];
  backDetails: string;
  className?: string;
}

const OfferCard = ({ icon: Icon, title, frontDetails, backDetails, className }: OfferCardProps) => (
  <div className={cn("flip-card h-72 md:h-80", className)}>
    <div className="flip-card-inner">
      <div className="flip-card-front rounded-lg p-6 bg-gradient-to-br from-burgundy to-brown flex flex-col items-center justify-center text-white shadow-lg">
        <div className="mb-4 text-gold p-3 rounded-full bg-gold bg-opacity-10">
          <Icon size={32} />
        </div>
        <h3 className="text-xl md:text-2xl font-playfair font-bold mb-4">{title}</h3>
        <ul className="space-y-1">
          {frontDetails.map((detail, index) => (
            <li key={index} className="text-center">{detail}</li>
          ))}
        </ul>
      </div>
      <div className="flip-card-back rounded-lg p-6 bg-gradient-to-br from-dark to-brown flex items-center justify-center">
        <p className="text-center font-poppins text-sm md:text-base">{backDetails}</p>
      </div>
    </div>
  </div>
);

const OffersSection = () => {
  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-dark to-burgundy">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white">Happy Hour <span className="text-gold">Offers</span></h2>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
            Join us during our happy hours and enjoy exclusive deals on premium cocktails and non-vegetarian appetizers.
            Hover over the cards to learn more about each offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <OfferCard 
            icon={Clock} 
            title="Timing" 
            frontDetails={["Monday – Friday", "4 PM – 7 PM"]} 
            backDetails="Extended hours on weekends! Saturday and Sunday happy hours run from 3 PM to 8 PM. Perfect for a relaxed weekend gathering with friends and family."
            className="animate-fade-in"
          />
          <OfferCard 
            icon={Wine} 
            title="Cocktails" 
            frontDetails={["1+1 on Classic Cocktails", "50% off Signature Drinks"]} 
            backDetails="Our award-winning mixologists prepare each cocktail with premium spirits and fresh ingredients. Try our seasonal specials curated by our head bartender."
            className="animate-fade-in delay-100"
          />
          <OfferCard 
            icon={Utensils} 
            title="Gourmet Bites" 
            frontDetails={["40% off on Non-Veg Appetizers", "Chef's Special Platters"]} 
            backDetails="Our kitchen prepares premium non-vegetarian small plates perfect for sharing. From spicy chicken wings to lamb meatballs, each bite is crafted to complement your drinks."
            className="animate-fade-in delay-200"
          />
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
