import React from "react";
import caoliflower1 from "../../components/assets/caoliflower1.jpg";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Link from "next/link";
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
    <div className="w-full">
      <section className="mx-auto max-w-7xl p-3 lg:p-8">
        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          Your Shopping Cart
        </h1>
        <form className="mt-12">
          <div className="">
            <div className="rounded border bg-gray-50 px-4 py-2">
              <div className="flex items-center justify-between gap-2 py-2">
                <div>
                  <p className="font-semibold text-gray-900">Your Total</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Shipping will be calculated in the next step
                  </p>
                </div>
                <div className="font-medium text-gray-900">Total : {29}</div>
                <div className="font-medium text-gray-900">${36}</div>
              </div>
            </div>
            <div className="mt-10 text-center">
            <Link className="inline-block max-w-full rounded border border-transparent bg-green-500 px-6 py-3 text-center font-medium text-white hover:bg-green-600" href="/checkout">
            Proceed
                  </Link>
             
            </div>
          </div>
          <ul className="mt-12 divide-y divide-gray-200 border-b border-t border-gray-200">
            {products?.map((product) => {
              return (
                <li className="flex py-4" key={product?.productId}>
                  <div className="aspect-square h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border bg-gray-50 sm:h-32 sm:w-32">
                    <Image
                      src={caoliflower1}
                      alt={"caoliflower1"}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className=" flex flex-1 flex-col justify-between pl-2 gap-2">
                    <div className=" flex flex-col justify-between gap-4">
                      <div>
                        <h2 className="font-semibold text-green-700">
                          {product?.name}
                        </h2>

                        <span className="mt-1 text-sm text-gray-500">
                          {product?.description}
                        </span>
                      </div>
                      <span className="text-sm font-bold">
                        $price {product?.price}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden p-1">
                          <FaMinus className="text-gray-700 cursor-pointer" />
                          <p className="w-12 text-center font-semibold">1</p>
                          <FaPlus className="text-gray-700 cursor-pointer" />
                        </div>
                        <button className="w-9 h-9 flex items-center justify-center border rounded  hover:bg-red-500 hover:text-white transition">
                        <FaRegTrashCan />
                      </button>
                      </div>
                    <div className="flex flex-col sm:flex-row  justify-between items-start gap-1">
                     
                     
                    </div>
                  </div>
                </li>
              );
            })}

            {/* <!-- Add more list items here --> */}
          </ul>
        </form>
      </section>
    </div>
  );
};

export default Page;
