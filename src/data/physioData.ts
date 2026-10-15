import { Specialty, PainZone, Testimonial, GalleryImage } from '../types';

export const DOCTOR_PROFILE = {
  name: 'Dr. Awais Ahmed',
  prefix: 'Dr.',
  title: 'Neuro-Muscular Physiotherapist & Rehabilitation Specialist',
  hospital: 'Sultan Hospital',
  clinicName: 'Comprehensive Physical Therapy Clinic',
  tagline: 'Specialized in Advanced Rehabilitation & Pain Management',
  experience: '5+ Years Clinical Experience',
  timings: '10:00 AM – 2:00 PM (Mon – Sat)',
  phones: ['0306-0752970', '0330-9999366'],
  primaryPhone: '0306-0752970',
  whatsappNumber: '923060752970',
  location: 'Grand City, near Sarai Alamgir, Punjab, Pakistan',
  serviceAreas: ['Grand City', 'Sarai Alamgir', 'Kharian', 'Dinga', 'Gujrat', 'Jhelum', 'Mandi Bahauddin'],
  coordinates: { lat: 32.8833, lng: 73.7556 },
  doctorImage: '/dr-awais.jpg',
  facebookPost: 'https://www.facebook.com/share/p/1CDMWJkkyP/',
  doctorPosterImage: '', // Can be loaded from user uploaded assets
  stats: [
    { label: 'Successful Recoveries', value: '2,000+' },
    { label: 'Patient Satisfaction', value: '99.2%' },
    { label: 'Advanced Modalities', value: '14+' },
    { label: 'Years of Expertise', value: '5+' }
  ]
};

