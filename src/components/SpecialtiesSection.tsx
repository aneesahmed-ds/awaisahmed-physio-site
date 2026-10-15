import React, { useState } from 'react';
import { CLINICAL_SPECIALTIES, CLINIC_MODALITIES } from '../data/physioData';
import { Specialty } from '../types';
import { 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Layers, 
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SpecialtiesSectionProps {
  onSelectSpecialtyToBook: (specialtyTitle: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyToBook,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'spine' | 'neuro' | 'ortho' | 'pediatric'>('all');
  const [selectedSpecialtyModal, setSelectedSpecialtyModal] = useState<Specialty | null>(null);

  const filteredSpecialties = CLINICAL_SPECIALTIES.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'spine') return item.id.includes('neck') || item.id.includes('muscle');
    if (activeFilter === 'neuro') return item.id.includes('stroke') || item.id.includes('cerebral');
    if (activeFilter === 'ortho') return item.id.includes('surgical') || item.id.includes('fracture') || item.id.includes('sports') || item.id.includes('gout');
    if (activeFilter === 'pediatric') return item.id.includes('pediatric') || item.id.includes('cerebral');
    return true;
  });

  return (
    <section id="specialties" className="py-16 sm:py-24 bg-[#FDFCFB] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] border border-[#1A1A1A]/10 bg-white mb-3">
              <Activity className="w-3 h-3 text-[#1A1A1A]" />
              Sultan Hospital Clinical Scope
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight">
              Clinical Specialties &amp; Programs
            </h2>
            <p className="text-[#4A4A4A] text-sm sm:text-base mt-2 font-normal">
              Specialized physical therapy programs delivered by Dr. Awais Ahmed at Sultan Hospital, utilizing advanced neuromuscular methods and evidence-based clinical staging.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F7F5F2] border border-[#1A1A1A]/10">
            {[
              { id: 'all', label: 'All 9 Programs' },
              { id: 'spine', label: 'Spine & Pain' },
              { id: 'neuro', label: 'Neuro & Stroke' },
              { id: 'ortho', label: 'Ortho & Sports' },
              { id: 'pediatric', label: 'Pediatric & CP' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#8C887F] hover:text-[#1A1A1A] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSpecialties.map((specialty, idx) => (
            <motion.div
              key={specialty.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#FDFCFB] border border-[#1A1A1A]/10 overflow-hidden hover:border-[#1A1A1A]/30 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-[#FDFCFB]/95 text-[#1A1A1A] border border-[#1A1A1A]/10 px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold">
                  {specialty.badge}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug group-hover:text-[#E5E1D8] transition-colors">
                    {specialty.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  {specialty.shortDesc}
                </p>

                {/* Key conditions list */}
                <div className="space-y-1.5 pt-2 border-t border-[#1A1A1A]/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F]">
                    Key Conditions:
                  </div>
                  {specialty.conditionsTreated.slice(0, 2).map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-[#1A1A1A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">{c}</span>
                    </div>
                  ))}
                </div>

                {/* Duration & Actions */}
                <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between gap-2">
                  <div className="text-[10px] uppercase tracking-wider text-[#8C887F] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#1A1A1A]" />
                    <span>Evidence Staged</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedSpecialtyModal(specialty)}
                      className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A] hover:bg-[#F7F5F2] border border-[#1A1A1A]/15 transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    
                    <button
                      onClick={() => onSelectSpecialtyToBook(specialty.title)}
                      className="px-3.5 py-1.5 text-[10px] uppercase tracking-widest font-semibold text-white bg-[#1A1A1A] hover:bg-[#333] border border-[#1A1A1A] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------------------------------------------------- */}
        {/* CLINICAL MODALITIES STRIP */}
        {/* ---------------------------------------------------- */}
        <div className="mt-16 pt-12 border-t border-[#1A1A1A]/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] mb-1">
              Hospital Facilities
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
              Advanced Clinical Equipment &amp; Modalities
            </h3>
            <p className="text-xs sm:text-sm text-[#8C887F] mt-1">
              Equipped with hospital-grade physiotherapy machines and international neuro-muscular modalities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {CLINIC_MODALITIES.map((mod, i) => (
              <div
                key={i}
                className="bg-[#FAF8F5] p-5 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-colors"
              >
                <div className="font-serif text-sm font-semibold text-[#1A1A1A] mb-2">
                  0{i + 1}
                </div>
                <div className="font-serif text-sm sm:text-base font-normal text-[#1A1A1A]">
                  {mod.name}
                </div>
                <div className="text-[11px] text-[#8C887F] mt-1">
                  {mod.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Expanded Specialty Modal */}
      <AnimatePresence>
        {selectedSpecialtyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#FDFCFB] w-full max-w-2xl border border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="relative h-52 bg-[#1A1A1A]">
                <img
                  src={selectedSpecialtyModal.image}
                  alt={selectedSpecialtyModal.title}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedSpecialtyModal(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors border border-white/20"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-white text-[#1A1A1A] mb-1 inline-block">
                    {selectedSpecialtyModal.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                    {selectedSpecialtyModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5">
                <div>
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F] mb-1">
                    Clinical Overview:
                  </h4>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {selectedSpecialtyModal.detailedDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FAF8F5] p-4 border border-[#1A1A1A]/10">
                    <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      Conditions Managed:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-[#4A4A4A]">
                      {selectedSpecialtyModal.conditionsTreated.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#1A1A1A] mt-1.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#FAF8F5] p-4 border border-[#1A1A1A]/10">
                    <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      Therapeutic Approach:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-[#4A4A4A]">
                      {selectedSpecialtyModal.rehabApproach.map((a, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#1A1A1A] mt-1.5 shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 bg-[#F7F5F2] border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]">
                  <strong>Expected Recovery Timeline:</strong> {selectedSpecialtyModal.recoveryDuration}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#FAF8F5] border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedSpecialtyModal(null)}
                  className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-[#8C887F] hover:text-[#1A1A1A] cursor-pointer"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const title = selectedSpecialtyModal.title;
                    setSelectedSpecialtyModal(null);
                    onSelectSpecialtyToBook(title);
                  }}
                  className="px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-white bg-[#1A1A1A] hover:bg-[#333] border border-[#1A1A1A] cursor-pointer flex items-center gap-2"
                >
                  <span>Book Consultation for this Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
