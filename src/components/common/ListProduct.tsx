'use client'
import Image from "next/image";
import React from "react";
import caoliflower1 from "../../components/assets/caoliflower1.jpg";
import { useRouter } from "next/navigation";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // Optional, as not all products have it
  unit: string;
  imageUrl: string;
  inStock: boolean;
  quantity: number;
  discount?: string; // Optional, as not all products have it
};
const ListProduct = ({ products }: {products:Product[]}) => {
  console.log('products$$$$',{products})
  const router = useRouter();
  const handleNavigation = (id: string) => {
    console.log(id)
    router.push(`/product/${id}`)
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {products?.map((product: Product) => (
        <div
          key={product?._id}
          className="bg-white rounded-md shadow-sm p-4"
        >
          <div className="relative">
            <span className="absolute  left-2 bg-gray-100 text-green-500 text-xs rounded-full px-2 py-0.5">
              Stock:{" "}
              <span className="text-orange-700 font-bold">
                {product.quantity}
              </span>
            </span>
            {product?.discount && (
              <span className="absolute  right-2 bg-orange-500 text-white text-xs rounded px-2 py-0.5">
                {product?.discount} Off
              </span>
            )}
            <div className="h-40 flex justify-center items-center ">
              <Image
                src={caoliflower1}
                alt={product.name}
                width={150}
                height={150}
                // className="object-contain"
                className=" cursor-pointer object-contain rounded transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-semibold cursor-pointer text-gray-800 hover:text-green-500"
              onClick={()=> handleNavigation(product?._id)}
            >
              {product?.name}
            </h3>
            <div className="mt-1 flex items-center justify-between">
              <div className="text-lg font-bold text-gray-800">
                ${product?.price.toFixed(2)}
                {product?.originalPrice && (
                  <del className="text-sm text-gray-400 ml-2">
                    ${product?.originalPrice.toFixed(2)}
                  </del>
                )}
              </div>
              {/* <button
                className="w-9 h-9 flex items-center justify-center border rounded text-emerald-500 hover:bg-emerald-500 hover:text-white transition"
                onClick={handleNavigation}
              >
                <MdOutlineAddShoppingCart />
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
