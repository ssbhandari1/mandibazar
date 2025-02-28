import CustomCarousel from '@/components/common/CustomCarousel'
import ListProduct from '@/components/common/ListProduct'
import { Button } from "@heroui/react"
import Image from 'next/image'
import React from 'react'
import caoliflower1 from '../../../components/assets/caoliflower1.jpg'
interface Params {
    params: {
        type?: string
    }

}

const Page = ({ params }: Params) => {
    const popularProduct = [
        {
            "productId": "prod001",
            "name": "Fresh Apples",
            "description": "Crisp and sweet apples, perfect for a healthy snack.",
            "price": 2.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/apples.jpg",
            "inStock": true,
            "quantity": 100
        },
        {
            "productId": "prod002",
            "name": "Organic Carrots",
            "description": "Fresh organic carrots, rich in vitamin A.",
            "price": 1.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/carrots.jpg",
            "inStock": true,
            "quantity": 50
        },
        {
            "productId": "prod003",
            "name": "Organic Carrots",
            "description": "Fresh organic carrots, rich in vitamin A.",
            "price": 1.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/carrots.jpg",
            "inStock": true,
            "quantity": 50
        },
        {
            "productId": "prod004",
            "name": "Organic Carrots",
            "description": "Fresh organic carrots, rich in vitamin A.",
            "price": 1.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/carrots.jpg",
            "inStock": true,
            "quantity": 50
        },
        {
            "productId": "prod005",
            "name": "Organic Carrots",
            "description": "Fresh organic carrots, rich in vitamin A.",
            "price": 1.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/carrots.jpg",
            "inStock": true,
            "quantity": 50
        },
        {
            "productId": "prod001",
            "name": "Fresh Apples",
            "description": "Crisp and sweet apples, perfect for a healthy snack.",
            "price": 2.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/apples.jpg",
            "inStock": true,
            "quantity": 100
        },
        {
            "productId": "prod002",
            "name": "Organic Carrots",
            "description": "Fresh organic carrots, rich in vitamin A.",
            "price": 1.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/carrots.jpg",
            "inStock": true,
            "quantity": 50
        },
        {
            "productId": "prod003",
            "name": "Organic Carrots",
            "description": "Fresh organic carrots, rich in vitamin A.",
            "price": 1.99,
            "unit": "kg",
            "imageUrl": "https://example.com/images/carrots.jpg",
            "inStock": true,
            "quantity": 50
        },

    ]
    console.log(params)
    return (
        <div className='w-full h-full flex justify-center mt-10 mb-10'>
            <div className='w-[90%]  flex flex-col gap-6'>
                <div className='w-full h-[30vh] grid grid-cols-3 p-2 gap-5'>
                    <div className='bg-red-300 rounded relative'>
                        <div className='absolute inset-0'>
                            <Image
                                alt="product"
                                loading="lazy"
                                className="w-full h-full rounded object-cover"
                                src={caoliflower1}
                            />
                        </div>
                        <div className='absolute flex flex-col items-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <h3 className='text-xl font-bold'>Taste of</h3>
                            <h1 className='text-2xl font-bold'>Fresh & Natural</h1>
                            <span className='text-md font-semibold'>Weekend Discount Offer</span>
                            <Button className='bg-green-400 text-white mt-8'>Shop Now</Button>
                        </div>
                    </div>
                    <div className='bg-red-300 rounded relative'>
                        <div className='absolute inset-0'>
                            <Image
                                alt="product"
                                loading="lazy"
                                className="w-full h-full rounded object-cover"
                                src={caoliflower1}
                            />
                        </div>
                        <div className='absolute flex flex-col items-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <h3 className='text-xl font-bold'>Taste of</h3>
                            <h1 className='text-2xl font-bold'>Fresh & Natural</h1>
                            <span className='text-md font-semibold'>Weekend Discount Offer</span>
                            <Button className='bg-green-400 text-white mt-8'>Shop Now</Button>
                        </div>
                    </div>
                    <div className='bg-red-300 rounded relative'>
                        <div className='absolute inset-0'>
                            <Image
                                alt="product"
                                loading="lazy"
                                className="w-full h-full  rounded object-cover"
                                src={caoliflower1}
                            />
                        </div>
                        <div className='absolute flex flex-col items-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <h3 className='text-xl font-bold'>Taste of</h3>
                            <h1 className='text-2xl font-bold'>Fresh & Natural</h1>
                            <span className='text-md font-semibold'>Weekend Discount Offer</span>
                            <Button className='bg-green-400 text-white mt-8'>Shop Now</Button>
                        </div>
                    </div>
                </div>



                <div className='w-full h-[12vh]'>
                    <CustomCarousel />
                </div>
                <div className='w-full h-[5vh] bg-gray-500 flex items-center justify-between px-3'>
                    <span>Total 53 items Found</span>
                    <span>short by </span>
                </div>
                <div className="w-full px-12 ">
                    <ListProduct products={popularProduct} />

                </div>
            </div>
        </div>
    )
}

export default Page