// ============================================================
// SITE CONFIG — Client ke details yahan change karo
// ============================================================

export const SITE_CONFIG = {
  name: 'BrightSmile Dental',
  tagline: "London's Most Trusted Dental Practice",
  phone: '+44 20 7000 0000',
  phoneRaw: '+442070000000',
  emergencyPhone: '+44 20 7000 0001',
  whatsapp: '447700000000',
  email: 'hello@brightsmile-dental.co.uk',
  address: '15 Harley Street, London W1G 9QJ',
  addressShort: '15 Harley Street',
  city: 'London',
  postcode: 'W1G 9QJ',
  googleMapsUrl: 'https://maps.google.com/?q=15+Harley+Street+London',
  nearestTube: "Regent's Park (3 min walk)",
  rating: '4.9',
  reviewCount: '612',
  patientsCount: '5,000+',
  yearsExperience: '15+',
  website: 'https://brightsmile-dental.co.uk',
  hours: [
    { day: 'Monday - Thursday', time: '8:00 AM - 8:00 PM', open: true },
    { day: 'Friday', time: '8:00 AM - 7:00 PM', open: true },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM', open: true },
    { day: 'Sunday', time: '10:00 AM - 2:00 PM', open: true },
    { day: 'Bank Holidays', time: '10:00 AM - 2:00 PM', open: true },
  ],
}

export const TREATMENTS = [
  {
    id: 'invisalign',
    icon: '😁',
    name: 'Invisalign',
    shortDesc: 'Straighten teeth with invisible aligners. Free consultation included.',
    price: 'From £1,800',
    fullDesc: "Straighten your teeth discreetly with the world's leading clear aligner system.",
    features: [
      'Free initial consultation & digital scan',
      'Virtually invisible — no metal braces',
      'Results typically in 6-18 months',
      'Retainer included in treatment',
      '0% finance available',
    ],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
  },
  {
    id: 'implants',
    icon: '🦴',
    name: 'Dental Implants',
    shortDesc: 'Permanent, natural-looking replacement. Lifetime guarantee.',
    price: 'From £1,500',
    fullDesc: 'The gold standard for replacing missing teeth. 300+ implants placed per year.',
    features: [
      'Permanent, natural-looking results',
      '3D CT scan & digital planning included',
      'Titanium implants with lifetime guarantee',
      'Single tooth to full arch restoration',
      '0% finance over 24 months',
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
  },
  {
    id: 'whitening',
    icon: '✨',
    name: 'Teeth Whitening',
    shortDesc: 'Up to 12 shades lighter — professional grade, no sensitivity.',
    price: 'From £295',
    fullDesc: 'Professionally safe and dramatically effective whitening treatments.',
    features: [
      'In-chair whitening — results in 90 minutes',
      'Custom take-home whitening trays',
      'Up to 12 shades lighter',
      'Sensitivity-free formulas available',
      'Free touch-up kit included',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  },
  {
    id: 'bonding',
    icon: '💎',
    name: 'Veneers & Bonding',
    shortDesc: 'Transform chipped or stained teeth beautifully.',
    price: 'From £450/tooth',
    fullDesc: 'Transform chipped, stained or misshapen teeth in as little as one appointment.',
    features: [
      'Composite bonding from £450 per tooth',
      'Porcelain veneers from £750 per tooth',
      'Digital smile design preview',
      '10-year guarantee on porcelain veneers',
      'Minimal or no tooth preparation',
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  },
  {
    id: 'hygiene',
    icon: '🪥',
    name: 'Hygiene & Check-up',
    shortDesc: 'Regular scale & polish, Airflow cleaning and oral health advice.',
    price: 'From £85',
    fullDesc: 'The foundation of great oral health.',
    features: [
      'Full examination including oral cancer screening',
      'Digital X-rays (low radiation)',
      'Airflow stain removal & hygiene clean',
      'White fillings & tooth-coloured restorations',
      'Root canal treatment by specialists',
    ],
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  },
  {
    id: 'emergency',
    icon: '🚨',
    name: 'Emergency Dentistry',
    shortDesc: 'Same-day appointments for dental pain and urgent cases.',
    price: 'From £85',
    fullDesc: 'Same-day appointments for dental pain, broken teeth, lost fillings.',
    features: [
      'Same-day emergency slots daily',
      'Toothache & abscess treatment',
      'Broken / chipped tooth repair',
      'Lost crown or filling replacement',
      'Available 7 days a week',
    ],
    image: 'https://images.unsplash.com/photo-1590771998996-8589ec9b5ac6?w=800&q=80',
  },
]

export const TEAM = [
  { name: 'Dr. Sarah Mitchell', role: 'Principal Dentist & Implantologist', qual: 'BDS MFDS RCS · 15 years experience · Royal College of Surgeons trained.', emoji: '👩‍⚕️' },
  { name: 'Dr. James Okafor', role: 'Orthodontist & Invisalign Specialist', qual: 'BDS MSc Ortho · Diamond Invisalign Provider · 800+ cases completed.', emoji: '👨‍⚕️' },
  { name: 'Dr. Priya Sharma', role: 'Cosmetic Dentist & Hygienist Lead', qual: 'BDS · Specialist in composite bonding, veneers & whitening.', emoji: '👩‍⚕️' },
]

export const REVIEWS = [
  { initials: 'SC', name: 'Sarah C.', treatment: 'Invisalign Treatment · 2024', text: 'Invisalign results are incredible. I get compliments on my smile every single day. Worth every penny.' },
  { initials: 'MJ', name: 'Marcus J.', treatment: 'Dental Implants · 2024', text: 'I was terrified of dentists for years. The team here completely changed that. I actually look forward to appointments now.' },
  { initials: 'AL', name: 'Amanda L.', treatment: 'Emergency Treatment · 2025', text: 'Had a dental emergency on a Saturday — got me in within 2 hours. Sorted quickly and painlessly. Cannot recommend enough.' },
]

export const FAQS = [
  { q: 'Is the consultation free?', a: 'Yes — Invisalign, implants & cosmetic consultations are completely free. General check-ups are £65 for new patients.' },
  { q: 'How soon can I get seen?', a: 'Most patients within 2-3 days. Emergency slots usually available same-day or next-day.' },
  { q: 'Do you treat nervous patients?', a: 'Absolutely. We offer oral and IV sedation. Just mention it when booking.' },
  { q: 'Do you accept insurance?', a: 'Yes — we accept Denplan, Bupa, AXA PPP and most major dental insurance plans.' },
]

export const TIME_SLOTS = [
  { time: '8:00 AM', available: true },
  { time: '8:30 AM', available: true },
  { time: '9:00 AM', available: false },
  { time: '9:30 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '10:30 AM', available: true },
  { time: '11:00 AM', available: true },
  { time: '12:00 PM', available: true },
  { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: true },
  { time: '5:00 PM', available: false },
  { time: '6:00 PM', available: true },
]