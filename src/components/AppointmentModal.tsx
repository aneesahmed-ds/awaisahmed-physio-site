import React, { useState, useEffect } from 'react';
import { DOCTOR_PROFILE, CLINICAL_SPECIALTIES } from '../data/physioData';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  AlertCircle, 
  Send,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCondition?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialCondition = '',
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    age: '',
    gender: 'Male',
    condition: initialCondition || CLINICAL_SPECIALTIES[0].title,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    timeSlot: '10:30 AM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (initialCondition) {
      setFormData((prev) => ({ ...prev, condition: initialCondition }));
    }
  }, [initialCondition]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `PT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setIsSubmitted(true);

    // Auto-send full appointment details to Dr. Awais on WhatsApp
    const lines = [
      '*NEW APPOINTMENT REQUEST*',
      `*Ref:* ${generatedId}`,
      `*Patient:* ${formData.patientName}`,
      `*Phone:* ${formData.phone}`,
      `*Age:* ${formData.age || 'Not stated'}  *Gender:* ${formData.gender}`,
      `*Condition:* ${formData.condition}`,
      `*Date:* ${formData.date}  *Time:* ${formData.timeSlot}`,
      ...(formData.notes ? [`*Notes:* ${formData.notes}`] : []),
      'Sultan Hospital, Grand City',
    ];
    window.open(
      `https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank'
    );
  };

  const handleWhatsAppFastTrack = () => {
    const message = `*Physical Therapy Appointment Request*%0A` +
      `*Patient Name:* ${formData.patientName || 'Consultation Request'}%0A` +
      `*Phone:* ${formData.phone || 'Provided via form'}%0A` +
      `*Condition/Pain:* ${formData.condition}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Time Slot:* ${formData.timeSlot} (Sultan Hospital 10am-2pm)%0A` +
      (formData.notes ? `*Notes:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `*Doctor:* Dr. Awais Ahmed (Sultan Hospital Grand City)`;

    window.open(`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-[#FDFCFB] w-full max-w-xl border border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col my-6 max-h-[92vh]"
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-[#8C887F] text-[10px] uppercase tracking-[0.35em] font-semibold mb-1.5">
            <Calendar className="w-3.5 h-3.5 text-white" />
            Sultan Hospital Clinical Consultation
          </div>

          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-white">
            Schedule Appointment with {DOCTOR_PROFILE.name}
          </h2>

          <div className="flex items-center gap-4 text-xs text-[#E5E1D8] mt-2.5">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white" />
              10:00 AM – 2:00 PM
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white" />
              Grand City, Sarai Alamgir
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto bg-[#FDFCFB]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Specialization / Condition selector */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                  Condition / Treatment Required *
                </label>
                <select
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] font-medium transition-colors"
                  required
                >
                  <option value="General Physical Therapy Consultation / Assessment">
                    General Physical Therapy Consultation / Assessment
                  </option>
                  {CLINICAL_SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Spine Sciatica / Disc Bulge">Spine Sciatica / Disc Bulge</option>
                  <option value="Stroke / Hemiplegia Neuro-Rehab">Stroke / Hemiplegia Neuro-Rehab</option>
                  <option value="Frozen Shoulder Treatment">Frozen Shoulder Treatment</option>
                  <option value="Post-Surgical Knee/Hip Rehab">Post-Surgical Knee/Hip Rehab</option>
                  <option value="Pediatric CP / Delayed Milestones">Pediatric CP / Delayed Milestones</option>
                </select>
              </div>

              {/* Patient Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C887F] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder="e.g. Muhammad Tariq"
                      required
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C887F] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0331-XXXXXXX"
                      required
                      className="w-full pl-10 pr-3.5 py-3 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>
              </div>

              {/* Age & Gender */}
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                    Patient Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 45"
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Child / Minor">Child / Minor</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                    Time Slot (10am – 2pm) *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-sm text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] font-semibold"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes / Symptoms Details */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C887F] mb-1.5">
                  Brief Medical History / Symptoms (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Experiencing pain radiating down left leg for 2 months, recent X-ray available..."
                  rows={2}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#1A1A1A] hover:bg-[#333] active:bg-black text-white text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#1A1A1A]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Confirm Clinic Appointment</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppFastTrack}
                  className="py-3 px-4 bg-white hover:bg-[#FAF8F5] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold border border-[#1A1A1A]/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  title="Send pre-filled appointment message directly to Dr. Awais on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>

              <div className="text-center text-[10px] text-[#8C887F]">
                You can also call the reception directly at <strong className="text-[#1A1A1A]">{DOCTOR_PROFILE.primaryPhone}</strong>
              </div>
            </form>
          ) : (
            /* Booking Confirmed State */
            <div className="py-6 text-center space-y-5">
              <div className="w-14 h-14 border border-[#1A1A1A] bg-[#FAF8F5] text-[#1A1A1A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#1A1A1A]">
                  Request Registered • Ref: {bookingId}
                </span>
                <h3 className="font-serif text-2xl font-light text-[#1A1A1A] mt-3">
                  Appointment Scheduled
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] max-w-md mx-auto mt-1 font-normal leading-relaxed">
                  Thank you, <strong className="text-[#1A1A1A]">{formData.patientName}</strong>. Your consultation request for <strong className="text-[#1A1A1A]">{formData.condition}</strong> on <strong className="text-[#1A1A1A]">{formData.date} at {formData.timeSlot}</strong> has been logged.
                </p>
              </div>

              {/* Clinic Instructions Box */}
              <div className="p-4 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-left text-xs text-[#4A4A4A] space-y-2 max-w-md mx-auto">
                <div className="font-serif font-medium text-[#1A1A1A]">Clinic Arrival Instructions:</div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1A1A1A] mt-1.5 shrink-0" />
                  <span><strong>Location:</strong> Sultan Hospital, Comprehensive Physical Therapy Clinic, Grand City, near Sarai Alamgir.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1A1A1A] mt-1.5 shrink-0" />
                  <span><strong>Documents:</strong> Please bring any prior X-rays, MRI scans, or prescription slips.</span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppFastTrack}
                  className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#333] text-white text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 cursor-pointer border border-[#1A1A1A]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold border border-[#1A1A1A]/20 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
