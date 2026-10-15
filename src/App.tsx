import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AnatomicalPainNavigator } from './components/AnatomicalPainNavigator';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TherapyShowcaseMarquee } from './components/TherapyShowcaseMarquee';
import { RecoverySimulator } from './components/RecoverySimulator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { DOCTOR_PROFILE } from './data/physioData';
import { Phone, MessageSquare, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingCondition, setSelectedBookingCondition] = useState<string>('');
  const doctorImage = DOCTOR_PROFILE.doctorImage;

  const handleOpenBooking = (initialCondition?: string) => {
    if (initialCondition) {
      setSelectedBookingCondition(initialCondition);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] flex flex-col selection:bg-[#1A1A1A] selection:text-white font-sans relative">
      
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with In-Motion Continuous Therapy Pictures Marquee */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          customDoctorImage={doctorImage}
        />

        {/* Interactive Anatomical Pain & Symptom Diagnostic Navigator */}
        <AnatomicalPainNavigator
          onSelectConditionToBook={(condition) => handleOpenBooking(condition)}
        />

        {/* 9 Core Clinical Specialties & Hospital Modalities */}
        <SpecialtiesSection
          onSelectSpecialtyToBook={(specialtyTitle) => handleOpenBooking(specialtyTitle)}
        />

        {/* Dual-Direction Continuous In-Motion Gallery Showcase */}
        <TherapyShowcaseMarquee />

        {/* Interactive Range-of-Motion & Recovery Milestone Simulator */}
        <RecoverySimulator
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Regional Patient Testimonials */}
        <TestimonialsSection />

        {/* Location, Sultan Hospital Timings & Interactive Direction Card */}
        <LocationContactSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Bottom Quick-Action Bar for Mobile Screens */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-[#1A1A1A]/10 p-2.5 sm:hidden shadow-lg flex items-center gap-2">
        <a
          href={`tel:${DOCTOR_PROFILE.primaryPhone.replace(/-/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/15 text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-[#1A1A1A]" />
          Call
        </a>

        <a
          href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=Assalam-o-Alaikum%20Dr.%20Awais%20Ahmed,%20I%20want%20to%20book%20a%20physiotherapy%20session%20at%20Sultan%20Hospital.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          WhatsApp
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1.5 flex items-center justify-center gap-1.5 py-2.5 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-widest font-semibold cursor-pointer border border-[#1A1A1A]"
        >
          <Calendar className="w-3.5 h-3.5" />
          Book OPD
        </button>
      </div>

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCondition={selectedBookingCondition}
      />

    </div>
  );
}
