export interface ProductVariant {
  id: string;
  name: string;
  slug: string;
  payload: string;
  specifications: Record<string, string>;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
  images?: string[];
  category: 'amr' | 'agv' | 'fleet-management';
  industries: string[];
  variants?: ProductVariant[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  solutions: string[];
  image: string;
}

export interface Solution {
  id: string;
  name: string;
  slug: string;
  industry: string;
  description: string;
  benefits: string[];
  useCases: string[];
  image: string;
  products: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  product: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  type: 'media' | 'event' | 'exhibition';
  source?: string;
  image: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: { type: 'added' | 'improved' | 'fixed'; description: string }[];
}

export interface DocPage {
  product: string;
  section: string;
  title: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  requirement: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}
