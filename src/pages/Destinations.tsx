import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, MapPin, Calendar, DollarSign, ChevronRight } from 'lucide-react';

const destinations = [
  { id: 1, name: 'Santorini, Greece', region: 'Europe', type: 'Romantic', budget: '$$$', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bestTime: 'May - October', highlights: ['Oia Sunsets', 'Volcano Tours', 'Wine Tasting'] },
  { id: 2, name: 'Kyoto, Japan', region: 'Asia', type: 'Cultural', budget: '$$', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bestTime: 'March - May', highlights: ['Cherry Blossoms', 'Temples', 'Tea Ceremonies'] },
  { id: 3, name: 'Swiss Alps', region: 'Europe', type: 'Adventure', budget: '$$$', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bestTime: 'December - March', highlights: ['Skiing', 'Hiking', 'Scenic Trains'] },
  { id: 4, name: 'Bali, Indonesia', region: 'Asia', type: 'Relaxation', budget: '$', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bestTime: 'April - October', highlights: ['Beaches', 'Yoga Retreats', 'Rice Terraces'] },
  { id: 5, name: 'Machu Picchu, Peru', region: 'South America', type: 'Adventure', budget: '$$', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bestTime: 'May - September', highlights: ['Inca Trail', 'Cusco', 'Sacred Valley'] },
  { id: 6, name: 'Maui, Hawaii', region: 'North America', type: 'Family', budget: '$$$', image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bestTime: 'April - May, Sept - Nov', highlights: ['Road to Hana', 'Snorkeling', 'Luau'] },
];

export default function Destinations() {
  const [filterRegion, setFilterRegion] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterBudget, setFilterBudget] = useState('All');

  const filteredDestinations = destinations.filter(dest => {
    return (filterRegion === 'All' || dest.region === filterRegion) &&
           (filterType === 'All' || dest.type === filterType) &&
           (filterBudget === 'All' || dest.budget === filterBudget);
  });

  return (
    <div className="bg-surface min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Destinations</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Find your perfect getaway from our curated list of the world's most breathtaking locations.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Filter size={20} />
            <span>Filter By:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <select 
              className="bg-surface border border-gray-200 text-gray-700 py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
            >
              <option value="All">All Regions</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>

            <select 
              className="bg-surface border border-gray-200 text-gray-700 py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Romantic">Romantic</option>
              <option value="Cultural">Cultural</option>
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Family">Family</option>
            </select>

            <select 
              className="bg-surface border border-gray-200 text-gray-700 py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
              value={filterBudget}
              onChange={(e) => setFilterBudget(e.target.value)}
            >
              <option value="All">All Budgets</option>
              <option value="$">Economy ($)</option>
              <option value="$$">Comfort ($$)</option>
              <option value="$$$">Luxury ($$$)</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="relative h-64">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                  {dest.budget}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white mb-1">{dest.name}</h2>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin size={14} /> {dest.region}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {dest.type}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                    <Calendar size={14} /> {dest.bestTime}
                  </div>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-surface text-gray-600 px-3 py-1 rounded-lg text-sm border border-gray-100">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link to={`/package/${dest.id}`} className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-colors mt-auto">
                  View Packages <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => { setFilterRegion('All'); setFilterType('All'); setFilterBudget('All'); }}
              className="mt-6 text-accent font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
