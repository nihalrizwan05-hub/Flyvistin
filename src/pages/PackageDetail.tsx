import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, Star, Clock, Users, Shield, Plane, ChevronRight, MessageSquare } from 'lucide-react';

export default function PackageDetail() {
  const { id } = useParams();

  // Mock data based on ID
  const pkg = {
    id: id,
    title: 'Santorini Romantic Escape',
    destination: 'Santorini, Greece',
    price: '$2,499',
    duration: '7 Days, 6 Nights',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    description: 'Experience the magic of Santorini with our exclusive romantic escape package. Stay in a luxury cliffside villa, enjoy private sunset cruises, and indulge in authentic Greek cuisine. Perfect for honeymoons or anniversary celebrations.',
    inclusions: [
      '5-Star Cliffside Villa Accommodation',
      'Daily Champagne Breakfast',
      'Private Santorini Sunset Catamaran Cruise',
      'Wine Tasting Tour at 3 Local Wineries',
      'Round-trip Airport Transfers',
      '24/7 Dedicated Concierge Service'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', desc: 'Arrive in Santorini. Private transfer to your luxury villa. Welcome dinner overlooking the caldera.' },
      { day: 2, title: 'Oia Exploration', desc: 'Guided walking tour of Oia. Afternoon at leisure. Sunset viewing from a private terrace.' },
      { day: 3, title: 'Catamaran Cruise', desc: 'Full-day private catamaran cruise around the island, including hot springs and a BBQ lunch onboard.' },
      { day: 4, title: 'Wine Tasting', desc: 'Visit three of Santorini\'s most renowned wineries. Learn about the unique volcanic terroir.' },
      { day: 5, title: 'Beach Day', desc: 'Relax at the famous Red Beach or Perissa Black Sand Beach. Optional water sports available.' },
      { day: 6, title: 'Farewell Dinner', desc: 'Free day for shopping or relaxing. Farewell romantic dinner at a Michelin-starred restaurant.' },
      { day: 7, title: 'Departure', desc: 'Enjoy a final breakfast before your private transfer to the airport.' }
    ]
  };

  return (
    <div className="bg-surface min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/80 mb-4 font-medium">
            <MapPin size={18} /> {pkg.destination}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">{pkg.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-white">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              <Clock size={18} /> {pkg.duration}
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              <Star size={18} className="text-yellow-400 fill-current" /> {pkg.rating} ({pkg.reviews} Reviews)
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section className="mb-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{pkg.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8">Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                        {day.day}
                      </div>
                      {idx !== pkg.itinerary.length - 1 && (
                        <div className="w-px h-full bg-gray-200 my-2"></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Day {day.day}: {day.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{day.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Booking Card */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex justify-between items-end mb-6 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-gray-500 font-medium mb-1">Starting from</p>
                  <h3 className="text-4xl font-bold text-primary">{pkg.price}</h3>
                </div>
                <span className="text-sm text-gray-500">per person</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="text-accent" size={20} />
                  <span className="font-medium">Flexible Dates Available</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="text-accent" size={20} />
                  <span className="font-medium">Min. 2 People</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="text-accent" size={20} />
                  <span className="font-medium">Free Cancellation (48h)</span>
                </div>
              </div>

              <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-8 flex items-start gap-3 border border-red-100">
                <Clock className="shrink-0 mt-0.5" size={18} />
                <p className="text-sm font-medium">High demand! 12 people are currently looking at this package.</p>
              </div>

              <Link to="/planner" className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 mb-4">
                Book Now <ChevronRight size={20} />
              </Link>
              
              <button className="w-full bg-surface hover:bg-gray-100 text-primary py-4 rounded-xl font-bold text-lg transition-colors border border-gray-200 flex items-center justify-center gap-2">
                <MessageSquare size={20} /> Ask a Question
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
