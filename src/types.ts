export interface HostingPlan {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
    protection?: string;
  };
  features: string[];
  type: 'minecraft' | 'vps' | 'game';
}

export interface Datacenter {
  slug: string;
  name: string;
  flag: string;
  latency: number;
  protection: string;
  reliability: string;
  description: string;
  coords: { x: number; y: number }; // Percentage for the global map visual
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  content: string;
  avatarUrl: string;
}
