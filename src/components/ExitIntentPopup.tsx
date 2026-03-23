import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full relative"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white/50 backdrop-blur-sm rounded-full p-1"
            >
              <X size={24} />
            </button>

            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Travel" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                <Plane size={24} className="text-accent transform -rotate-45" />
                <span className="text-2xl font-bold">Flyvistin</span>
              </div>
            </div>

            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-3">Wait! Don't Leave Empty Handed</h2>
              <p className="text-gray-600 mb-6">
                Get <span className="font-bold text-accent">$200 off</span> your first custom itinerary when you plan your trip with us today.
              </p>
              
              <div className="flex flex-col gap-3">
                <Link 
                  to="/planner"
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md transform hover:-translate-y-1"
                >
                  Claim My $200 Discount
                </Link>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-surface hover:bg-gray-100 text-gray-600 py-3 rounded-xl font-medium transition-colors"
                >
                  No thanks, I prefer paying full price
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
