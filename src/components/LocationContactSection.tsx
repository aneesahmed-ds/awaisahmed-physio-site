import React from 'react';
import { DOCTOR_PROFILE } from '../data/physioData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Navigation, 
  ShieldCheck, 
  Calendar, 
  ExternalLink,
  Car
} from 'lucide-react';

interface LocationContactSectionProps {
  onOpenBooking: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] border border-[#1A1A1A]/10 bg-white mb-3">
            <MapPin className="w-3 h-3 text-[#1A1A1A]" />
            Clinic Location &amp; Visiting Hours
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Sultan Hospital Physical Therapy Clinic
          </h2>
          <p className="text-[#4A4A4A] text-sm sm:text-base mt-2 font-normal">
            Centrally located in Grand City, providing easy regional access for patients traveling from Sarai Alamgir, Dinga, Kharian, and Gujrat.
          </p>
        </div>

        {/* 2-Column Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Hospital Card */}
            <div className="bg-[#1A1A1A] text-white p-6 sm:p-7 border border-[#1A1A1A]">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 border border-white/20 flex items-center justify-center font-serif text-lg text-white">
                  SH
                </div>
                <div>
                  <h3 className="font-serif text-lg font-normal text-white">
                    {DOCTOR_PROFILE.hospital}
                  </h3>
                  <div className="text-xs text-[#8C887F] font-normal">
                    {DOCTOR_PROFILE.clinicName}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-[#E5E1D8]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-widest font-semibold">Address:</strong>
                    Grand City, Main Boulevard, near Sarai Alamgir, Punjab, Pakistan
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-widest font-semibold">Clinic Timings:</strong>
                    {DOCTOR_PROFILE.timings}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Helpline Box */}
            <div className="bg-[#FDFCFB] border border-[#1A1A1A]/15 p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F] mb-3 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#1A1A1A]" />
                Direct Doctor Helplines:
              </div>

              <div className="space-y-2">
                {DOCTOR_PROFILE.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/-/g, '')}`}
                    className="flex items-center justify-between p-3.5 bg-[#FAF8F5] hover:bg-white border border-[#1A1A1A]/10 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 border border-[#1A1A1A]/20 flex items-center justify-center text-[10px] font-serif font-bold text-[#1A1A1A]">
                        0{i + 1}
                      </div>
                      <span className="text-base font-serif font-medium text-[#1A1A1A]">
                        {phone}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8C887F] group-hover:text-[#1A1A1A]">Call</span>
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <a
                  href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=Assalam-o-Alaikum%20Dr.%20Awais%20Ahmed,%20I%20need%20information%20regarding%20physical%20therapy%20treatment%20at%20Sultan%20Hospital.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 bg-[#1A1A1A] hover:bg-[#333] text-white text-[10px] uppercase tracking-widest font-semibold transition-colors border border-[#1A1A1A]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>

                <button
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-1.5 py-3 bg-white hover:bg-[#F7F5F2] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold border border-[#1A1A1A]/20 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Online
                </button>
              </div>
            </div>

            {/* Travel Radius Times */}
            <div className="p-4 bg-[#FDFCFB] border border-[#1A1A1A]/10 text-xs text-[#4A4A4A]">
              <div className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#8C887F]" />
                Approximate Travel Time to Sultan Hospital Grand City:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] mt-2">
                <div className="bg-[#FAF8F5] p-2.5 border border-[#1A1A1A]/10">
                  <span className="block font-serif font-medium text-[#1A1A1A]">Sarai Alamgir</span>
                  <span className="text-[#8C887F] text-[10px]">5-8 mins</span>
                </div>
                <div className="bg-[#FAF8F5] p-2.5 border border-[#1A1A1A]/10">
                  <span className="block font-serif font-medium text-[#1A1A1A]">Dinga / Kharian</span>
                  <span className="text-[#8C887F] text-[10px]">15-20 mins</span>
                </div>
                <div className="bg-[#FAF8F5] p-2.5 border border-[#1A1A1A]/10">
                  <span className="block font-serif font-medium text-[#1A1A1A]">Gujrat City</span>
                  <span className="text-[#8C887F] text-[10px]">25-30 mins</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Map Card with Coordinates & Directions */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 border border-[#1A1A1A]/15 bg-[#1A1A1A] flex flex-col min-h-[380px] overflow-hidden">
              
              {/* Map Canvas Simulated Backdrop with Road Grid & Pin */}
              <div className="absolute inset-0 bg-[#141414] flex items-center justify-center overflow-hidden">
                {/* SVG Blueprint style map representation */}
                <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#666" strokeWidth="0.6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="#141414" />
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Road lines */}
                  <path d="M 0,150 Q 200,120 400,200 T 800,280" fill="none" stroke="#555" strokeWidth="4" />
                  <path d="M 100,0 Q 250,200 350,450" fill="none" stroke="#555" strokeWidth="3" />
                  <path d="M 300,50 L 550,380" fill="none" stroke="#888" strokeWidth="2" strokeDasharray="4,4" />
                </svg>

                {/* Sultan Hospital Marker in Center */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-white opacity-20"></span>
                    <div className="relative w-12 h-12 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center shadow-2xl border border-[#1A1A1A]">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mt-3 bg-[#1A1A1A]/95 text-white border border-white/20 px-5 py-2.5 shadow-xl text-center">
                    <div className="text-[9px] uppercase tracking-widest font-semibold text-[#8C887F]">
                      Sultan Hospital
                    </div>
                    <div className="font-serif text-sm font-medium text-white">
                      Physical Therapy &amp; Rehab Clinic
                    </div>
                    <div className="text-[10px] text-[#8C887F]">
                      Dr. Awais Ahmed • Grand City
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Floating Actions Overlay */}
              <div className="relative z-20 mt-auto p-4 sm:p-6 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent flex flex-col sm:flex-row items-center justify-between gap-3 text-white border-t border-white/10">
                <div className="text-[11px] text-[#8C887F] text-center sm:text-left">
                  <span>Grand City Sarai Alamgir • Accessible via GT Road &amp; Dinga-Kharian Link</span>
                </div>

                <a
                  href="https://www.google.com/maps/search/Sultan+Hospital+Grand+City+Sarai+Alamgir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white text-[#1A1A1A] hover:bg-[#E5E1D8] text-[10px] uppercase tracking-widest font-semibold transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