export const CLINICAL_SPECIALTIES: Specialty[] = [
  {
    id: 'neck-back-pain',
    title: 'Neck & Back Pain Treatment',
    badge: 'Spine & Posture',
    iconName: 'Activity',
    shortDesc: 'Evidence-based spinal decompression, manual adjustments, and core stabilizing therapy for acute and chronic disc issues.',
    detailedDesc: 'Comprehensive spinal rehabilitation addressing cervical spondylosis, lumbar disc herniations, sciatica, nerve impingement, and chronic mechanical back pain. Treatment combines precise manual spinal mobilization with deep stabilizing exercise protocols.',
    conditionsTreated: [
      'Cervical Spondylosis & Neck Stiffness',
      'Lumbar Disc Bulge / Sciatica Radiating Pain',
      'Postural Kyphosis & Forward Head Posture',
      'Muscle Spasms & Facet Joint Arthropathy'
    ],
    rehabApproach: [
      'Manual Spinal Mobilization & Decompression',
      'Neuromuscular Core Stabilization Training',
      'Dry Needling for Trigger Point Myofascial Release',
      'Ergonomic Posture & Workplace Correction'
    ],
    recoveryDuration: '2 to 6 Weeks (Significant relief in 3–5 sessions)',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'post-surgical',
    title: 'Post-Surgical Joint Rehabilitation',
    badge: 'Orthopedic Recovery',
    iconName: 'ShieldCheck',
    shortDesc: 'Accelerated protocols for total knee replacements, ACL reconstructions, and shoulder surgeries to restore full range of motion.',
    detailedDesc: 'Individualized progressive rehabilitation after orthopedic surgeries. We focus on early controlled mobilization, preventing scar tissue adhesions, reducing postoperative swelling, and safely rebuilding joint strength.',
    conditionsTreated: [
      'Total Knee & Hip Replacement (TKR/THR)',
      'ACL, PCL & Meniscal Tear Repairs',
      'Rotator Cuff & Shoulder Arthroscopy',
      'Post-ORIF Internal Fixation Mobilization'
    ],
    rehabApproach: [
      'Passive & Active-Assisted Range of Motion (ROM)',
      'Lymphatic Drainage & Swelling Reduction',
      'Isokinetic Strength Conditioning',
      'Proprioception & Balance Re-education'
    ],
    recoveryDuration: '4 to 12 Weeks (Staged protocol)',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'stroke-paralysis',
    title: 'Paralysis & Stroke Recovery',
    badge: 'Neuro-Rehab Specialty',
    iconName: 'Zap',
    shortDesc: 'Specialized neuro-facilitation (Bobath/PNF) and gait retraining for hemiplegia, facial palsy, and neurological trauma.',
    detailedDesc: 'As a certified Neuro-Muscular Specialist, Dr. Awais applies neuroplasticity-driven techniques to reawaken dormant neural pathways, improve limb control, inhibit spasticity, and restore functional independence.',
    conditionsTreated: [
      'Post-Stroke Hemiplegia & Hemiparesis',
      'Bell’s Palsy & Facial Nerve Weakness',
      'Traumatic Spinal Cord & Brain Injuries',
      'Parkinson’s Disease & Neuropathic Balance Loss'
    ],
    rehabApproach: [
      'Proprioceptive Neuromuscular Facilitation (PNF)',
      'Constraint-Induced Movement Therapy (CIMT)',
      'Functional Electrical Stimulation (FES)',
      'Parallel-Bar Assisted Gait & Transfer Training'
    ],
    recoveryDuration: 'Comprehensive 8 to 24 Week neuroplastic program',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sports-injuries',
    title: 'Sports Injuries & Athletic Care',
    badge: 'Sports Performance',
    iconName: 'Flame',
    shortDesc: 'Rapid recovery therapies for athletes and gym injuries — ligament sprains, tennis elbow, hamstring pulls, and performance return.',
    detailedDesc: 'Clinical sports biomechanics assessments combined with targeted tissue repair modalities to get athletes back onto the field safely with minimal downtime and reinforced joint durability.',
    conditionsTreated: [
      'Anterior Cruciate Ligament (ACL) & Ankle Sprains',
      'Tennis & Golfer’s Elbow (Epicondylitis)',
      'Rotator Cuff Impingement & Runner’s Knee',
      'Hamstring, Groin & Calf Muscle Tears'
    ],
    rehabApproach: [
      'Sports Kinesiology Taping & Dynamic Bracing',
      'Therapeutic Deep Tissue Ultrasound',
      'Eccentric Muscle Strengthening Protocols',
      'Sport-Specific Functional Agility Drills'
    ],
    recoveryDuration: '2 to 8 Weeks depending on injury grade',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'muscle-weakness-joint-pain',
    title: 'Muscle Weakness & Joint Pain',
    badge: 'Chronic Pain Relief',
    iconName: 'HeartPulse',
    shortDesc: 'Targeted myofascial therapy and joint alignment for chronic stiffness, muscular dystrophy, and degenerative joint pain.',
    detailedDesc: 'Restoring neuromuscular tone and joint mechanics through manual therapy, joint distraction, and progressive load training to eliminate debilitating daily ache.',
    conditionsTreated: [
      'Frozen Shoulder (Adhesive Capsulitis)',
      'Fibromyalgia & Chronic Myofascial Pain Syndrome',
      'General Muscular Atrophy & Disuse Weakness',
      'Sacroiliac (SI) Joint Dysfunction'
    ],
    rehabApproach: [
      'Joint Mobilization with Movement (Mulligan Technique)',
      'Interferential & TENS Electrotherapy',
      'Progressive Resistance Band Conditioning',
      'Thermal Heat & Cryotherapy Cycling'
    ],
    recoveryDuration: '3 to 6 Weeks',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fracture-rehab',
    title: 'Fracture Rehabilitation',
    badge: 'Bone & Mobility',
    iconName: 'Bone',
    shortDesc: 'Regaining joint mobility, eliminating post-cast muscle wasting, and safely loading healed fractures.',
    detailedDesc: 'Post-immobilization recovery designed to resolve severe joint stiffness, restore lost muscle mass, break down fibrous adhesions, and return you to normal weight-bearing activities.',
    conditionsTreated: [
      'Post-Plaster Cast Joint Stiffness (Wrist, Ankle, Elbow)',
      'Healed Femur, Tibia & Humeral Fractures',
      'Complex Intra-articular Fractures',
      'Post-Traumatic Contractures'
    ],
    rehabApproach: [
      'Gradual Controlled Joint Articulation',
      'Progressive Axial Weight-Bearing Training',
      'Soft Tissue Deep Friction Massage',
      'Hydro-Thermal Desensitization'
    ],
    recoveryDuration: '4 to 8 Weeks',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gout-arthritis',
    title: 'Gout & Arthritis Management',
    badge: 'Rheumatic Wellness',
    iconName: 'Sparkles',
    shortDesc: 'Joint-protective exercise protocols, swelling reduction, and anti-inflammatory non-invasive pain management.',
    detailedDesc: 'Long-term joint preservation strategies for patients suffering from Osteoarthritis, Rheumatoid Arthritis, and recurring Gout attacks. We minimize pain without over-relying on heavy painkillers.',
    conditionsTreated: [
      'Knee & Hip Osteoarthritis (Cartilage wear)',
      'Rheumatoid Arthritis Hand & Foot Stiffness',
      'Acute & Chronic Gout Uric Acid Joint Flares',
      'Ankylosing Spondylitis (Spinal Fusion Prevention)'
    ],
    rehabApproach: [
      'Low-Impact Hydro & Isometric Joint Strengthening',
      'Electro-analgesic TENS Therapy',
      'Joint De-loading & Orthotic Guidance',
      'Flexibility & Synovial Fluid Stimulation Exercises'
    ],
    recoveryDuration: 'Ongoing maintenance & 2–4 weeks for acute flare control',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cerebral-palsy',
    title: 'Cerebral Palsy (CP) Treatment',
    badge: 'Pediatric Neuro-Care',
    iconName: 'Users',
    shortDesc: 'Gentle, compassionate neuro-developmental therapy to improve motor milestones, reduce spasticity, and enhance mobility.',
    detailedDesc: 'Dedicated pediatric neuro-rehabilitation helping children with spastic, athetoid, or ataxic Cerebral Palsy reach their fullest physical independence, balance, and fine-motor coordination.',
    conditionsTreated: [
      'Spastic Diplegia, Quadriplegia & Hemiplegia',
      'Equinus Gait (Toe Walking) & Scissoring Gait',
      'Hypotonia & Hypertonia Postural Instabilities',
      'Joint Deformities & Muscle Tightness'
    ],
    rehabApproach: [
      'Neuro-Developmental Treatment (NDT / Bobath)',
      'Serial Stretching & Anti-Spastic Positioning',
      'Sensory-Motor Integration Therapy',
      'Custom Splinting & Assistive Device Training'
    ],
    recoveryDuration: 'Long-term developmental milestone tracking',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pediatric-physio',
    title: 'Pediatric Physical Therapy',
    badge: 'Child Wellness',
    iconName: 'Smile',
    shortDesc: 'Specialized therapy for congenital torticollis, delayed crawling/walking, flat feet, and pediatric developmental delays.',
    detailedDesc: 'A warm, engaging, play-based environment designed to guide infants and children through natural growth stages, correcting musculoskeletal anomalies early for lifelong healthy movement.',
    conditionsTreated: [
      'Congenital Muscular Torticollis (Wry Neck)',
      'Delayed Motor Milestones (Sitting, Crawling, Walking)',
      'Pediatric Flat Feet (Pes Planus) & Bow Legs',
      'Juvenile Idiopathic Scoliosis & Posture'
    ],
    rehabApproach: [
      'Play-Based Dynamic Motor Stimulation',
      'Gentle Passive Neck & Limb Elongation',
      'Postural Balance Board Exercises',
      'Parental Home Exercise Coaching'
    ],
    recoveryDuration: '4 to 12 Weeks with milestone achievements',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop'
  }
];

