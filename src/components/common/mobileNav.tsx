import React from "react";
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";

const MobileNav = () => {
  return (
    <div className="flex w-full text-2xl text-white h-[10vh] font-semibold items-center justify-around bg-green-400">
      <HiOutlineHome className="cursor-pointer" />
      <IoNotificationsOutline className="cursor-pointer" />
      <FiShoppingCart className="cursor-pointer" />
      <LuUser className="cursor-pointer" />
    </div>
  );
};

export default MobileNav;
