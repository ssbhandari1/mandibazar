import React from "react";
import caoliflower1 from "../../../components/assets/caoliflower1.jpg";
import Image from "next/image";
import ListProduct from "@/components/common/ListProduct";

const Popular = () => {
  const products = [
    {
      productId: "prod001",
      name: "Fresh Apples",
      description: "Crisp and sweet apples, perfect for a healthy snack.",
      price: 2.99,
      originalPrice: 168.23,
      unit: "kg",
      imageUrl: "https://example.com/images/apples.jpg",
      inStock: true,
      quantity: 100,
      discount: "10.84%",
    },
    {
      productId: "prod002",
      name: "Organic Carrots",
      description: "Fresh organic carrots, rich in vitamin A.",
      price: 1.99,
      unit: "kg",
      imageUrl: "https://example.com/images/carrots.jpg",
      inStock: true,
      quantity: 50,
    },
    {
      productId: "prod003",
      name: "Organic Carrots",
      description: "Fresh organic carrots, rich in vitamin A.",
      price: 1.99,
      unit: "kg",
      imageUrl: "https://example.com/images/carrots.jpg",
      inStock: true,
      quantity: 50,
    },
    {
      productId: "prod004",
      name: "Organic Carrots",
      description: "Fresh organic carrots, rich in vitamin A.",
      price: 1.99,
      originalPrice: 168.23,
      unit: "kg",
      imageUrl: "https://example.com/images/carrots.jpg",
      inStock: true,
      quantity: 50,
      discount: "10.84%",
    },
    {
      productId: "prod005",
      name: "Organic Carrots",
      description: "Fresh organic carrots, rich in vitamin A.",
      price: 1.99,
      unit: "kg",
      imageUrl: "https://example.com/images/carrots.jpg",
      inStock: true,
      quantity: 50,
    },
    {
      productId: "prod001",
      name: "Fresh Apples",
      description: "Crisp and sweet apples, perfect for a healthy snack.",
      price: 2.99,
      unit: "kg",
      imageUrl: "https://example.com/images/apples.jpg",
      inStock: true,
      quantity: 100,
    },
    {
      productId: "prod002",
      name: "Organic Carrots",
      description: "Fresh organic carrots, rich in vitamin A.",
      price: 1.99,
      originalPrice: 168.23,
      unit: "kg",
      imageUrl: "https://example.com/images/carrots.jpg",
      inStock: true,
      quantity: 50,
      discount: "10.84%",
    },
    {
      productId: "prod003",
      name: "Organic Carrots",
      description: "Fresh organic carrots, rich in vitamin A.",
      price: 1.99,
      unit: "kg",
      imageUrl: "https://example.com/images/carrots.jpg",
      inStock: true,
      quantity: 50,
    },
  ];
  return (
    <div className="w-full ">
    <div className="bg-gray-100 py-10 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-serif font-semibold">
            Popular Products for Daily Shopping
          </h2>
          <p className="text-gray-600">
            See all our popular products this week. You can choose your daily
            needs from this list and get special offers with free shipping.
          </p>
        </div>
        <ListProduct products={products}/>
      </div>
    </div>
  </div>
  );
};

export default Popular;