export const PAIN_ZONES: PainZone[] = [
  {
    id: 'neck',
    name: 'Neck & Cervical Spine',
    region: 'neck',
    commonIssues: ['Cervical Disc Bulge', 'Stiff Neck / Spasm', 'Pinched Nerve / Tingling Arms', 'Text Neck'],
    recommendedSpecialty: 'Neck & Back Pain Treatment',
    treatmentSummary: 'Manual traction, deep myofascial release, dry needling, and cervical stabilization.',
    symptoms: ['Sharp pain when turning head', 'Numbness down arms/fingers', 'Frequent tension headaches'],
    recoveryRate: '94% Improvement within 4-6 visits'
  },
  {
    id: 'spine',
    name: 'Lower Back & Sciatic Nerve',
    region: 'spine',
    commonIssues: ['Lumbar Herniation (L4-L5, L5-S1)', 'Sciatica Shooting Pain', 'Lumbago & Muscle Spasms'],
    recommendedSpecialty: 'Neck & Back Pain Treatment',
    treatmentSummary: 'Spinal decompression therapy, McKenzie method extensions, and deep core reinforcement.',
    symptoms: ['Radiating pain down leg/calf', 'Stiffness when bending or lifting', 'Dull constant lower back ache'],
    recoveryRate: '96% Patient relief without surgery'
  },
  {
    id: 'shoulder',
    name: 'Shoulder & Rotator Cuff',
    region: 'shoulder',
    commonIssues: ['Frozen Shoulder (Adhesive Capsulitis)', 'Rotator Cuff Tear / Tendinitis', 'Impingement Syndrome'],
    recommendedSpecialty: 'Post-Surgical Joint Rehabilitation',
    treatmentSummary: 'Joint capsule glides, ultrasound deep thermal therapy, active-assisted pulley therapy.',
    symptoms: ['Inability to raise arm overhead', 'Night pain when sleeping on side', 'Clicking/grinding sensation'],
    recoveryRate: '88% Range of Motion restored in 3 weeks'
  },
  {
    id: 'knee',
    name: 'Knee Joint & Ligaments',
    region: 'knee',
    commonIssues: ['Knee Osteoarthritis', 'Meniscus & ACL Injuries', 'Post-TKR Replacement Stiffness', 'Patellar Tendinitis'],
    recommendedSpecialty: 'Post-Surgical Joint Rehabilitation',
    treatmentSummary: 'Joint distraction, quad/hamstring strengthening, gait re-training, and swelling reduction.',
    symptoms: ['Swelling and morning stiffness', 'Popping or buckling while walking', 'Pain climbing stairs'],
    recoveryRate: '95% Walking pain-free score'
  },
  {
    id: 'neuro',
    name: 'Neurological & Full Body',
    region: 'neuro',
    commonIssues: ['Post-Stroke Paralysis / Hemiplegia', 'Bell’s Palsy (Facial)', 'Cerebral Palsy (CP)', 'Spinal Injury'],
    recommendedSpecialty: 'Paralysis & Stroke Recovery',
    treatmentSummary: 'Neuromuscular facilitation (PNF/Bobath), functional electrical stimulation, balance re-education.',
    symptoms: ['Limb weakness or total paralysis', 'Facial drooping or slurred speech', 'Difficulty walking or balancing'],
    recoveryRate: 'Continuous neuroplastic motor gains'
  },
  {
    id: 'ankle',
    name: 'Ankle, Foot & Fracture Recovery',
    region: 'ankle',
    commonIssues: ['Post-Cast Stiffness', 'Ankle Inversion Sprain', 'Plantar Fasciitis', 'Achilles Tendonitis'],
    recommendedSpecialty: 'Fracture Rehabilitation',
    treatmentSummary: 'Joint mobilization, progressive weight-bearing, soft tissue friction, arch correction.',
    symptoms: ['Heel pain on first step in morning', 'Limited ankle bend after cast removal', 'Instability while walking'],
    recoveryRate: '92% Full weight-bearing recovery'
  }
];

