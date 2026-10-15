import React, { useState } from 'react';
import { 
  Activity, 
  RotateCcw, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface RecoveryCase {
  id: string;
  condition: string;
  metricLabel: string;
  unit: string;
  initialVal: number;
  finalVal: number;
  stages: {
    week: string;
    value: number;
    title: string;
    clinicalNote: string;
  }[];
}

const RECOVERY_CASES: RecoveryCase[] = [
  {
    id: 'frozen-shoulder',
    condition: 'Frozen Shoulder (Adhesive Capsulitis)',
    metricLabel: 'Shoulder Flexion / Elevation Range of Motion',
    unit: 'Degrees (°)',
    initialVal: 40,
    finalVal: 175,
    stages: [
      { week: 'Initial Visit (Week 1)', value: 45, title: 'Severe Pain & Capsular Restriction', clinicalNote: 'Inability to elevate arm past chest level, agonizing sleep disruption.' },
      { week: 'Week 2', value: 90, title: 'Inflammation Calmed & Glides Begun', clinicalNote: 'Electrotherapy + gentle inferior capsular mobilization restores 90° horizontal plane.' },
      { week: 'Week 3', value: 140, title: 'Active Overhead Reach Restored', clinicalNote: 'Pulley exercises & dry needling release deltoid / subscapularis spasms.' },
      { week: 'Week 4-5 (Discharge)', value: 175, title: 'Full Functional Freedom', clinicalNote: 'Complete 175° painless overhead reach, combed hair, full sport resumption.' },
    ]
  },
  {
    id: 'stroke-rehab',
    condition: 'Post-Stroke Hemiplegia Recovery',
    metricLabel: 'Functional Motor Independence Score',
    unit: '% Independence',
    initialVal: 15,
    finalVal: 92,
    stages: [
      { week: 'Initial Admission', value: 20, title: 'Flaccid / Severe Motor Loss', clinicalNote: 'Wheelchair bound, zero grip strength in right hand, asymmetrical facial tone.' },
      { week: 'Week 4', value: 45, title: 'Active Muscle Firing (PNF)', clinicalNote: 'Bobath neuro-facilitation initiates finger flexion and assisted sit-to-stand transfers.' },
      { week: 'Week 8', value: 70, title: 'Assisted Walking in Parallel Bars', clinicalNote: 'Weight-bearing gait retraining on affected side without knee hyperextension.' },
      { week: 'Week 12+', value: 92, title: 'Independent Walking & Self Care', clinicalNote: 'Patient walks to mosque independently without stick, functional grasp restored.' },
    ]
  },
  {
    id: 'knee-replacement',
    condition: 'Post-Operative Total Knee Replacement',
    metricLabel: 'Knee Flexion Angle',
    unit: 'Degrees (°)',
    initialVal: 35,
    finalVal: 130,
    stages: [
      { week: 'Post-Op Day 3', value: 40, title: 'Swelling & Guarding', clinicalNote: 'Stiff surgical joint, intense guarding, limited quadriceps activation.' },
      { week: 'Week 2', value: 80, title: 'CPM & Gentle Patellar Glides', clinicalNote: 'Lymphatic drainage reduces swelling; patient achieves right angle knee bend.' },
      { week: 'Week 4', value: 105, title: 'Stair Climbing Preparation', clinicalNote: 'Straight leg raises without extensor lag; stationary cycling initiated.' },
      { week: 'Week 6', value: 130, title: 'Fluid Gait & Normal Stairs', clinicalNote: 'Full 130° flexion achieved, smooth independent walking with zero limp.' },
    ]
  }
];

export const RecoverySimulator: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('frozen-shoulder');
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(3); // default to full recovery

  const activeCase = RECOVERY_CASES.find((c) => c.id === selectedCaseId) || RECOVERY_CASES[0];
  const activeStage = activeCase.stages[currentStageIdx];

  const percentage = Math.round(
    ((activeStage.value - activeCase.initialVal) / (activeCase.finalVal - activeCase.initialVal)) * 100
  );

  return (
    <section id="recovery-sim" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8C887F] border border-[#1A1A1A]/10 bg-white mb-3">
            <TrendingUp className="w-3 h-3 text-[#1A1A1A]" />
            Evidence-Based Progression Tracker
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Simulate Your Recovery Milestones
          </h2>
          <p className="text-[#4A4A4A] text-sm sm:text-base mt-2 max-w-2xl mx-auto font-normal">
            See how Dr. Awais Ahmed’s phased neuromuscular rehabilitation systematically restores joint degrees, muscle power, and daily independence.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {RECOVERY_CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseId(c.id);
                setCurrentStageIdx(3);
              }}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer border ${
                selectedCaseId === c.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                  : 'bg-[#FDFCFB] hover:bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
              }`}
            >
              {c.condition}
            </button>
          ))}
        </div>

        {/* Simulator Dashboard */}
        <div className="bg-[#FDFCFB] border border-[#1A1A1A]/15 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Progress Meter & Angle Display */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-center">
              
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C887F] mb-2">
                {activeCase.metricLabel}
              </div>

              {/* Big Metric Display */}
              <div className="relative my-4 flex items-center justify-center">
                <div className="w-36 h-36 border border-[#1A1A1A]/20 flex flex-col items-center justify-center bg-white">
                  <span className="font-serif text-4xl font-light text-[#1A1A1A] tracking-tight">
                    {activeStage.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8C887F] mt-0.5">
                    {activeCase.unit}
                  </span>
                </div>
              </div>

              <div className="w-full bg-[#E5E1D8] h-1.5 mt-2 overflow-hidden">
                <div 
                  className="bg-[#1A1A1A] h-1.5 transition-all duration-500" 
                  style={{ width: `${Math.max(10, Math.min(100, percentage))}%` }}
                />
              </div>

              <div className="flex justify-between w-full text-[10px] text-[#8C887F] mt-2 font-medium">
                <span>Start: {activeCase.initialVal} {activeCase.unit}</span>
                <span className="text-[#1A1A1A] font-semibold">Goal: {activeCase.finalVal} {activeCase.unit}</span>
              </div>
            </div>

            {/* Right Column: Timeline Stages & Clinical Commentary */}
            <div className="md:col-span-7 space-y-6">
              
              <div>
                <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-[#1A1A1A] text-white">
                  {activeStage.week}
                </span>
                <h3 className="font-serif text-2xl font-light text-[#1A1A1A] mt-2">
                  {activeStage.title}
                </h3>
              </div>

              {/* Interactive Stage Step Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {activeCase.stages.map((stage, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStageIdx(i)}
                    className={`py-2 px-1 text-[10px] uppercase tracking-widest font-semibold text-center border transition-all cursor-pointer ${
                      currentStageIdx === i
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    Step 0{i + 1}
                  </button>
                ))}
              </div>

              {/* Clinical Note Box */}
              <div className="p-4 bg-[#FAF8F5] border border-[#1A1A1A]/10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  Dr. Awais Ahmed's Clinical Note:
                </div>
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed font-normal">
                  {activeStage.clinicalNote}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                <div className="text-[11px] text-[#8C887F]">
                  Personalized plan tailored during clinical exam.
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 bg-[#1A1A1A] hover:bg-[#333] text-white text-[10px] uppercase tracking-widest font-semibold border border-[#1A1A1A] transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <span>Start Recovery Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
