import {
  ServiceItem,
  ProjectItem,
  PricingPlan,
  MaintenancePlan,
  ComparisonRow,
  ProcessStep,
  WhyReason,
  AboutBlock,
} from './types';

// Safe asset URL resolver that supports custom base paths (e.g. GitHub Pages)
export const getAssetUrl = (fileName: string): string => {
  const clean = fileName.startsWith('./') ? fileName.slice(2) : fileName.startsWith('/') ? fileName.slice(1) : fileName;
  const meta = import.meta as unknown as { env?: { BASE_URL?: string } };
  const base = meta?.env?.BASE_URL || './';
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
};

export const BRAND = {
  name: 'APEX SURYA',
  handle: '@apexxsurya.web',
  instagramUrl: 'https://www.instagram.com/apexxsurya.web/',
  phoneDisplay: '+91 7309520485',
  phoneRaw: '917309520485',
  email: 'suryachaurasia99@gmail.com',
  logo: getAssetUrl('logo.png'),
  tagline: 'WE BUILD WEBSITES THAT MAKE BUSINESSES STAND OUT.',
  positioning:
    'APEX SURYA is a freelance web-development brand creating modern, responsive and professional websites for businesses, startups, shops, restaurants, creators, freelancers and personal brands.',
  location: 'Global / Remote Studio',
  year: '2026',
};

// WhatsApp Link Generator Helper
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Hey Surya, I am here to build my website. Please share your website plans and details.';
  const message = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BRAND.phoneRaw}?text=${message}`;
}

// Mailto Generator Helper for General Website Queries
export function getWebsiteQueryEmailUrl(): string {
  const subject = encodeURIComponent('Website Query — APEX SURYA');
  const body = encodeURIComponent(
`Hello Surya,

I have a query regarding website development.

My name: 
Business name: 
My requirements: 

