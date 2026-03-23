import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, DollarSign, Calendar, Users, User, Mail, Phone, ChevronRight, ChevronLeft, CheckCircle2, Plane } from 'lucide-react';

export default function TripPlanner() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    dates: '',
    travelers: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const updateForm = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="bg-surface min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Design Your Dream Trip</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tell us what you're looking for, and our travel experts will craft the perfect itinerary.</p>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="mb-12 relative">
            <div className="flex justify-between mb-2">
              {[...Array(totalSteps)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300 ${
                    step > i + 1 ? 'bg-accent text-white' : step === i + 1 ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > i + 1 ? <CheckCircle2 size={16} /> : i + 1}
                </div>
              ))}
            </div>
            <div className="absolute top-4 left-4 right-4 h-1 bg-gray-200 -z-0 rounded-full">
              <div 
                className="h-full bg-accent transition-all duration-500 rounded-full"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative min-h-[400px]">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 h-full flex flex-col"
              >
                
                {/* Step 1: Destination */}
                {step === 1 && (
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                      <MapPin className="text-accent" /> Where do you want to go?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Europe', 'Asia', 'South America', 'North America', 'Africa', 'Oceania', 'Not sure yet'].map((region) => (
                        <button
                          key={region}
                          onClick={() => { updateForm('destination', region); handleNext(); }}
                          className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
                            formData.destination === region 
                              ? 'border-accent bg-accent/5 text-accent' 
                              : 'border-gray-200 hover:border-primary/30 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {region}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Budget */}
                {step === 2 && (
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                      <DollarSign className="text-accent" /> What's your estimated budget?
                    </h2>
                    <p className="text-gray-500 mb-8">Per person, excluding flights.</p>
                    <div className="space-y-4">
                      {[
                        { label: 'Economy', range: 'Under $1,500', desc: 'Comfortable 3-star hotels, group tours, local dining.' },
                        { label: 'Comfort', range: '$1,500 - $3,000', desc: 'Boutique 4-star hotels, mix of private/group tours, fine dining.' },
                        { label: 'Luxury', range: '$3,000+', desc: '5-star resorts, private guides, exclusive experiences.' }
                      ].map((b) => (
                        <button
                          key={b.label}
                          onClick={() => { updateForm('budget', b.label); handleNext(); }}
                          className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                            formData.budget === b.label 
                              ? 'border-accent bg-accent/5' 
                              : 'border-gray-200 hover:border-primary/30 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className={`font-bold text-lg ${formData.budget === b.label ? 'text-accent' : 'text-gray-900'}`}>{b.label}</span>
                            <span className="text-gray-500 font-medium">{b.range}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{b.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Dates */}
                {step === 3 && (
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                      <Calendar className="text-accent" /> When are you planning to travel?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Next 3 months', '3-6 months', '6-12 months', 'More than a year', 'Dates are flexible'].map((date) => (
                        <button
                          key={date}
                          onClick={() => { updateForm('dates', date); handleNext(); }}
                          className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
                            formData.dates === date 
                              ? 'border-accent bg-accent/5 text-accent' 
                              : 'border-gray-200 hover:border-primary/30 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Travelers */}
                {step === 4 && (
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                      <Users className="text-accent" /> Who is traveling?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Solo', desc: 'Just me' },
                        { label: 'Couple', desc: '2 adults' },
                        { label: 'Family', desc: 'Adults & children' },
                        { label: 'Group', desc: 'Friends or extended family' }
                      ].map((t) => (
                        <button
                          key={t.label}
                          onClick={() => { updateForm('travelers', t.label); handleNext(); }}
                          className={`p-6 rounded-xl border-2 text-left transition-all ${
                            formData.travelers === t.label 
                              ? 'border-accent bg-accent/5' 
                              : 'border-gray-200 hover:border-primary/30 hover:bg-gray-50'
                          }`}
                        >
                          <span className={`block font-bold text-lg mb-1 ${formData.travelers === t.label ? 'text-accent' : 'text-gray-900'}`}>{t.label}</span>
                          <span className="text-gray-500 text-sm">{t.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Info */}
                {step === 5 && (
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-primary mb-6">Almost there!</h2>
                    <p className="text-gray-500 mb-8">Where should we send your personalized itinerary?</p>
                    
                    <form id="planner-form" onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"><User size={16} className="text-accent"/> Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => updateForm('name', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-surface"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"><Mail size={16} className="text-accent"/> Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={e => updateForm('email', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-surface"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"><Phone size={16} className="text-accent"/> Phone Number (Optional)</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => updateForm('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-surface"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </form>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-10 flex justify-between items-center pt-6 border-t border-gray-100">
                  <button 
                    onClick={handlePrev}
                    disabled={step === 1}
                    className={`flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition-colors ${
                      step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronLeft size={20} /> Back
                  </button>
                  
                  {step < totalSteps ? (
                    <button 
                      onClick={handleNext}
                      disabled={
                        (step === 1 && !formData.destination) ||
                        (step === 2 && !formData.budget) ||
                        (step === 3 && !formData.dates) ||
                        (step === 4 && !formData.travelers)
                      }
                      className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                      Next <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button 
                      type="submit"
                      form="planner-form"
                      className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1"
                    >
                      Get My Itinerary <Plane size={20} className="transform rotate-45" />
                    </button>
                  )}
                </div>

              </motion.div>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Request Received!</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-md">
                  Thank you, {formData.name || 'Traveler'}! Your expert will contact you within <strong>30 minutes</strong> with a personalized itinerary for {formData.destination || 'your trip'}.
                </p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-md"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
