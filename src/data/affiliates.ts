export interface Affiliate {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  categories: string[];
  featured: boolean;
}

export const affiliates: Affiliate[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'Wide selection of electronics, gadgets, and accessories.',
    logo: '/images/affiliates/amazon.png',
    url: '#',
    categories: ['all'],
    featured: true
  },
  {
    id: 'bestbuy',
    name: 'Best Buy',
    description: 'Premium electronics and tech products.',
    logo: '/images/affiliates/bestbuy.png',
    url: '#',
    categories: ['computers', 'audio', 'gaming'],
    featured: true
  },
  {
    id: 'bhphotovideo',
    name: 'B&H Photo Video',
    description: 'Professional photography and video equipment.',
    logo: '/images/affiliates/bh.png',
    url: '#',
    categories: ['photography', 'audio'],
    featured: true
  },
  {
    id: 'newegg',
    name: 'Newegg',
    description: 'Computer hardware and consumer electronics.',
    logo: '/images/affiliates/newegg.png',
    url: '#',
    categories: ['computers', 'gaming'],
    featured: false
  }
];