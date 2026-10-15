import React, { useState } from 'react';
import { MARQUEE_IMAGES } from '../data/physioData';
import { GalleryImage } from '../types';
import { 
  Eye, 
  Sparkles, 
  Camera, 
  ExternalLink, 
  X, 
  Play, 
  Pause, 
  Maximize2,
  CheckCircle,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TherapyShowcaseMarqueeProps {
}

export const TherapyShowcaseMarquee: React.FC<TherapyShowcaseMarqueeProps> = ({
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Extended collection for richer double-strip display
  const extendedImages = [
    ...MARQUEE_IMAGES,
    {
      id: '8',
      title: 'Manual Spinal Traction & Cervical Release',
      category: 'Spine Decompression',
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
      caption: 'Relieving cervical root pressure with manual traction'
    },
    {
      id: '9',
      title: 'Gait Training & Dynamic Balance Coordination',
      category: 'Gait Lab',
      url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
      caption: 'Neuromuscular retuning for steady walking'
    }
  ];

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-[#1A1A1A] text-white overflow-hidden relative border-y border-[#1A1A1A]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] border border-white/10 bg-white/5 mb-3">
              <Activity className="w-3 h-3 text-white" />
              Dynamic Clinical Showcase
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Therapy in Motion &amp; Patient Care
            </h2>
            <p className="text-[#8C887F] text-sm sm:text-base mt-2 max-w-2xl font-normal">
              An interactive visual overview of specialized techniques practiced at Sultan Hospital. Click any frame to inspect the clinical modality.
            </p>
          </div>
        </div>

      </div>

      {/* ---------------------------------------------------- */}
      {/* STRIP 1: FORWARD CONTINUOUS LOOP */}
      {/* ---------------------------------------------------- */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6">
          {[...extendedImages, ...extendedImages].map((img, i) => (
            <div
              key={`strip1-${img.id}-${i}`}
              onClick={() => setSelectedImage(img)}
              className="group relative w-80 sm:w-96 h-56 overflow-hidden bg-[#141414] border border-white/10 shrink-0 cursor-pointer transition-all duration-300 hover:border-white/40"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-white border border-white/15">
                {img.category}
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A1A1A] p-1.5 text-white border border-white/20">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-serif text-sm sm:text-base font-normal leading-snug group-hover:text-[#E5E1D8] transition-colors">
                  {img.title}
                </h4>
                <p className="text-[11px] text-[#8C887F] mt-1 line-clamp-1">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* STRIP 2: REVERSE CONTINUOUS LOOP */}
      {/* ---------------------------------------------------- */}
      <div className="relative w-full overflow-hidden py-3 mt-2">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse gap-6">
          {[...extendedImages.slice().reverse(), ...extendedImages.slice().reverse()].map((img, i) => (
            <div
              key={`strip2-${img.id}-${i}`}
              onClick={() => setSelectedImage(img)}
              className="group relative w-80 sm:w-96 h-56 overflow-hidden bg-[#141414] border border-white/10 shrink-0 cursor-pointer transition-all duration-300 hover:border-white/40"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-[#8C887F] border border-white/15">
                {img.category}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-serif text-sm sm:text-base font-normal leading-snug group-hover:text-[#E5E1D8] transition-colors">
                  {img.title}
                </h4>
                <p className="text-[11px] text-[#8C887F] mt-1 line-clamp-1">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Photo Inspector Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-[#1A1A1A] border border-white/20 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/80 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors border border-white/20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-80 sm:h-96 w-full bg-black relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-7 bg-[#1A1A1A] text-white">
                <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-white text-[#1A1A1A] mb-3 inline-block">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-[#E5E1D8] mt-1.5 font-normal">
                  {selectedImage.caption}
                </p>
                <p className="text-xs text-[#8C887F] mt-4 pt-3 border-t border-white/10">
                  Note: In the live portfolio, this therapy photograph can be replaced with Dr. Awais Ahmed’s actual clinic and patient rehabilitation sessions from Sultan Hospital.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
