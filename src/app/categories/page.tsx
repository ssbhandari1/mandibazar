import ListProduct from '@/components/common/ListProduct'
import Category from '@/pages/category'
import React from 'react'

const Page = () => {
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
        <div className='w-full'>
            <Category />
            <ListProduct products={products} />
        </div>
    )
}

export default Page