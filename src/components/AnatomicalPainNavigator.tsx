import React, { useState } from 'react';
import { PAIN_ZONES } from '../data/physioData';
import { PainZone } from '../types';
import { 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  Clock, 
  Target 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AnatomicalPainNavigatorProps {
  onSelectConditionToBook: (conditionName: string) => void;
}

export const AnatomicalPainNavigator: React.FC<AnatomicalPainNavigatorProps> = ({
  onSelectConditionToBook,
}) => {
  const [selectedZone, setSelectedZone] = useState<PainZone>(PAIN_ZONES[0]);

  return (
    <section id="pain-navigator" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] border border-[#1A1A1A]/10 bg-white mb-3">
            <Target className="w-3 h-3 text-[#1A1A1A]" />
            Interactive Pain &amp; Diagnostic Navigator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Where Are You Experiencing Pain?
          </h2>
          <p className="text-[#4A4A4A] text-sm sm:text-base mt-2 max-w-2xl mx-auto font-normal">
            Select a body region below to explore Dr. Awais Ahmed’s specialized neuro-muscular evaluation, therapeutic modalities, and non-surgical recovery plan at Sultan Hospital.
          </p>
        </div>

        {/* Navigator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Body Region Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <div className="text-[10px] font-semibold text-[#8C887F] uppercase tracking-[0.3em] px-1 mb-1">
              Select Anatomical Region:
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {PAIN_ZONES.map((zone) => {
                const isSelected = selectedZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone)}
                    className={`text-left p-4 border transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md'
                        : 'bg-[#FDFCFB] hover:bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 flex items-center justify-center font-serif text-xs border ${
                        isSelected 
                          ? 'border-white/20 bg-white/10 text-white' 
                          : 'border-[#1A1A1A]/10 bg-[#F7F5F2] text-[#1A1A1A]'
                      }`}>
                        {zone.region === 'neck' && '01'}
                        {zone.region === 'spine' && '02'}
                        {zone.region === 'shoulder' && '03'}
                        {zone.region === 'knee' && '04'}
                        {zone.region === 'neuro' && '05'}
                        {zone.region === 'ankle' && '06'}
                      </div>
                      <div>
                        <div className={`font-serif text-base tracking-tight ${isSelected ? 'text-white' : 'text-[#1A1A1A] group-hover:text-black'}`}>
                          {zone.name}
                        </div>
                        <div className={`text-[11px] truncate max-w-[200px] ${isSelected ? 'text-[#8C887F]' : 'text-[#8C887F]'}`}>
                          {zone.commonIssues[0]}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-white translate-x-1' : 'text-[#8C887F] group-hover:text-[#1A1A1A] group-hover:translate-x-0.5'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Consultation Callout */}
            <div className="mt-4 p-5 bg-[#1A1A1A] text-white border border-[#1A1A1A] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 text-[#E5E1D8] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-serif text-sm font-medium text-white block">Uncertain about your diagnosis?</span>
                  <span className="text-[#8C887F] text-[11px]">Dr. Awais provides thorough physical assessment in clinic.</span>
                </div>
              </div>
              <button
                onClick={() => onSelectConditionToBook('General Clinical Consultation / Assessment')}
                className="px-3.5 py-2 bg-white hover:bg-[#E5E1D8] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold shrink-0 cursor-pointer transition-colors"
              >
                Get Assessed
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Treatment & Protocol Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedZone.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FDFCFB] border border-[#1A1A1A]/15 p-6 sm:p-8 shadow-sm relative overflow-hidden"
              >
                {/* Decorative Pill */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#1A1A1A]/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C887F]">
                      Targeted Clinical Protocol
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A] tracking-tight mt-0.5">
                      {selectedZone.name}
                    </h3>
                  </div>

                  <div className="px-3 py-1 bg-[#F7F5F2] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold border border-[#1A1A1A]/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
                    {selectedZone.recoveryRate}
                  </div>
                </div>

                {/* Primary Symptoms */}
                <div className="mt-6 space-y-2">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F] flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
                    Typical Patient Symptoms:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedZone.symptoms.map((sym, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-[#FAF8F5] p-3 border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] mt-1.5 shrink-0" />
                        <span>{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditions Treated */}
                <div className="mt-5 space-y-2">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    Frequent Diagnoses Managed:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedZone.commonIssues.map((issue, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white text-[#1A1A1A] border border-[#1A1A1A]/15 text-xs font-medium"
                      >
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dr. Awais's Clinical Approach */}
                <div className="mt-6 p-5 bg-[#FAF8F5] border border-[#1A1A1A]/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    Dr. Awais Ahmed's Rehabilitation Approach:
                  </div>
                  <p className="text-sm text-[#4A4A4A] font-normal leading-relaxed">
                    {selectedZone.treatmentSummary}
                  </p>
                </div>

                {/* Action Row */}
                <div className="mt-6 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#8C887F]">
                    Clinic hours: <strong className="text-[#1A1A1A]">10:00 AM – 2:00 PM</strong> at Sultan Hospital
                  </div>

                  <button
                    onClick={() => onSelectConditionToBook(selectedZone.name)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#333] text-white text-[10px] uppercase tracking-widest font-semibold border border-[#1A1A1A] transition-all cursor-pointer"
                  >
                    <span>Book Session for {selectedZone.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
