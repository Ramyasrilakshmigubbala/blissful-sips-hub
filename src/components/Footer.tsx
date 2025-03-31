
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription Successful",
        description: "You're now subscribed to our newsletter. Stay tuned for exclusive offers!",
        duration: 5000,
      });
      setEmail('');
    }
  };
  
  return (
    <footer className="bg-dark text-white py-10 border-t border-gold border-opacity-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="font-playfair text-2xl font-bold mb-4">
              Bistro<span className="text-gold">Elite</span>
            </h4>
            <p className="text-gray-300 mb-6">
              A premium dining experience with the best happy hours in town. Enjoy handcrafted cocktails and gourmet cuisine in an elegant atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-playfair text-lg font-semibold mb-4 text-gold">Opening Hours</h5>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Thursday</span>
                <span>4 PM - 11 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Friday - Saturday</span>
                <span>4 PM - 1 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span>4 PM - 10 PM</span>
              </li>
              <li className="text-gold mt-4 font-semibold">
                Happy Hours: 4 PM - 7 PM Daily
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-playfair text-lg font-semibold mb-4 text-gold">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#offers" className="text-gray-300 hover:text-gold transition-colors">Happy Hour Offers</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-gold transition-colors">Menu</a>
              </li>
              <li>
                <a href="#reserve" className="text-gray-300 hover:text-gold transition-colors">Reservations</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-playfair text-lg font-semibold mb-4 text-gold">Newsletter</h5>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for exclusive happy hour deals and events.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-dark border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button
                type="submit"
                className="bg-gold hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BistroElite. All rights reserved. | Designed with ♥ for food and drink lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
