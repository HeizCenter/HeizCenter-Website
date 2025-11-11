// Common types for the application

export interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon?: string;
  featured: boolean;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  publishedAt: string;
  author: string;
  categories: string[];
  tags: string[];
  readingTime?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  service?: string;
  location?: string;
  gdprConsent: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}
