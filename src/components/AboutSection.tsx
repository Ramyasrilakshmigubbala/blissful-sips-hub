
import React from 'react';
import { Clock, Cocktail, DollarSign, Music } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-all bg-white bg-opacity-5 backdrop-blur-sm border border-gray-200 border-opacity-10">
    <div className="mb-4 text-gold p-3 rounded-full bg-gold bg-opacity-10">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-playfair font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-400 text-center text-sm">{description}</p>
  </div>
);

const AboutSection = () => {
  const features = [
    {
      icon: Cocktail,
      title: "Premium Cocktails",
      description: "Handcrafted cocktails using only the finest ingredients and spirits."
    },
    {
      icon: DollarSign,
      title: "Amazing Deals",
      description: "Exceptional value with up to 50% off on select drinks and appetizers."
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Longer happy hours to let you unwind after a long day at work."
    },
    {
      icon: Music,
      title: "Live Music",
      description: "Enjoy live jazz and acoustic performances during weekend happy hours."
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80')] bg-cover bg-fixed opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white">About Our <span className="text-gold">Happy Hours</span></h2>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
            Experience the perfect blend of ambiance, flavors, and great deals. Our Happy Hours are designed to bring joy to your evenings with premium cocktails, craft beers, and mouth-watering appetizers—all at unbeatable prices!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              icon={feature.icon}
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
