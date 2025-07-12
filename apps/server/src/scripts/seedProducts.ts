import { db, productsTable } from "@/db";

async function seedProducts() {
  try {
    console.log("🌱 Seeding products...");

    // Clear existing products first
    await db.delete(productsTable);
    console.log("🗑️ Cleared existing products");

    // Insert sample products one by one
    const product1 = await db.insert(productsTable).values({
      name: "SoundWave Pro X7",
      brand: "SoundWave",
      category: "Headphones",
      price: "299.00",
      originalPrice: "399.00",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      ],
      rating: "4.90",
      reviews: 2108,
      badge: "Best Seller",
      inStock: true,
      stockCount: 15,
      description:
        "Experience premium sound quality with the SoundWave Pro X7. These wireless headphones deliver crystal-clear audio with deep bass and crisp highs.",
      features: [
        "Active Noise Cancellation",
        "40-hour battery life",
        "Quick charge: 5 min = 3 hours",
        "Premium comfort fit",
      ],
      specifications: {
        "Driver Size": "40mm",
        "Frequency Response": "20Hz - 20kHz",
        Impedance: "32Ω",
        Weight: "290g",
      },
      colors: [
        { name: "Midnight Black", value: "#000000", available: true },
        { name: "Silver Gray", value: "#C0C0C0", available: true },
        { name: "Deep Blue", value: "#003366", available: false },
      ],
      variants: [
        { name: "Standard", price: 299 },
        { name: "Pro", price: 399 },
      ],
    });
    console.log("✅ Added product: SoundWave Pro X7");

    const product2 = await db.insert(productsTable).values({
      name: "AudioMaster Studio",
      brand: "AudioMaster",
      category: "Speakers",
      price: "549.99",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      ],
      rating: "4.70",
      reviews: 856,
      badge: "New",
      inStock: true,
      stockCount: 8,
      description:
        "Professional studio monitors designed for accurate sound reproduction. Perfect for music production and critical listening.",
      features: [
        "Studio-grade accuracy",
        "Bi-amplified design",
        "Multiple input options",
        "Room correction EQ",
      ],
      specifications: {
        Power: "120W",
        "Frequency Response": "35Hz - 22kHz",
        Connections: "XLR, TRS, RCA",
        Dimensions: "25 x 15 x 20 cm",
      },
      colors: [{ name: "Studio Black", value: "#1a1a1a", available: true }],
      variants: [
        { name: "Single", price: 549.99 },
        { name: "Pair", price: 999.99 },
      ],
    });
    console.log("✅ Added product: AudioMaster Studio");

    const product3 = await db.insert(productsTable).values({
      name: "BassBoost Wireless",
      brand: "BassBoost",
      category: "Earbuds",
      price: "199.00",
      originalPrice: "249.00",
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop",
      ],
      rating: "4.50",
      reviews: 1205,
      badge: null,
      inStock: true,
      stockCount: 25,
      description:
        "True wireless earbuds with powerful bass and all-day comfort. Perfect for workouts and daily commutes.",
      features: [
        "True wireless freedom",
        "IPX7 water resistance",
        "6+18 hours battery",
        "Touch controls",
      ],
      specifications: {
        Driver: "12mm dynamic",
        Battery: "6h + 18h case",
        Charging: "USB-C + Wireless",
        Weight: "5g per earbud",
      },
      colors: [
        { name: "Pure White", value: "#FFFFFF", available: true },
        { name: "Jet Black", value: "#000000", available: true },
        { name: "Rose Gold", value: "#E8B4A0", available: true },
      ],
      variants: [{ name: "Standard", price: 199 }],
    });
    console.log("✅ Added product: BassBoost Wireless");

    const product4 = await db.insert(productsTable).values({
      name: "TechBeats Pro",
      brand: "TechBeats",
      category: "Headphones",
      price: "399.99",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      ],
      rating: "4.60",
      reviews: 743,
      badge: "Premium",
      inStock: true,
      stockCount: 7,
      description:
        "Professional-grade headphones with exceptional sound quality and comfort.",
      features: [
        "Hi-Res Audio certified",
        "Planar magnetic drivers",
        "Open-back design",
        "Detachable cable",
      ],
      specifications: {
        "Driver Type": "Planar magnetic",
        Impedance: "50Ω",
        Sensitivity: "97dB",
        Cable: "3m detachable",
      },
      colors: [
        { name: "Professional Black", value: "#000000", available: true },
      ],
      variants: [
        { name: "Standard", price: 399.99 },
        { name: "Limited Edition", price: 499.99 },
      ],
    });
    console.log("✅ Added product: TechBeats Pro");

    const product5 = await db.insert(productsTable).values({
      name: "PortableSound Max",
      brand: "SoundWave",
      category: "Speakers",
      price: "279.00",
      originalPrice: "329.00",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      ],
      rating: "4.40",
      reviews: 892,
      badge: "Waterproof",
      inStock: true,
      stockCount: 18,
      description:
        "Rugged portable speaker with 360-degree sound and all-day battery life.",
      features: [
        "360-degree sound",
        "20-hour battery",
        "IPX7 waterproof",
        "Bass boost technology",
      ],
      specifications: {
        "Output Power": "60W",
        "Battery Life": "20 hours",
        "Water Rating": "IPX7",
        Bluetooth: "5.0",
      },
      colors: [
        { name: "Ocean Blue", value: "#006994", available: true },
        { name: "Forest Green", value: "#228B22", available: true },
        { name: "Sunset Orange", value: "#FF8C00", available: false },
      ],
      variants: [
        { name: "Standard", price: 279 },
        { name: "Pro", price: 349 },
      ],
    });
    console.log("✅ Added product: PortableSound Max");

    console.log("🎉 Products seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
}

seedProducts();
