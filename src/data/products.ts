export interface Product {
  id: string;
  name: string;
  category: 'sunglasses' | 'optical';
  price: string;
  description: string;
  image: string;
  tag: string;
  specs: string[];
}

export interface LensTech {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  features: { name: string; value: string }[];
}

export const products: Product[] = [
  {
    id: 'sg-1',
    name: 'Aero Gold Aviator',
    category: 'sunglasses',
    price: '₺7,450',
    description: 'Ultra-lightweight 24k gold-plated titanium frame featuring signature geometric gradient lenses. Designed for fashion-forward statements.',
    image: 'sunglasses-hero', // points to the luxury hero asset
    tag: 'Trending',
    specs: ['100% UVA/UVB Protection', 'Titanium Frame', 'Anti-reflective Inner Coating']
  },
  {
    id: 'sg-2',
    name: 'Obsidian Monolith',
    category: 'sunglasses',
    price: '₺6,890',
    description: 'Bold acetate frame with thick bevelled edges and polarized dark charcoal lenses. A masterful blend of mystery and modernism.',
    image: 'obsidian-monolith',
    tag: 'Limited Edition',
    specs: ['Polarized Lenses', 'Premium Italian Acetate', 'Handcrafted in Italy']
  },
  {
    id: 'sg-3',
    name: 'Siena Cat-Eye',
    category: 'sunglasses',
    price: '₺5,900',
    description: 'Chic upswept silhouette with tortoiseshell detailing and warm amber gradient lenses. Elegance reimagined.',
    image: 'siena-cateye',
    tag: 'New Collection',
    specs: ['Scratch-Resistant Lenses', 'Flexible Spring Hinges', 'Includes Premium Leather Case']
  },
  {
    id: 'op-1',
    name: 'Metropolitan Crystal',
    category: 'optical',
    price: '₺4,200',
    description: 'Minimalist crystal-clear transparent frame crafted from durable TR90. The perfect modern companion for professional settings.',
    image: 'optical-glasses', // points to the Travertine stone shot
    tag: 'Best Seller',
    specs: ['TR90 Ultralight Polymer', 'Blue-light blocking ready', 'Ergonomic Keyhole Bridge']
  },
  {
    id: 'op-2',
    name: 'Ankara Classic Round',
    category: 'optical',
    price: '₺4,850',
    description: 'Timeless round frame pairing brushed silver temples with a matte black rim. Sleek, artistic, and lightweight.',
    image: 'ankara-round',
    tag: 'Classic',
    specs: ['Stainless Steel & Acetate', 'Adjustable Silicone Nosepads', 'Highly flexible temples']
  },
  {
    id: 'op-3',
    name: 'Linear Titanium Square',
    category: 'optical',
    price: '₺8,100',
    description: 'Sophisticated rimless structure with minimalist matte gold bridges and temple arms. Pure comfort and absolute prestige.',
    image: 'titanium-square',
    tag: 'Premium',
    specs: ['Pure Japanese Titanium', 'Ultralight (9 grams)', 'Hypoallergenic Materials']
  }
];

export const lensTechs: LensTech[] = [
  {
    id: 'zeiss-myocare',
    name: 'ZEISS MyoCare',
    description: 'Clinically proven lens design specifically optimized for slowing down myopia progression in young eyes while delivering crisp vision.',
    benefits: [
      'Slows down eye elongation by up to 63%',
      'Maximum optical clarity in the center',
      'Full UV Protection in clear lenses'
    ],
    features: [
      { name: 'Technology', value: 'Cylindrical Annular Refractive Elements (C.A.R.E.)' },
      { name: 'Target Group', value: 'Children & Teenagers' },
      { name: 'Coating', value: 'DuraVision Premium Coating' }
    ]
  },
  {
    id: 'progressive-max',
    name: 'Zeiss Progressive Individual',
    description: 'Tailor-made multifocal lenses adapting to your specific posture, professional environment, and physiological reading distance.',
    benefits: [
      'Seamless transition between near, intermediate, and far vision',
      'Elimination of "swim effect" and peripheral distortions',
      'Optimized digital screen comfort'
    ],
    features: [
      { name: 'Customization', value: 'Individualized FaceFit Parameters' },
      { name: 'Optimization', value: 'Digital Inside Technology' },
      { name: 'Visual Field', value: 'Up to 40% wider vision field' }
    ]
  }
];
