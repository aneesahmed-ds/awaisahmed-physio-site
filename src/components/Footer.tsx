import React from 'react';
import { DOCTOR_PROFILE } from '../data/physioData';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Doctor Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-white bg-white/5">
                <span className="font-serif text-sm font-light tracking-widest">SH</span>
              </div>
              <div>
                <h3 className="font-serif text-base tracking-wide text-white uppercase">
                  {DOCTOR_PROFILE.hospital}
                </h3>
                <div className="text-[10px] text-[#8C887F] uppercase tracking-[0.2em] font-medium">
                  {DOCTOR_PROFILE.clinicName}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8C887F] leading-relaxed max-w-sm font-normal">
              Led by <strong className="text-white font-medium">{DOCTOR_PROFILE.name}</strong>, Consultant Neuro-Muscular Physiotherapist. Dedicated to restoring anatomical biomechanics, acute spinal disc disorders, neurological paralysis, and post-surgical joint rehabilitation.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#E5E1D8]">
                OPD: {DOCTOR_PROFILE.timings}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#E5E1D8]">
                Grand City, Sarai Alamgir
              </span>
            </div>
          </div>

          {/* Col 2: Clinical Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F]">
              Clinical Programs
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E1D8]">
              <li><a href="#specialties" className="hover:text-white transition-colors">Spinal Disc Decompression</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Stroke &amp; Hemiplegia Neuro-Rehab</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Post-Op Knee &amp; Hip Recovery</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Sports Injuries &amp; Ligament Repair</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Adhesive Capsulitis Mobilization</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Pediatric CP &amp; Motor Development</a></li>
            </ul>
          </div>

          {/* Col 3: Regional Access (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F]">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E1D8]">
              {DOCTOR_PROFILE.serviceAreas.map((area, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/60" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Contact & Direct Action (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href={`tel:${DOCTOR_PROFILE.primaryPhone.replace(/-/g, '')}`}
                className="block text-white hover:text-[#E5E1D8] font-mono transition-colors"
              >
                {DOCTOR_PROFILE.primaryPhone}
              </a>
              <a 
                href={`tel:${DOCTOR_PROFILE.phones[1].replace(/-/g, '')}`}
                className="block text-white hover:text-[#E5E1D8] font-mono transition-colors"
              >
                {DOCTOR_PROFILE.phones[1]}
              </a>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 bg-white text-[#1A1A1A] hover:bg-[#E5E1D8] text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                >
                  Book OPD Visit
                </button>
              </div>

              <a
                href={DOCTOR_PROFILE.facebookPost}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-white/5 hover:bg-white/10 text-white text-[10px] uppercase tracking-widest font-semibold border border-white/15 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3 h-3 text-[#E5E1D8]" />
                Follow on Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C887F]">
          <p className="font-normal">
            © {new Date().getFullYear()} {DOCTOR_PROFILE.name} • Sultan Hospital Physical Therapy Clinic, Grand City. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#8C887F]">
            <span>Evidence-Based Rehabilitation</span>
            <span>•</span>
            <span>Non-Surgical Pain Management</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
