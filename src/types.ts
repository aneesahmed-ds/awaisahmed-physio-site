export interface Specialty {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  badge: string;
  iconName: string;
  conditionsTreated: string[];
  rehabApproach: string[];
  recoveryDuration: string;
  image: string;
}

export interface PainZone {
  id: string;
  name: string;
  region: 'neck' | 'spine' | 'shoulder' | 'knee' | 'hip' | 'elbow' | 'ankle' | 'neuro';
  commonIssues: string[];
  recommendedSpecialty: string;
  treatmentSummary: string;
  symptoms: string[];
  recoveryRate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  recoverySummary: string;
  quote: string;
  rating: number;
  duration: string;
  verified: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  url: string;
  caption: string;
}

export interface AppointmentData {
  patientName: string;
  phone: string;
  age: string;
  gender: string;
  condition: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export interface SEOStrategyStep {
  step: number;
  title: string;
  category: 'Google Maps & Local SEO' | 'Social Media Video Strategy' | 'Doctor Authority' | 'Patient Retention';
  impact: 'High' | 'Crucial' | 'Instant';
  summary: string;
  actionItems: string[];
  targetKeywords?: string[];
  templateSnippet?: string;
}
