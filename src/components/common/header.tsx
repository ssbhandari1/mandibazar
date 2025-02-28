"use client";
import React from "react";
import Logo from "./logo";
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const handleNavigate = (route: string) => {
    router.push(`${route}`);
  };
  return (
    <div className="flex w-full flex-col sticky top-0 z-[999]">
      <div className="w-full bg-green-400 h-[10vh] flex items-center justify-around px-10  text-white">
        <Logo textCLR="white hidden lg:flex" handleNavigate={handleNavigate} />
        <div className="w-full lg:w-[60%] text-black">
          <input
            type="text"
            className="w-full p-2 rounded"
            placeholder="Search product"
          />
        </div>
        <div className="hidden lg:flex gap-5 text-2xl">
          <IoNotificationsOutline className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
          <LuUser
            className="cursor-pointer"
            onClick={() => handleNavigate("/user/dashboard")}
          />
        </div>
      </div>
      <div className="bg-gray-50 h-[5vh] w-full hidden lg:flex justify-between items-center px-14">
        <div className="flex gap-5 text-[0.8rem]">
          <span
            className="cursor-pointer hover:text-green-600"
            onClick={() => handleNavigate("/categories")}
          >
            Categories
          </span>
          <span
            className="cursor-pointer  hover:text-green-600"
            onClick={() => handleNavigate("/about-us")}
          >
            About Us
          </span>
          <span
            className="cursor-pointer  hover:text-green-600"
            onClick={() => handleNavigate("/contact-us")}
          >
            Contact Us
          </span>
          <span
            className="cursor-pointer  hover:text-green-600"
            onClick={() => handleNavigate("/contact-us")}
          >
            Pages
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
