import React from 'react';
import { PATIENT_TESTIMONIALS } from '../data/physioData';
import { Star, CheckCircle, Quote, MapPin, Clock, HeartHandshake } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#FDFCFB] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] border border-[#1A1A1A]/10 bg-white mb-3">
            <HeartHandshake className="w-3 h-3 text-[#1A1A1A]" />
            Patient Stories
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Restored Mobility &amp; Patient Stories
          </h2>
          <p className="text-[#4A4A4A] text-sm sm:text-base mt-2 font-normal">
            Experiences shared by patients from Grand City, Dinga, Sarai Alamgir, and Kharian who were treated under Dr. Awais Ahmed’s care.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PATIENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF8F5] border border-[#1A1A1A]/10 p-6 sm:p-8 hover:border-[#1A1A1A]/30 transition-all flex flex-col justify-between relative group"
            >
              {/* Quote Emblem */}
              <div className="absolute top-6 right-6 text-[#1A1A1A]/10 group-hover:text-[#1A1A1A]/20 transition-colors pointer-events-none">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* Star rating & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
                    ))}
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] bg-white px-2.5 py-1 border border-[#1A1A1A]/10 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#8C887F]" />
                    {t.duration}
                  </span>
                </div>

                {/* Condition Tag */}
                <div className="mb-4">
                  <span className="text-[9px] uppercase tracking-widest font-semibold text-[#1A1A1A] bg-white px-2.5 py-1 border border-[#1A1A1A]/10 inline-block">
                    {t.condition}
                  </span>
                  <div className="text-xs font-serif font-medium text-[#1A1A1A] mt-1.5">
                    Outcome: {t.recoverySummary}
                  </div>
                </div>

                {/* Patient Quote */}
                <p className="font-serif text-[#1A1A1A] text-base sm:text-lg leading-relaxed italic relative z-10 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-5 mt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-serif font-medium text-[#1A1A1A] flex items-center gap-1.5">
                    <span>{t.name}</span>
                  </div>
                  <div className="text-[11px] text-[#8C887F] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#8C887F]" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <div className="text-[10px] uppercase tracking-widest text-[#8C887F]">
                  Sultan Hospital
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 p-6 bg-[#FAF8F5] border border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-serif text-base font-medium text-[#1A1A1A]">Suffering from chronic spinal pain or motor impairment?</div>
            <div className="text-xs text-[#8C887F] mt-0.5">Every patient receives an individual physical examination before any treatment plan is initiated.</div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 bg-[#1A1A1A] text-white">Clinic Hours: 10:00 AM – 2:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
};
