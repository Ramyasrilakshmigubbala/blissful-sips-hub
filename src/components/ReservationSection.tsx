
import React, { useState } from 'react';
import { Calendar, Clock, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ReservationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation data:', formData);
    toast({
      title: "Reservation Requested",
      description: "We'll confirm your reservation shortly. Thank you!",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  return (
    <section id="reserve" className="py-20 bg-gradient-to-b from-dark to-burgundy">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white">Reserve Your <span className="text-gold">Table</span></h2>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
            Book your spot for our happy hours and enjoy an evening of premium drinks, delicious bites, and great ambiance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white border-opacity-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gold mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gold mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gold mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-gold mb-2 font-medium">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-gold mb-2 font-medium">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold" size={18} />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-gold mb-2 font-medium">Time</label>
                  <div className="relative">
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white"
                    />
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold" size={18} />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-gold mb-2 font-medium">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white h-24"
                  placeholder="Any special requests or preferences"
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full btn-gold py-3 focus:outline-none focus:ring-2 focus:ring-gold animate-glow"
                >
                  Reserve Table
                </button>
              </div>
            </form>
          </div>

          <div className="animate-fade-in delay-200">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white border-opacity-10 h-full flex flex-col">
              <h3 className="text-2xl font-playfair text-gold mb-6">Contact Information</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="text-gold p-2 bg-gold bg-opacity-10 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-300">123 Gourmet Avenue, Culinary District, City</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-gold p-2 bg-gold bg-opacity-10 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Reservations</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-gold p-2 bg-gold bg-opacity-10 rounded-full">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Happy Hours</h4>
                    <p className="text-gray-300">Monday – Friday: 4 PM – 7 PM</p>
                    <p className="text-gray-300">Weekends: 3 PM – 8 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Embedded Google Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215685575191!2d-73.98785692392196!3d40.75850853497658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1695919821875!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
