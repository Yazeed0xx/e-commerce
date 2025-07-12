export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number | null;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  badge: string | null;
  inStock: boolean;
  stockCount?: number;
  description: string;
  features?: string[];
  specifications?: Record<string, string>;
  colors?: {
    name: string;
    value: string;
    available: boolean;
  }[];
  variants?: {
    name: string;
    price: number;
  }[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "SoundWave Pro X7",
    brand: "SoundWave",
    category: "Headphones",
    price: 299,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop",
    ],
    rating: 4.9,
    reviews: 2108,
    badge: "Best Seller",
    inStock: true,
    stockCount: 15,
    description:
      "Premium noise-cancelling headphones with 48-hour battery life and studio-quality sound.",
    features: [
      "Active Noise Cancellation with 99.9% efficiency",
      "48-hour battery life with quick charge",
      "Hi-Res Audio certification",
      "Premium leather headband and ear cushions",
      "Multi-device connectivity",
      "Touch controls with voice assistant",
    ],
    specifications: {
      "Driver Size": "40mm dynamic drivers",
      "Frequency Response": "20Hz - 40kHz",
      Impedance: "32 ohms",
      Sensitivity: "103 dB/mW",
      "Battery Life": "Up to 48 hours",
      "Charging Time": "3 hours (15 min quick charge = 3 hours playback)",
      Weight: "290g",
      Connectivity: "Bluetooth 5.3, 3.5mm jack",
      "Noise Cancellation": "Active ANC with transparency mode",
      "Water Resistance": "IPX4",
    },
    colors: [
      { name: "Midnight Black", value: "#1a1a1a", available: true },
      { name: "Pearl White", value: "#f8f9fa", available: true },
      { name: "Space Gray", value: "#6c757d", available: false },
    ],
    variants: [
      { name: "Standard", price: 299 },
      { name: "Pro Max", price: 399 },
    ],
  },
  {
    id: 2,
    name: "EarBuds Elite",
    brand: "SoundWave",
    category: "Earbuds",
    price: 199,
    originalPrice: 249,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
    ],
    rating: 4.8,
    reviews: 1542,
    badge: "New",
    inStock: true,
    stockCount: 8,
    description:
      "True wireless earbuds with active noise cancellation and crystal-clear audio.",
    features: [
      "Active Noise Cancellation",
      "True wireless design",
      "6-hour battery + 24 hours with case",
      "IPX7 water resistance",
      "Touch controls",
      "Quick charge technology",
    ],
    specifications: {
      "Driver Size": "12mm dynamic drivers",
      "Frequency Response": "20Hz - 20kHz",
      "Battery Life": "6 hours + 24 hours case",
      "Charging Time": "1.5 hours",
      Weight: "5.4g per earbud",
      Connectivity: "Bluetooth 5.2",
      "Water Resistance": "IPX7",
    },
    colors: [
      { name: "Midnight Black", value: "#1a1a1a", available: true },
      { name: "Pearl White", value: "#f8f9fa", available: true },
    ],
    variants: [
      { name: "Standard", price: 199 },
      { name: "Pro", price: 249 },
    ],
  },
  {
    id: 3,
    name: "Studio Monitor Pro",
    brand: "AudioTech",
    category: "Speakers",
    price: 499,
    originalPrice: 599,
    image:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop",
    ],
    rating: 4.7,
    reviews: 876,
    badge: "Limited",
    inStock: true,
    stockCount: 5,
    description:
      "Professional studio monitors for audiophiles and content creators.",
    features: [
      "5-inch woofer and 1-inch tweeter",
      "Bi-amplified design",
      "Acoustic isolation pads included",
      "Multiple input options",
      "Room correction technology",
    ],
    specifications: {
      Woofer: "5-inch polypropylene",
      Tweeter: "1-inch silk dome",
      Power: "50W total (35W woofer + 15W tweeter)",
      "Frequency Response": "48Hz - 20kHz",
      Weight: "4.2kg",
      Dimensions: "200 x 300 x 240mm",
    },
    colors: [{ name: "Charcoal Black", value: "#36454f", available: true }],
    variants: [
      { name: "Single", price: 499 },
      { name: "Pair", price: 899 },
    ],
  },
  {
    id: 4,
    name: "Bass Master 2000",
    brand: "BeatBox",
    category: "Speakers",
    price: 799,
    originalPrice: 999,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    ],
    rating: 4.6,
    reviews: 654,
    badge: null,
    inStock: true,
    stockCount: 12,
    description:
      "Powerful portable speaker with earth-shaking bass and 20-hour battery.",
    features: [
      "20-hour battery life",
      "360-degree sound",
      "Deep bass technology",
      "Water resistant IPX6",
      "Bluetooth 5.0",
      "Party mode connectivity",
    ],
    specifications: {
      "Power Output": "100W RMS",
      "Battery Life": "20 hours",
      "Charging Time": "4 hours",
      Weight: "2.1kg",
      "Water Resistance": "IPX6",
      Connectivity: "Bluetooth 5.0, AUX",
    },
    colors: [
      { name: "Midnight Black", value: "#1a1a1a", available: true },
      { name: "Electric Blue", value: "#0066ff", available: true },
    ],
    variants: [{ name: "Standard", price: 799 }],
  },
  {
    id: 5,
    name: "Gaming Headset X1",
    brand: "GameAudio",
    category: "Gaming",
    price: 159,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=600&fit=crop",
    ],
    rating: 4.5,
    reviews: 432,
    badge: null,
    inStock: false,
    stockCount: 0,
    description:
      "Professional gaming headset with 7.1 surround sound and RGB lighting.",
    features: [
      "7.1 surround sound",
      "RGB lighting effects",
      "Detachable microphone",
      "Memory foam ear cushions",
      "50mm drivers",
      "Multi-platform compatibility",
    ],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "15Hz - 25kHz",
      Impedance: "32 ohms",
      Microphone: "Detachable boom mic",
      Connectivity: "USB, 3.5mm",
      Weight: "350g",
    },
    colors: [{ name: "Gaming Black", value: "#1a1a1a", available: false }],
    variants: [{ name: "Standard", price: 159 }],
  },
  {
    id: 6,
    name: "Podcast Mic Pro",
    brand: "VoiceTech",
    category: "Microphones",
    price: 249,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=600&fit=crop",
    ],
    rating: 4.8,
    reviews: 298,
    badge: "Editor's Choice",
    inStock: true,
    stockCount: 7,
    description:
      "Professional USB microphone perfect for podcasting and streaming.",
    features: [
      "Cardioid pickup pattern",
      "Zero-latency headphone monitoring",
      "Built-in pop filter",
      "Adjustable desktop stand",
      "USB plug-and-play",
      "Studio-quality recording",
    ],
    specifications: {
      "Pickup Pattern": "Cardioid",
      "Frequency Response": "20Hz - 20kHz",
      "Sample Rate": "48kHz/16-bit",
      Connectivity: "USB-C",
      Weight: "1.2kg",
      Dimensions: "220 x 120 x 120mm",
    },
    colors: [{ name: "Studio Black", value: "#1a1a1a", available: true }],
    variants: [{ name: "Standard", price: 249 }],
  },
  {
    id: 7,
    name: "Wireless Sport Buds",
    brand: "FitSound",
    category: "Earbuds",
    price: 89,
    originalPrice: 129,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
    ],
    rating: 4.3,
    reviews: 567,
    badge: null,
    inStock: true,
    stockCount: 20,
    description:
      "Sweat-resistant wireless earbuds designed for active lifestyles.",
    features: [
      "IPX8 sweat resistance",
      "Secure sport fit",
      "8-hour battery life",
      "Quick charge",
      "Voice assistant support",
      "Multiple ear tip sizes",
    ],
    specifications: {
      "Driver Size": "10mm",
      "Battery Life": "8 hours + 24 hours case",
      "Water Resistance": "IPX8",
      Connectivity: "Bluetooth 5.1",
      Weight: "4.8g per earbud",
      "Charging Time": "1 hour",
    },
    colors: [
      { name: "Sport Black", value: "#1a1a1a", available: true },
      { name: "Neon Green", value: "#39ff14", available: true },
    ],
    variants: [{ name: "Standard", price: 89 }],
  },
  {
    id: 8,
    name: "Vinyl Player Classic",
    brand: "RetroSound",
    category: "Turntables",
    price: 349,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    ],
    rating: 4.7,
    reviews: 189,
    badge: "Vintage",
    inStock: true,
    stockCount: 3,
    description:
      "Classic vinyl turntable with modern connectivity and premium components.",
    features: [
      "Belt-driven design",
      "USB digitizing",
      "Bluetooth connectivity",
      "Pre-installed cartridge",
      "Anti-resonance platter",
      "Adjustable tonearm",
    ],
    specifications: {
      "Drive Type": "Belt-driven",
      Speed: "33 1/3, 45 RPM",
      Cartridge: "Audio-Technica AT95E",
      Connectivity: "USB, Bluetooth, RCA",
      Weight: "4.5kg",
      Dimensions: "420 x 320 x 128mm",
    },
    colors: [{ name: "Classic Wood", value: "#8B4513", available: true }],
    variants: [{ name: "Standard", price: 349 }],
  },

  {
    id: 9,
    name: "Pro Gaming Mouse",
    brand: "GameAudio",
    category: "Gaming",
    price: 79,
    originalPrice: 99,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=600&fit=crop",
    ],
    rating: 1,
    reviews: 320,
    badge: null,
    inStock: true,
    stockCount: 25,
    description:
      "High-precision gaming mouse with customizable RGB lighting and ergonomic design.",
    features: [
      "16,000 DPI optical sensor",
      "Customizable RGB lighting",
      "Ergonomic shape for comfort",
      "On-the-fly DPI adjustment",
      "6 programmable buttons",
      "Durable braided cable",
    ],
    specifications: {
      Sensor: "PixArt PMW3389",
      DPI: "100 - 16,000 adjustable",
      Buttons: "6 programmable buttons",
      Connectivity: "USB wired",
      Weight: "85g",
      Dimensions: "130 x 68 x 40mm",
    },
    colors: [{ name: "Black", value: "#000000", available: true }],
    variants: [{ name: "Standard", price: 79 }],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find((product) => product.id === id);
};

export const categories = [
  "Headphones",
  "Earbuds",
  "Speakers",
  "Gaming",
  "Microphones",
  "Turntables",
];

export const brands = [
  "SoundWave",
  "AudioTech",
  "BeatBox",
  "GameAudio",
  "VoiceTech",
  "FitSound",
  "RetroSound",
];
