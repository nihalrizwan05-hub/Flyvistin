/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ExitIntentPopup from './components/ExitIntentPopup';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import PackageDetail from './pages/PackageDetail';
import TripPlanner from './pages/TripPlanner';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/planner" element={<TripPlanner />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ExitIntentPopup />
      </div>
    </Router>
  );
}
