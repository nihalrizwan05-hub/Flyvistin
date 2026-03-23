import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-accent text-white p-2 rounded-lg">
                <Plane size={24} className="transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Flyvistin
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Seamless, unforgettable travel experiences curated with precision and care. Your journey begins here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/destinations" className="hover:text-accent transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors">Tour Packages</Link></li>
              <li><Link to="/planner" className="hover:text-accent transition-colors">Custom Trip Planner</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span>Kochi, Kerala<br />India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>+91 6235547735</span>
                  <span>+91 7907538730</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:nihal.rizwan05@gmail.com" className="hover:text-accent transition-colors">nihal.rizwan05@gmail.com</a>
                  <a href="mailto:harishankarajith001@gmail.com" className="hover:text-accent transition-colors">harishankarajith001@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for exclusive deals and travel inspiration.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button 
                type="submit"
                className="bg-accent hover:bg-accent-hover text-white rounded-lg px-4 py-2.5 font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Flyvistin. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
