import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Shield, Clock, Map, ChevronRight, CheckCircle2, Users, Calendar } from 'lucide-react';

export default function Home() {
  const [leadForm, setLeadForm] = useState({ name: '', email: '', destination: '', budget: '' });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your request! Our travel expert will contact you shortly.');
  };

  return (
    <div className="bg-surface">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Beautiful landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Discover the World's <br className="hidden md:block" />
            <span className="text-accent">Hidden Wonders</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-3xl mx-auto drop-shadow-md"
          >
            Seamless, unforgettable travel experiences curated with precision and care.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/planner" className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              Plan Your Trip <ChevronRight size={20} />
            </Link>
            <Link to="/destinations" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
              Explore Packages
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="bg-white py-8 border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-6">
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-semibold text-gray-800">4.9/5 Rating</span>
          </div>
          <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <Users className="text-primary" size={24} />
            <span className="font-semibold text-gray-800">10,000+ Happy Travelers</span>
          </div>
          <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <Shield className="text-primary" size={24} />
            <span className="font-semibold text-gray-800">Secure Booking</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DESTINATIONS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Trending Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Explore our most sought-after locations for your next unforgettable adventure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Romantic' },
            { name: 'Kyoto, Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Cultural' },
            { name: 'Swiss Alps', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Adventure' }
          ].map((dest, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer"
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                {dest.tag}
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                <Link to="/destinations" className="bg-accent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            View All Destinations <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* 4. POPULAR PACKAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Curated Experiences</h2>
              <p className="text-gray-600 max-w-2xl text-lg">Hand-picked itineraries designed for maximum enjoyment and zero stress.</p>
            </div>
            <Link to="/destinations" className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
              See All Packages
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: 'Bali Bliss Retreat', duration: '7 Days', price: '$1,299', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Luxury Villa', 'Spa Treatments', 'Private Tours'] },
              { id: 2, title: 'Amalfi Coast Explorer', duration: '5 Days', price: '$1,899', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Boat Tours', 'Wine Tasting', 'Boutique Hotel'] },
              { id: 3, title: 'Patagonia Expedition', duration: '10 Days', price: '$2,499', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Guided Hikes', 'Glacier Views', 'Eco-Lodge'] }
            ].map((pkg) => (
              <div key={pkg.id} className="bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                <div className="relative h-56">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                    {pkg.price} <span className="text-gray-500 font-normal text-xs">/person</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Calendar size={16} className="text-accent" /> {pkg.duration}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-green-500 shrink-0" /> {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/package/${pkg.id}`} className="block w-full text-center bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-xl font-semibold transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Travel With Flyvistin</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">We handle the details so you can focus on making memories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Map size={32} />, title: 'Expert Planning', desc: 'Itineraries crafted by destination specialists who know the hidden gems.' },
              { icon: <Shield size={32} />, title: 'Best Price Guarantee', desc: 'Premium experiences without the premium markup. We match any price.' },
              { icon: <Clock size={32} />, title: '24/7 Support', desc: 'Round-the-clock assistance anywhere in the world, whenever you need us.' },
              { icon: <Star size={32} />, title: 'Custom Itineraries', desc: 'Your trip, your way. 100% personalized to your preferences and pace.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="text-accent mb-6 bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Traveler Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Don't just take our word for it. Hear from our community of explorers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah & Mark', trip: 'Honeymoon in Maldives', text: 'Flyvistin planned the most perfect honeymoon. Every detail was flawless, from the seaplane transfer to the private beach dinner. Truly unforgettable!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
              { name: 'David Chen', trip: 'Solo Adventure in Peru', text: 'As a solo traveler, safety and logistics are my main concerns. Flyvistin took care of everything while still giving me the freedom to explore at my own pace.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
              { name: 'The Johnson Family', trip: 'Family Vacation in Costa Rica', text: 'Traveling with three kids is usually stressful, but not this time. The itinerary had the perfect balance of activities and downtime. Highly recommend!', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-8 relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-accent font-medium">{review.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEAD CAPTURE SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-10 lg:p-16 lg:w-1/2 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Travel Plan</h2>
              <p className="text-white/80 mb-8 text-lg">Tell us where you want to go, and our experts will craft a personalized itinerary within 24 hours. No commitment required.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent" /> 100% Custom Itinerary</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent" /> Insider Recommendations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent" /> Transparent Pricing</li>
              </ul>
            </div>
            <div className="bg-surface p-10 lg:p-16 lg:w-1/2">
              <form onSubmit={handleLeadSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={leadForm.name}
                    onChange={e => setLeadForm({...leadForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={leadForm.email}
                    onChange={e => setLeadForm({...leadForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <input 
                      type="text" 
                      value={leadForm.destination}
                      onChange={e => setLeadForm({...leadForm, destination: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder="e.g. Japan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                    <select 
                      value={leadForm.budget}
                      onChange={e => setLeadForm({...leadForm, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white text-gray-700"
                    >
                      <option value="">Select...</option>
                      <option value="economy">Economy ($)</option>
                      <option value="comfort">Comfort ($$)</option>
                      <option value="luxury">Luxury ($$$)</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg mt-4">
                  Get My Free Itinerary
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-surface text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Join thousands of travelers who have discovered the world with Flyvistin.</p>
        <Link to="/planner" className="inline-block bg-primary hover:bg-primary-light text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl">
          Plan Your Dream Trip Now
        </Link>
      </section>
    </div>
  );
}
