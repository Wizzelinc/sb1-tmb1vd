export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  isActive: boolean;
}

export const SITE_CONFIG = {
  title: 'Wizzel Inc Affiliate Hub',
  description: 'Your trusted destination for curated product recommendations and deals',
  logo: '/images/logo.png',
  theme: {
    primary: '#3B82F6',
    secondary: '#1F2937',
    accent: '#F59E0B',
    background: '#F3F4F6',
    text: '#111827'
  },
  categories: [
    {
      id: 'tech',
      name: 'Technology',
      description: 'Latest gadgets and tech innovations',
      slug: 'technology',
      isActive: true
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      description: 'Products for better living',
      slug: 'lifestyle',
      isActive: true
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      description: 'Health and wellness products',
      slug: 'health-wellness',
      isActive: true
    },
    {
      id: 'home',
      name: 'Home & Living',
      description: 'Everything for your home',
      slug: 'home-living',
      isActive: true
    }
  ],
  socialLinks: {
    twitter: 'https://twitter.com/wizzelinc',
    facebook: 'https://facebook.com/wizzelinc'
  },
  contact: {
    email: 'partners@wizzel-inc.com'
  }
};