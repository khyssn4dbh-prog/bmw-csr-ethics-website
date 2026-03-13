export interface Vehicle {
  id: string;
  name: string;
  category: "Luxury Sedan" | "Performance" | "Electric";
  description: string;
  image: string;
  specs: {
    range?: string;
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  highlights: string[];
}

export const VEHICLES: Vehicle[] = [
  {
    id: "i7",
    name: "BMW i7",
    category: "Electric",
    description: "The first-ever all-electric BMW 7 Series. Combining electric performance and multisensory entertainment.",
    image: "https://picsum.photos/seed/bmw-i7-const/1200/800",
    specs: {
      range: "Up to 388 miles",
      power: "536 hp",
      acceleration: "0-60 mph in 4.5s",
      topSpeed: "149 mph"
    },
    highlights: [
      "BMW Interaction Bar with faceted glass look",
      "31.3\" BMW Theater Screen for rear passengers",
      "Executive Lounge seating with reclining function",
      "Automatic doors with soft-close function"
    ]
  },
  {
    id: "ix",
    name: "BMW iX",
    category: "Electric",
    description: "A new era of mobility. The BMW iX is the first model based on a new, modular, scalable future toolkit.",
    image: "https://picsum.photos/seed/bmw-ix-const/1200/800",
    specs: {
      range: "Up to 324 miles",
      power: "516 hp",
      acceleration: "0-60 mph in 4.4s",
      topSpeed: "124 mph"
    },
    highlights: [
      "Shy Tech: hidden technology throughout the interior",
      "Panoramic Sky Lounge LED roof",
      "Sustainable materials including FSC-certified wood",
      "Fifth-generation BMW eDrive technology"
    ]
  },
  {
    id: "i4",
    name: "BMW i4",
    category: "Electric",
    description: "The first all-electric Gran Coupé, the BMW i4 delivers outstanding dynamics with a high level of comfort.",
    image: "https://picsum.photos/seed/bmw-i4-const/1200/800",
    specs: {
      range: "Up to 301 miles",
      power: "335 hp",
      acceleration: "0-60 mph in 5.5s",
      topSpeed: "118 mph"
    },
    highlights: [
      "BMW Curved Display with iDrive 8.5",
      "Dynamic Gran Coupé proportions",
      "Rear-wheel drive for classic BMW handling",
      "Fast charging: up to 108 miles in 10 minutes"
    ]
  },
  {
    id: "m4",
    name: "BMW M4",
    category: "Performance",
    description: "Uncompromising power and precision. The BMW M4 Coupé offers a thrilling driving experience.",
    image: "https://picsum.photos/seed/bmw-m4-const/1200/800",
    specs: {
      power: "503 hp",
      acceleration: "0-60 mph in 3.4s",
      topSpeed: "180 mph"
    },
    highlights: [
      "M TwinPower Turbo inline 6-cylinder engine",
      "M xDrive all-wheel drive system",
      "Carbon fiber reinforced plastic (CFRP) roof",
      "M Carbon bucket seats (optional)"
    ]
  },
  {
    id: "m3",
    name: "BMW M3",
    category: "Performance",
    description: "The ultimate driving machine. The BMW M3 Sedan combines high-performance with everyday usability.",
    image: "https://picsum.photos/seed/bmw-m3-const/1200/800",
    specs: {
      power: "473 hp",
      acceleration: "0-60 mph in 4.1s",
      topSpeed: "155 mph"
    },
    highlights: [
      "Iconic M design with large vertical kidney grille",
      "6-speed manual transmission available",
      "M Compound brakes with blue calipers",
      "Adaptive M Suspension for precision handling"
    ]
  },
  {
    id: "7series",
    name: "BMW 7 Series",
    category: "Luxury Sedan",
    description: "The pinnacle of luxury. The BMW 7 Series represents the ultimate in comfort and innovation.",
    image: "https://picsum.photos/seed/bmw-7-const/1200/800",
    specs: {
      power: "375 hp",
      acceleration: "0-60 mph in 5.2s",
      topSpeed: "130 mph"
    },
    highlights: [
      "BMW Crystal Headlights with Swarovski crystals",
      "Illuminated Kidney Grille",
      "Bowers & Wilkins Diamond Surround Sound System",
      "Integral Active Steering for enhanced agility"
    ]
  },
  {
    id: "5series",
    name: "BMW 5 Series",
    category: "Luxury Sedan",
    description: "Business athlete. The BMW 5 Series Sedan combines dynamic design with advanced technology.",
    image: "https://picsum.photos/seed/bmw-5-const/1200/800",
    specs: {
      power: "255 hp",
      acceleration: "0-60 mph in 5.7s",
      topSpeed: "130 mph"
    },
    highlights: [
      "BMW Live Cockpit Professional",
      "Active Blind Spot Detection",
      "Lane Departure Warning",
      "Apple CarPlay and Android Auto compatibility"
    ]
  }
];

export const STATS = [
  { label: "Countries", value: 140, suffix: "+" },
  { label: "Employees", value: 150000, suffix: "+" },
  { label: "Founded", value: 1916, suffix: "" },
  { label: "Production Sites", value: 30, suffix: "+" }
];
