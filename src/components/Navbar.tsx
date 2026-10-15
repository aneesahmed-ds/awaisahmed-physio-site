import React, { useState } from 'react';
import { DOCTOR_PROFILE } from '../data/physioData';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Calendar,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (initialCondition?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${DOCTOR_PROFILE.name} - Physiotherapy Clinic`,
        text: `Official Portfolio & Appointment Portal for ${DOCTOR_PROFILE.name} at ${DOCTOR_PROFILE.hospital}, Grand City.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const navLinks = [
    { name: 'Specializations', href: '#specialties' },
    { name: 'Pain Navigator', href: '#pain-navigator' },
    { name: 'Therapy Showcase', href: '#showcase' },
    { name: 'Recovery Tracker', href: '#recovery-sim' },
    { name: 'Patient Stories', href: '#testimonials' },
    { name: 'Location & Timing', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#1A1A1A]/10">
      {/* Top Subtle Editorial Metadata Bar */}
      <div className="bg-[#1A1A1A] text-[#E5E1D8] text-[11px] py-2 px-4 sm:px-8 hidden md:block border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 uppercase tracking-[0.25em] text-[10px] font-semibold text-[#8C887F]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
              </span>
              Sultan Hospital • Physical Therapy Clinic
            </span>
            <span className="flex items-center gap-1.5 text-[#E5E1D8]/80 text-[11px]">
              <Clock className="w-3 h-3 text-[#8C887F]" />
              OPD Hours: {DOCTOR_PROFILE.timings}
            </span>
            <span className="flex items-center gap-1.5 text-[#E5E1D8]/80 text-[11px]">
              <MapPin className="w-3 h-3 text-[#8C887F]" />
              Grand City, near Sarai Alamgir
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${DOCTOR_PROFILE.primaryPhone.replace(/-/g, '')}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#E5E1D8] transition-colors text-[11px] font-semibold tracking-wide"
            >
              <Phone className="w-3 h-3 text-[#8C887F]" />
              {DOCTOR_PROFILE.primaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Doctor Name in Editorial Style */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 border border-[#1A1A1A] bg-[#1A1A1A] flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <span className="font-serif text-base tracking-tight font-medium">AA</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C887F]">
                Clinical Portfolio
              </span>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#1A1A1A]">
                  {DOCTOR_PROFILE.name}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest font-medium border border-[#1A1A1A]/15 bg-[#F7F5F2] text-[#1A1A1A]">
                  Neuro-Muscular PT
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium text-[#1A1A1A]/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1A1A1A] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#1A1A1A] after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">

            <a
              href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=Assalam-o-Alaikum%20Dr.%20Awais%20Ahmed,%20I%20would%20like%20to%20consult%20about%20a%20physiotherapy%20session%20at%20Sultan%20Hospital.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[10px] uppercase tracking-widest font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/60 transition-all"
            >
              <MessageSquare className="w-3 h-3 text-emerald-700" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-widest font-semibold text-white bg-[#1A1A1A] hover:bg-[#333333] border border-[#1A1A1A] transition-all cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden inline-flex items-center px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold text-white bg-[#1A1A1A] border border-[#1A1A1A]"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:bg-[#F7F5F2] transition-colors border border-[#1A1A1A]/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1A1A1A]/10 bg-[#FDFCFB] px-5 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-xs uppercase tracking-widest font-medium text-[#1A1A1A] hover:bg-[#F7F5F2] transition-colors border-l border-transparent hover:border-[#1A1A1A]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-col gap-2">

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${DOCTOR_PROFILE.primaryPhone.replace(/-/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2.5 text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] bg-[#F7F5F2] border border-[#1A1A1A]/15"
              >
                <Phone className="w-3 h-3 text-[#8C887F]" />
                Call Line
              </a>
              <a
                href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-[10px] uppercase tracking-widest font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300"
              >
                <MessageSquare className="w-3 h-3 text-emerald-700" />
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest font-bold text-white bg-[#1A1A1A] border border-[#1A1A1A]"
            >
              Book Physical Therapy Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
