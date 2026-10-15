import React from 'react';
import { DOCTOR_PROFILE, MARQUEE_IMAGES } from '../data/physioData';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Activity, 
  ArrowRight,
  Sparkles,
  Camera,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  customDoctorImage: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  customDoctorImage,
}) => {
  const doctorImg = customDoctorImage || DOCTOR_PROFILE.doctorImage;

  return (
    <section className="relative overflow-hidden bg-[#FDFCFB] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1A1A1A]/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Presentation & Editorial Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Hospital & Specialization Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold bg-[#F7F5F2] text-[#1A1A1A] border border-[#1A1A1A]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
                Sultan Hospital
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-[#8C887F] border border-[#1A1A1A]/10">
                <Award className="w-3 h-3 text-[#1A1A1A]" />
                Comprehensive Physical Therapy Clinic
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.4em] font-semibold text-[#8C887F] block">
                The Art of Evidence-Based Recovery
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight font-light text-[#1A1A1A]">
                Restoring <br />
                <span className="italic font-normal">Natural</span> Movement
              </h1>
            </div>

            {/* Architectural Line Reveal */}
            <div className="line-reveal"></div>

            <p className="text-base sm:text-lg text-[#4A4A4A] max-w-xl font-normal leading-relaxed">
              Dr. Awais Ahmed integrates advanced manual therapy with neuro-kinetic science to deliver specialized non-surgical rehabilitation for acute spine disc disorders, stroke paralysis, post-surgical joints, and sports injuries at Sultan Hospital.
            </p>

            {/* Expertise 2-Column Grid matching Design HTML */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#8C887F]">Specialty 01</span>
                <span className="font-serif text-lg sm:text-xl text-[#1A1A1A] border-l-2 border-[#1A1A1A] pl-3.5">
                  Neuro-Rehab
                </span>
                <span className="text-[11px] text-[#8C887F] pl-4">Stroke &amp; Paralysis</span>
              </div>

              <div className="flex flex-col space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#8C887F]">Specialty 02</span>
                <span className="font-serif text-lg sm:text-xl text-[#1A1A1A] border-l-2 border-[#1A1A1A] pl-3.5">
                  Spine Decompression
                </span>
                <span className="text-[11px] text-[#8C887F] pl-4">Sciatica &amp; Disc</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex flex-col space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#8C887F]">OPD Schedule</span>
                <span className="font-serif text-lg sm:text-xl text-[#1A1A1A] border-l-2 border-[#1A1A1A] pl-3.5">
                  10am – 2pm
                </span>
                <span className="text-[11px] text-[#8C887F] pl-4">Mon to Sat</span>
              </div>
            </div>

            {/* CTAs & Direct Hotline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#333] text-white text-[11px] uppercase tracking-widest font-semibold border border-[#1A1A1A] transition-all cursor-pointer shadow-sm group"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E5E1D8]" />
                <span>Book OPD Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=Assalam-o-Alaikum%20Dr.%20Awais%20Ahmed,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation%20at%20Sultan%20Hospital%20Grand%20City.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F7F5F2] hover:bg-[#EFECE6] text-[#1A1A1A] text-[11px] uppercase tracking-widest font-semibold border border-[#1A1A1A]/15 transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp Consult</span>
              </a>

              <a
                href={`tel:${DOCTOR_PROFILE.primaryPhone.replace(/-/g, '')}`}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F7F5F2] border border-[#1A1A1A]/20 text-[#1A1A1A] text-[11px] uppercase tracking-widest font-semibold transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C887F]" />
                <span>{DOCTOR_PROFILE.primaryPhone}</span>
              </a>
            </div>

            {/* Direct Doctor Numbers Sub-bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#8C887F] pt-2">
              <span className="flex items-center gap-1.5 text-[#1A1A1A]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                Direct Helpline: 0306-0752970 / 0330-9999366
              </span>
              <span>•</span>
              <span>Grand City, Sarai Alamgir • Dinga • Kharian • Gujrat</span>
            </div>
          </motion.div>

          {/* Right Column: Doctor Hero Portrait & Credentials Showcase in Deep Editorial Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative bg-[#1A1A1A] text-white border border-[#1A1A1A] overflow-hidden shadow-2xl">
                
                {/* Doctor Portrait Header Area */}
                <div className="relative h-80 sm:h-96 w-full bg-[#1A1A1A] overflow-hidden group">
                  <img
                    src={doctorImg}
                    alt={DOCTOR_PROFILE.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent pointer-events-none" />
                  
                  {/* Hospital Brand Badge on Image */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 text-white border border-white/15 px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#E5E1D8]">
                      Sultan Hospital
                    </span>
                  </div>

                  {/* Doctor Info Floating at bottom of image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#8C887F]">
                        Consultant PT
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
                      {DOCTOR_PROFILE.name}
                    </h3>
                    <p className="text-xs text-[#E5E1D8]/80 font-light mt-0.5">
                      Sultan Hospital, Grand City, near Sarai Alamgir
                    </p>
                  </div>
                </div>

                {/* Floating Location Card inside matching Design HTML */}
                <div className="p-5 bg-[#141414] border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#8C887F] mb-0.5">Currently Located</p>
                    <p className="text-xs sm:text-sm font-light text-[#E5E1D8]">Sultan Hospital, Grand City Center</p>
                  </div>
                  <div className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Verified Trust Stats Badge */}
              <div className="mt-4 p-4 bg-[#F7F5F2] border border-[#1A1A1A]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#1A1A1A]/20 bg-white flex items-center justify-center text-[#1A1A1A]">
                    <Activity className="w-4 h-4 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <div className="font-serif text-sm font-semibold text-[#1A1A1A]">2,000+ Cases</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C887F]">Neuro &amp; Ortho Recoveries</div>
                  </div>
                </div>
                <a
                  href={DOCTOR_PROFILE.facebookPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] hover:underline cursor-pointer"
                >
                  Watch on Facebook →
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* CONTINUOUS MOVING THERAPY PICTURES IN A LOOP (MARQUEE) */}
        {/* ---------------------------------------------------- */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-[#1A1A1A]/10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] mb-1">
                Clinical In-Action Gallery
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] tracking-tight">
                Specialized Physical Therapy in Practice
              </h2>
            </div>
            <p className="text-xs text-[#8C887F] max-w-sm">
              Continuous showcase of advanced manual therapy, neuromuscular rehabilitation, and modern modalities.
            </p>
          </div>

          {/* Endless Marquee Loop Container */}
          <div className="relative w-full overflow-hidden border border-[#1A1A1A]/10 bg-[#F7F5F2] py-4">
            
            {/* Soft Edge Fade Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F7F5F2] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F7F5F2] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-5">
              {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="group relative w-72 sm:w-80 h-48 sm:h-52 overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/20 shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:border-[#1A1A1A]"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#FDFCFB]/95 text-[#1A1A1A] border border-[#1A1A1A]/10 px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold">
                    {item.category}
                  </div>

                  {/* Title & Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-serif text-sm sm:text-base font-normal leading-tight group-hover:text-[#E5E1D8] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] uppercase tracking-wider text-[#8C887F] line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