Thank you.`
  );
  return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
}

// Quick stats below hero
export const STATS = [
  { value: 10, suffix: '+', label: 'PROJECTS COMPLETED', subtext: 'Curated digital productions' },
  { value: 100, suffix: '%', label: 'RESPONSIVE DESIGN', subtext: 'Flawless across all devices' },
  { value: 24, suffix: '/7', label: 'ONLINE PRESENCE', subtext: 'High-availability architecture' },
  { value: 1, suffix: ' GOAL', label: 'BUSINESS GROWTH', subtext: 'Engineered for real conversion' },
];

// 8 Services
export const SERVICES: ServiceItem[] = [
  {
    id: 'business',
    number: '01',
    title: 'BUSINESS WEBSITES',
    description: 'Professional websites that establish trust and credibility for enterprises, consultancies and growing firms.',
    tags: ['Brand Authority', 'Lead Gen', 'Corporate UX'],
    icon: 'Briefcase',
  },
  {
    id: 'landing',
    number: '02',
    title: 'LANDING PAGES',
    description: 'Focused landing pages designed around a specific business goal with high-conversion visual storytelling.',
    tags: ['Conversion Focused', 'A/B Ready', 'Fast Loading'],
    icon: 'Target',
  },
  {
    id: 'portfolio',
    number: '03',
    title: 'PORTFOLIO WEBSITES',
    description: 'Modern portfolios for freelancers, creators and professionals looking to command premium rates.',
    tags: ['Personal Brand', 'Case Studies', 'Interactive Work'],
    icon: 'UserCheck',
  },
  {
    id: 'restaurant',
    number: '04',
    title: 'RESTAURANT & CAFE WEBSITES',
    description: 'Beautiful websites designed to showcase menus, culinary ambience, locations and direct reservations.',
    tags: ['Digital Menus', 'Location Maps', 'Direct Booking'],
    icon: 'UtensilsCrossed',
  },
  {
    id: 'ecommerce',
    number: '05',
    title: 'E-COMMERCE WEBSITES',
    description: 'Modern online stores designed to present products professionally and streamline the purchasing journey.',
    tags: ['Product Showcase', 'Payment Ready', 'Catalog UX'],
    icon: 'ShoppingBag',
  },
  {
    id: 'redesign',
    number: '06',
    title: 'WEBSITE REDESIGN',
    description: 'Transform outdated, sluggish websites into modern, high-performance digital experiences.',
    tags: ['Visual Refresh', 'Speed Boost', 'Modern Tech Stack'],
    icon: 'RefreshCw',
  },
  {
    id: 'mobile',
    number: '07',
    title: 'MOBILE-FRIENDLY WEBSITES',
    description: 'Responsive websites that work smoothly across phones, tablets, laptops and ultra-wide displays.',
    tags: ['Mobile-First', 'Touch Optimized', 'Fluid Layouts'],
    icon: 'Smartphone',
  },
  {
    id: 'maintenance',
    number: '08',
    title: 'WEBSITE MAINTENANCE',
    description: 'Basic content updates, speed improvements, security checks and continuous website support.',
    tags: ['Uptime Monitoring', 'Content Updates', 'Tech Support'],
    icon: 'ShieldCheck',
  },
];

// 5 Selected Projects
export const PROJECTS: ProjectItem[] = [
  {
    id: 'restaurant-experience',
    title: 'RESTAURANT WEBSITE',
    category: 'Hospitality & Dining',
    description: 'Modern restaurant experience with immersive visual storytelling, interactive dietary menu catalog, and table inquiry routing.',
    clientType: 'Gourmet Bistro & Cafe',
    metrics: '+84% Online Reservations',
    deliverables: ['Custom Menu Engine', 'Location & Hours Widget', 'Speed Optimized Photos'],
    mockupTheme: 'dark-crimson',
    accentColor: '#ef4444',
    overview: 'A fine culinary destination needed a digital presence matching its Michelin-level atmosphere. We built a dark aesthetic site with smooth menu transitions and direct WhatsApp table reservations.',
    features: ['Real-time Menu Tabs', 'One-touch WhatsApp Table Booking', 'Mobile-first Tasting Deck'],
  },
  {
    id: 'corporate-presence',
    title: 'BUSINESS WEBSITE',
    category: 'Corporate & Consulting',
    description: 'Professional corporate presence delivering high authority, enterprise credential presentation, and direct high-value lead capture.',
    clientType: 'Strategic Advisory Firm',
    metrics: '3.2x Lead Conversion',
    deliverables: ['Service Architecture', 'Team & Credential Panels', 'Inquiry Funnel'],
    mockupTheme: 'cyan-slate',
    accentColor: '#38bdf8',
    overview: 'Designed for high-trust B2B transactions. Featuring sleek interactive service modules, executive leadership bios, and zero-latency contact inquiry handling.',
    features: ['Corporate Identity Styling', 'Interactive Case Matrix', 'Automated Inquiry Route'],
  },
  {
    id: 'modern-ecommerce',
    title: 'E-COMMERCE STORE',
    category: 'Retail & Direct-to-Consumer',
    description: 'Modern product-focused shopping experience with clean product lookbooks, instant cart actions, and checkout-focused UX.',
    clientType: 'Minimalist Apparel & Gear',
    metrics: '0.8s Page Load Time',
    deliverables: ['Product Showcase Grid', 'Cart & WhatsApp Checkout', 'Responsive Lookbook'],
    mockupTheme: 'emerald-obsidian',
    accentColor: '#10b981',
    overview: 'Engineered for a boutique lifestyle brand that wanted high visual impact without the slow bloat of heavy legacy storefronts.',
    features: ['Micro-animated product cards', 'Instant WhatsApp Order generation', 'Multi-angle image zoom'],
  },
  {
    id: 'creative-portfolio',
    title: 'PERSONAL PORTFOLIO',
    category: 'Personal Brand & Creator',
    description: 'Creative portfolio for a high-profile professional highlighting bespoke project case studies, client accolades, and press features.',
    clientType: 'Visual Director & Architect',
    metrics: '100/100 Lighthouse Performance',
    deliverables: ['Interactive Project Gallery', 'About & Philosophy Deck', 'Booking Calendar'],
    mockupTheme: 'violet-night',
    accentColor: '#a855f7',
    overview: 'Sleek editorial typography paired with dark glass cards that place visual assets at the center of attention while keeping navigation razor sharp.',
    features: ['Curated Case Studies', 'Dynamic Filter Matrix', 'Social & Media Link Hub'],
  },
  {
    id: 'local-business',
    title: 'LOCAL BUSINESS WEBSITE',
    category: 'Local Services & Retail',
    description: 'Professional online presence for a local enterprise driving local search visibility, neighborhood credibility, and customer walk-ins.',
    clientType: 'Premium Auto Detailing & Workshop',
    metrics: '+120% Local Map Inquiries',
    deliverables: ['Service Package Cards', 'Direct Call & WhatsApp Actions', 'Interactive FAQs'],
    mockupTheme: 'amber-charcoal',
    accentColor: '#f59e0b',
    overview: 'Tailored for local dominance. Clear packages, Google Maps integration, direct click-to-WhatsApp quote trigger, and transparent pricing breakdowns.',
    features: ['Pricing Calculator Preview', 'Click-to-Call / WhatsApp', 'Review Showcase Carousel'],
  },
];

// 3 Pricing Plans
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    planNumber: 'PLAN 01',
    name: 'STARTER',
    price: '₹9,999',
    rawPrice: 9999,
    popular: false,
    idealFor: 'Perfect for individuals, small businesses and startups.',
    features: [
      'Professional Website',
      'Modern Custom Design',
      'Responsive Design',
      'Mobile-Friendly Layout',
      'Basic SEO Setup',
      'Contact / Inquiry Section',
      'WhatsApp Integration',
      '1 Year FREE Hosting',
      'Basic Website Setup',
      '1 Year Hosting Support',
    ],
    ctaText: 'CHOOSE STARTER — ₹9,999',
    whatsappMessage:
      'Hey Surya, I am here to build my website. I am interested in the Starter Plan (₹9,999). Please share the next steps.',
  },
  {
    id: 'professional',
    planNumber: 'PLAN 02',
    name: 'PROFESSIONAL',
    price: '₹14,999',
    rawPrice: 14999,
    popular: true,
    idealFor: 'For growing businesses that need a stronger online presence.',
    features: [
      'Everything in Starter',
      'More Advanced Website Design',
      'Additional Website Sections',
      'Enhanced UI/UX',
      'Advanced Contact Section',
      'Social Media Integration',
      'WhatsApp Integration',
      'Basic SEO Optimization',
      '1 Year FREE Hosting',
      'Performance Optimization',
      'Professional Website Setup',
    ],
    ctaText: 'CHOOSE PROFESSIONAL — ₹14,999',
    whatsappMessage:
      'Hey Surya, I am here to build my website. I am interested in the Professional Plan (₹14,999). Please share the next steps.',
  },
  {
    id: 'premium',
    planNumber: 'PLAN 03',
    name: 'PREMIUM',
    price: '₹24,999',
    rawPrice: 24999,
    popular: false,
    idealFor: 'For businesses that want a premium and more advanced digital presence.',
    features: [
      'Everything in Professional',
      'Premium Custom Design',
      'Advanced Website Sections',
      'Advanced UI/UX',
      'Custom Animations',
      'Premium Website Experience',
      'Advanced WhatsApp Integration',
      'Social Media Integration',
      'SEO Setup',
      'Performance Optimization',
      '1 Year FREE Hosting',
      'Professional Website Setup',
      'Priority Support',
    ],
    ctaText: 'CHOOSE PREMIUM — ₹24,999',
    whatsappMessage:
      'Hey Surya, I am here to build my website. I am interested in the Premium Plan (₹24,999). Please share the next steps.',
  },
];

// Maintenance Plans
export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    id: 'starter-maint',
    name: 'STARTER MAINTENANCE',
    price: '₹999 / MONTH',
    features: [
      'Basic Website Updates',
      'Text Updates',
      'Image Updates',
      'Minor Changes',
      'Basic Website Support',
    ],
    buttonText: 'GET MAINTENANCE',
    whatsappMessage:
      'Hey Surya, I am interested in the Starter Website Maintenance Plan at ₹999/month. Please share the details.',
  },
  {
    id: 'pro-maint',
    name: 'PROFESSIONAL MAINTENANCE',
    price: '₹1,499 / MONTH',
    features: [
      'Everything in Starter',
      'More Website Updates',
      'Content Changes',
      'Design Adjustments',
      'Website Support',
      'Basic Performance Checks',
    ],
    buttonText: 'GET MAINTENANCE',
    whatsappMessage:
      'Hey Surya, I am interested in the Professional Website Maintenance Plan at ₹1,499/month. Please share the details.',
  },
  {
    id: 'premium-maint',
    name: 'PREMIUM MAINTENANCE',
    price: '₹1,999 / MONTH',
    features: [
      'Everything in Professional',
      'Advanced Website Updates',
      'Design Improvements',
      'Content Management',
      'Performance Checks',
      'Priority Website Support',
    ],
    buttonText: 'GET MAINTENANCE',
    whatsappMessage:
      'Hey Surya, I am interested in the Premium Website Maintenance Plan at ₹1,999/month. Please share the details.',
  },
];

// Comparison Table
export const COMPARISON_TABLE: ComparisonRow[] = [
  { feature: 'Website', starter: true, professional: true, premium: true },
  { feature: 'Responsive Design', starter: true, professional: true, premium: true },
  { feature: 'Mobile Friendly', starter: true, professional: true, premium: true },
  { feature: 'WhatsApp Integration', starter: true, professional: true, premium: true },
  { feature: 'SEO Setup', starter: 'Basic', professional: 'Enhanced', premium: 'Advanced' },
  { feature: 'Custom Design', starter: true, professional: true, premium: true },
  { feature: 'Animations', starter: 'Basic', professional: 'Enhanced', premium: 'Advanced' },
  { feature: 'Social Integration', starter: true, professional: true, premium: true },
  { feature: 'Free Hosting', starter: '1 Year', professional: '1 Year', premium: '1 Year' },
  { feature: 'Price', starter: '₹9,999', professional: '₹14,999', premium: '₹24,999' },
];

// About APEX SURYA (4 Feature Blocks)
export const ABOUT_BLOCKS: AboutBlock[] = [
  {
    title: 'DESIGN',
    description: 'Clean and modern visual experiences engineered to make your brand look established and premium.',
    stat: '01',
    icon: 'Palette',
  },
  {
    title: 'PERFORMANCE',
    description: 'Fast and responsive websites built with modern web standards for near-zero loading frustration.',
    stat: '02',
    icon: 'Zap',
  },
  {
    title: 'RESPONSIVENESS',
    description: 'Designed for desktop, tablet and mobile with fluid typography and intuitive touch interactions.',
    stat: '03',
    icon: 'Layout',
  },
  {
    title: 'BUSINESS FOCUS',
    description: 'Every section has a purpose — leading visitors toward calling, messaging or buying.',
    stat: '04',
    icon: 'TrendingUp',
  },
];

// Why APEX SURYA (6 Feature Cards)
export const WHY_REASONS: WhyReason[] = [
  {
    title: 'MODERN DESIGN',
    description: "Professional visuals built for today's digital world that position your brand ahead of competition.",
    icon: 'Sparkles',
  },
  {
    title: 'RESPONSIVE',
    description: 'Perfectly adaptable across devices from smartphones to ultra-wide displays.',
    icon: 'Smartphone',
  },
  {
    title: 'FAST',
    description: 'Optimized for a smooth browsing experience with minimal latency and quick visual rendering.',
    icon: 'Gauge',
  },
  {
    title: 'BUSINESS-FOCUSED',
    description: 'Designed around real business goals to turn passive visitors into active inquiries and clients.',
    icon: 'Crosshair',
  },
  {
    title: 'CLEAN DEVELOPMENT',
    description: 'Simple, organized and maintainable websites built with clean code and no unnecessary dependencies.',
    icon: 'Code2',
  },
  {
    title: 'PERSONAL SUPPORT',
    description: 'Direct communication throughout the project with Surya — no middlemen or ticketing queues.',
    icon: 'MessageSquareHeart',
  },
];

// Work Process (5 Cinematic Timeline Steps)
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand the business, audience and project goals through focused dialogue.',
    deliverables: ['Business Analysis', 'Target Audience Definition', 'Project Scope Agreement'],
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'Create the structure, content direction and visual strategy tailored for conversions.',
    deliverables: ['Sitemap Architecture', 'Content Blueprint', 'Conversion Pathway'],
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Build the visual identity and website experience with futuristic elegance and clarity.',
    deliverables: ['High-Fidelity Mockups', 'Typography & Palette System', 'Interactive Component Rules'],
  },
  {
    step: '04',
    title: 'DEVELOP',
    description: 'Turn the design into a responsive working website with lightning-quick responsiveness.',
    deliverables: ['Clean Code Implementation', 'Mobile Adaptability', 'WhatsApp & Social Integration'],
  },
  {
    step: '05',
    title: 'LAUNCH',
    description: 'Test, optimize and prepare the website for launch, including hosting setup and domain connection.',
    deliverables: ['Cross-Browser Verification', 'SEO Foundation Checks', 'Live Deployment Handover'],
  },
];
