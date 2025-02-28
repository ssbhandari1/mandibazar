"use client";
import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import caoliflower1 from "../../../components/assets/caoliflower1.jpg";
import ListProduct from "@/components/common/ListProduct";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import useGetQuery from "@/components/hooks/useGetQuery";
import { GET_PRODUCT_URL } from "@/utils/constant";

const Page = () => {
  const router = useRouter();
  const { id } = useParams<any>()

  const { data, loading, error } = useGetQuery<any[]>(`${GET_PRODUCT_URL}/${id}`, "product");
  console.log("router@@@@", {id, data})
  const handleNavigation = () => {
    router.push('/add-to-cart')
  };
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
    <div className="w-full flex flex-col gap-14  mb-10">
      <div className="p-6 lg:p-12 rounded-lg flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="w-full  lg:w-4/12 mb-6 lg:mb-0">
          <Image
            src={caoliflower1}
            alt="ACI Pure Sugar"
            width={"200"}
            height={"200"}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex  flex-col md:flex-row lg:flex-row xl:flex-row pl-3 gap-2">
          <div className="w-5/5 sm:w-3/5  xl:pr-6 md:pr-6  md:w-2/3 mob-w-full">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                {data?.name}
              </h1>
              <p className="text-sm text-gray-500">
                SKU: <span className="font-bold">{data?._id}</span>
              </p>
              <span className="bg-green-100 text-green-500 px-2 py-1 rounded-full text-xs font-semibold">
                Stock: <span className="text-orange-700">206</span>
              </span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-gray-800 mb-6">$84.53</div>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-6">
              Spice mixes are blended spices or herbs. Blends such as chili
              powder, curry powder, herbes de Provence, garlic salt, and other
              seasoned salts are traditionally sold pre-made.
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden p-2">
                <FaMinus />
                <p className="w-12 text-center font-semibold">1</p>
                <FaPlus className="" />
              </div>
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
                onClick={() => handleNavigation()}>
                Add to Cart
              </button>
            </div>

            {/* Categories */}
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-800">
                Category:{" "}
                <span
                  className="text-teal-600 underline"
                >
                  Cooking Essentials
                </span>
              </p>
              <div className="mt-2 flex space-x-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                  aci salt
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                  spices-mixes
                </span>
              </div>
            </div>
          </div>

          {/* Extra Information */}
          <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12 bg-gray-200 p-2 rounded-sm">
            <ul className="mt-6 space-y-4 text-sm text-gray-500">
              <li>- Free shipping applies to all orders over €100.</li>
              <li>- Home Delivery within 1 Hour.</li>
              <li>- Cash on Delivery Available.</li>
              <li>- 7 Days money-back guarantee.</li>
              <li>- Guaranteed 100% organic from natural products.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6 lg:p-12">
        <div className=" mb-10">
          <h2 className="text-2xl font-serif font-semibold">
            Related Products
          </h2>
        </div>
        {/* <ListProduct products={products} /> */}
      </div>
    </div>
  );
};

export default Page;