export const MARQUEE_IMAGES: GalleryImage[] = [
  {
    id: '1',
    title: 'Spinal Decompression & Manual Therapy',
    category: 'Spine Care',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    caption: 'Targeted spine mobilization for instant disc pain relief'
  },
  {
    id: '2',
    title: 'Post-Surgical Joint Mobilization',
    category: 'Knee & Hip Rehab',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    caption: 'Advanced recovery protocols after orthopedic surgery'
  },
  {
    id: '3',
    title: 'Neuromuscular Stroke Rehabilitation',
    category: 'Paralysis Care',
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop',
    caption: 'Restoring motor control and walking independence'
  },
  {
    id: '4',
    title: 'Sports Injury Return-to-Play Training',
    category: 'Sports Physio',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    caption: 'Accelerated athletic biomechanics and muscle conditioning'
  },
  {
    id: '5',
    title: 'Therapeutic Ultrasound & Electrotherapy',
    category: 'Modern Modalities',
    url: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Deep tissue cellular repair and inflammation control'
  },
  {
    id: '6',
    title: 'Pediatric CP & Developmental Care',
    category: 'Pediatric Care',
    url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop',
    caption: 'Compassionate milestones therapy for children'
  },
  {
    id: '7',
    title: 'Post-Fracture Joint Mobility & Cast Removal',
    category: 'Fracture Care',
    url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Safe restoration of bone loading and joint flexibility'
  }
];

