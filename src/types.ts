export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  clientType: string;
  metrics: string;
  deliverables: string[];
  mockupTheme: 'dark-crimson' | 'emerald-obsidian' | 'amber-charcoal' | 'violet-night' | 'cyan-slate';
  accentColor: string;
  previewUrl?: string;
  overview: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  planNumber: string;
  price: string;
  rawPrice: number;
  popular?: boolean;
  idealFor: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  whatsappMessage: string;
}

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  premium: string | boolean;
  category?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface WhyReason {
  title: string;
  description: string;
  icon: string;
}

export interface AboutBlock {
  title: string;
  description: string;
  stat: string;
  icon: string;
}
