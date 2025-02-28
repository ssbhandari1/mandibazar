import mongoose from "mongoose";
import { connectToDB } from "../lib/db";
import Product from "../models/Product";


const dummyProducts = [
  {
    name: "Fresh Apples",
    description: "Crisp and sweet apples, perfect for a healthy snack.",
    price: 2.99,
    originalPrice: 3.99,
    discount: "25%",
    unit: "kg",
    imageUrl: "https://example.com/images/apples.jpg",
    inStock: true,
    quantity: 100,
    category: "Fruits",
    ratings: 4.5,
    reviews: 120,
    weight: "1kg",
    expiryDate: "2025-12-31",
    tags: ["fresh", "organic", "sweet"],
  },
  {
    name: "Organic Carrots",
    description: "Fresh organic carrots, rich in vitamin A.",
    price: 1.99,
    originalPrice: 2.49,
    discount: "20%",
    unit: "kg",
    imageUrl: "https://example.com/images/carrots.jpg",
    inStock: true,
    quantity: 50,
    category: "Vegetables",
    ratings: 4.2,
    reviews: 80,
    weight: "500g",
    expiryDate: "2025-08-15",
    tags: ["organic", "vitamin-rich", "healthy"],
  },
  {
    name: "Almond Milk",
    description: "Rich and creamy almond milk, perfect for a healthy diet.",
    price: 3.49,
    originalPrice: 4.49,
    discount: "22%",
    unit: "litre",
    imageUrl: "https://example.com/images/almond_milk.jpg",
    inStock: true,
    quantity: 30,
    category: "Milk & Dairy",
    ratings: 4.8,
    reviews: 200,
    weight: "1L",
    expiryDate: "2025-06-30",
    tags: ["dairy-free", "vegan", "calcium-rich"],
  },
  {
    name: "Whole Wheat Bread",
    description: "Healthy whole wheat bread, freshly baked.",
    price: 2.99,
    originalPrice: 3.50,
    discount: "15%",
    unit: "pack",
    imageUrl: "https://example.com/images/brown_bread.jpg",
    inStock: true,
    quantity: 40,
    category: "Bakery",
    ratings: 4.6,
    reviews: 150,
    weight: "500g",
    expiryDate: "2025-05-20",
    tags: ["whole wheat", "fiber-rich", "low-calorie"],
  },
  {
    name: "Peanut Butter",
    description: "Creamy peanut butter with no added sugar.",
    price: 5.99,
    originalPrice: 7.49,
    discount: "20%",
    unit: "jar",
    imageUrl: "https://example.com/images/peanut_butter.jpg",
    inStock: true,
    quantity: 20,
    category: "Breakfast",
    ratings: 4.7,
    reviews: 180,
    weight: "750g",
    expiryDate: "2025-11-10",
    tags: ["protein-rich", "nutty", "smooth"],
  },
  {
    name: "Organic Honey",
    description: "Pure organic honey sourced from Himalayan farms.",
    price: 8.99,
    originalPrice: 10.99,
    discount: "18%",
    unit: "bottle",
    imageUrl: "https://example.com/images/honey.jpg",
    inStock: true,
    quantity: 15,
    category: "Cooking Essentials",
    ratings: 4.9,
    reviews: 250,
    weight: "500ml",
    expiryDate: "2027-02-01",
    tags: ["natural", "sweet", "immune booster"],
  },
  {
    name: "Dark Chocolate",
    description: "Premium 85% cocoa dark chocolate with a rich taste.",
    price: 3.99,
    originalPrice: 5.49,
    discount: "27%",
    unit: "bar",
    imageUrl: "https://example.com/images/dark_chocolate.jpg",
    inStock: true,
    quantity: 60,
    category: "Biscuits & Cakes",
    ratings: 4.8,
    reviews: 300,
    weight: "100g",
    expiryDate: "2026-12-20",
    tags: ["antioxidants", "vegan", "low sugar"],
  },
  {
    name: "Dishwashing Liquid",
    description: "Lemon-scented dishwashing liquid for sparkling clean utensils.",
    price: 2.49,
    originalPrice: 3.29,
    discount: "24%",
    unit: "bottle",
    imageUrl: "https://example.com/images/dish_liquid.jpg",
    inStock: true,
    quantity: 75,
    category: "Household Tools",
    ratings: 4.5,
    reviews: 90,
    weight: "750ml",
    expiryDate: "2026-08-10",
    tags: ["cleaning", "lemon", "long-lasting"],
  },
  {
    name: "Dog Food",
    description: "Nutritious and tasty dog food for all breeds.",
    price: 12.99,
    originalPrice: 14.99,
    discount: "13%",
    unit: "bag",
    imageUrl: "https://example.com/images/dog_food.jpg",
    inStock: true,
    quantity: 35,
    category: "Pet Care",
    ratings: 4.7,
    reviews: 220,
    weight: "2kg",
    expiryDate: "2026-09-15",
    tags: ["pet nutrition", "protein", "essential vitamins"],
  },
  {
    name: "Vitamin C Serum",
    description: "Brightening vitamin C serum for healthy skin.",
    price: 14.99,
    originalPrice: 19.99,
    discount: "25%",
    unit: "bottle",
    imageUrl: "https://example.com/images/vitamin_c_serum.jpg",
    inStock: true,
    quantity: 20,
    category: "Beauty & Health",
    ratings: 4.8,
    reviews: 300,
    weight: "30ml",
    expiryDate: "2026-04-30",
    tags: ["anti-aging", "glow", "hydration"],
  },
  {
    name: "Strawberry Jam",
    description: "Delicious strawberry jam with no preservatives.",
    price: 3.99,
    originalPrice: 5.29,
    discount: "24%",
    unit: "jar",
    imageUrl: "https://example.com/images/strawberry_jam.jpg",
    inStock: true,
    quantity: 50,
    category: "Jam & Jelly",
    ratings: 4.6,
    reviews: 120,
    weight: "250g",
    expiryDate: "2026-10-25",
    tags: ["fruity", "no added sugar", "spread"],
  },
  {
    name: "Fresh Cow Milk",
    description: "Pure cow milk, rich in calcium and protein.",
    price: 1.99,
    originalPrice: 2.50,
    discount: "20%",
    unit: "litre",
    imageUrl: "https://example.com/images/milk.jpg",
    inStock: true,
    quantity: 100,
    category: "Milk & Dairy",
    ratings: 4.7,
    reviews: 400,
    weight: "1L",
    expiryDate: "2025-07-05",
    tags: ["organic", "protein-rich", "farm fresh"],
  },
];

const seedProducts = async () => {
  try {
    await connectToDB();
    await Product.deleteMany(); // Clear old data
    await Product.insertMany(dummyProducts);
    console.log("✅ Dummy products inserted successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error inserting products:", error);
    mongoose.connection.close();
  }
};

seedProducts();