export const PATIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chaudhry Tariq Mehmood',
    location: 'Grand City, Sarai Alamgir',
    condition: 'Severe L4-L5 Disc Herniation & Sciatica',
    recoverySummary: 'Avoided spine surgery; 100% pain-free after 3 weeks',
    quote: 'I had agonizing sciatic pain radiating down my left leg for 6 months. Orthopedic surgeons in Lahore advised surgery. Dr. Awais Ahmed at Sultan Hospital diagnosed the root issue and treated me with manual decompression and targeted exercise. Within 3 weeks I was walking normally without any pain!',
    rating: 5,
    duration: '3 Weeks',
    verified: false
  },
  {
    id: '2',
    name: 'Haji Muhammad Aslam',
    location: 'Dinga, Gujrat',
    condition: 'Post-Stroke Right-Sided Hemiplegia',
    recoverySummary: 'Regained hand grip & independent walking without stick',
    quote: 'After my father suffered a stroke, other clinics said full recovery would take years. Dr. Awais Ahmed’s neuro-muscular methods and dedication made a world of difference. He is now walking to the mosque independently. Truly the best physiotherapist in our entire region.',
    rating: 5,
    duration: '8 Weeks',
    verified: false
  },
  {
    id: '3',
    name: 'Shahzaib Butt (Athlete)',
    location: 'Kharian Cantt',
    condition: 'Grade II Knee Ligament & Meniscus Injury',
    recoverySummary: 'Returned to competitive cricket with zero instability',
    quote: 'Injured my knee during a district tournament. Dr. Awais’s rehabilitation program, sports taping, and electrotherapy got me back in full training condition much faster than anticipated. His clinical knowledge is top-tier.',
    rating: 5,
    duration: '4 Weeks',
    verified: false
  }
];

export const CLINIC_MODALITIES = [
  { name: 'Spinal Decompression & Traction', icon: 'MoveVertical', desc: 'Non-surgical disc pressure relief' },
  { name: 'Neuromuscular Stimulation (NMES / TENS)', icon: 'Activity', desc: 'Targeted nerve & muscle firing' },
  { name: 'Dry Needling & Myofascial Release', icon: 'Target', desc: 'Deep muscle spasm trigger relief' },
  { name: 'Deep Therapeutic Ultrasound', icon: 'Waves', desc: 'Cellular tissue healing & pain reduction' },
  { name: 'Kinesiology & Biomechanical Taping', icon: 'Layers', desc: 'Joint alignment & dynamic support' },
  { name: 'Gait & Balance Parallel-Bar Training', icon: 'Footprints', desc: 'Safe neuromuscular walk retraining' },
  { name: 'Continuous Passive Motion (CPM)', icon: 'RefreshCw', desc: 'Post-op knee flexion acceleration' },
  { name: 'Thermal & Cryotherapy Contrast', icon: 'Flame', desc: 'Anti-inflammatory swelling control' }
];
