
import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  image?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-brown to-dark bg-opacity-30 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gold border-opacity-10">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {testimonial.image ? (
            <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-dark font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          )}
          <h4 className="text-white font-medium">{testimonial.name}</h4>
        </div>
        <div className="flex text-gold">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < testimonial.rating ? "currentColor" : "none"} 
              className={i < testimonial.rating ? "text-gold" : "text-gray-400"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-300 italic text-sm md:text-base">"{testimonial.text}"</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Emily J.",
      rating: 5,
      text: "The best Happy Hours in town! Amazing vibes, great deals, and the cocktails are top-notch! Their Old Fashioned is my absolute favorite."
    },
    {
      name: "Michael T.",
      rating: 5,
      text: "Fantastic atmosphere and incredible value during happy hours. The small plates are perfect for sharing and pair wonderfully with their signature cocktails."
    },
    {
      name: "Sophia L.",
      rating: 4,
      text: "Love the ambiance and the bartenders are true artists. Their happy hour specials make it the perfect spot to unwind after work."
    },
    {
      name: "James R.",
      rating: 5,
      text: "A sophisticated spot with extremely reasonable happy hour prices. The truffle arancini is to die for! Will definitely be coming back."
    },
    {
      name: "Alexandra D.",
      rating: 5,
      text: "My go-to place for after-work drinks. The extended weekend happy hours are perfect for a leisurely afternoon with friends."
    },
    {
      name: "Robert K.",
      rating: 4,
      text: "Great selection of craft beers at amazing prices during happy hour. The staff is knowledgeable and always ready with recommendations."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554422673-8e4891a35799?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-fixed opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white">Our <span className="text-gold">Guests</span> Love Us</h2>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our happy hour regulars have to say about their experiences.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static transform-none bg-gold hover:bg-gold/80 border-none text-white" />
            <CarouselNext className="static transform-none bg-gold hover:bg-gold/80 border-none text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
