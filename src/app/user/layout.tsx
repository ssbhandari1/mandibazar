"use client";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const sidebaarLink = [
    {
      id: "1",
      name: "DashBoard",
      icon: <MdOutlineDashboard />,
      route: "/user/dashboard",
    },
    {
      id: "2",
      name: "My Orders",
      icon: <RiListUnordered />,
      route: "/user/my-orders",
    },
    {
      id: "3",
      name: "My Account",
      icon: <LuUser />,
      route: "/user/my-profile",
    },
    {
      id: "4",
      name: "Update Profile",
      icon: <FiSettings />,
      route: "/user/update-profile",
    },
    {
      id: "5",
      name: "Change Password",
      icon: <IoDocumentTextOutline />,
      route: "/user/change-password",
    },
    { id: "6", name: "Logout", icon: <FiLock />, route: "/auth/login" },
  ];

  const handleNavigate = (route: string) => {
    router.push(`${route}`);
  };
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-around gap-14 p-2 lg:p-10 text-[0.9rem] bg-gray-100">
      <div className="bg-white p-4 w-full lg:w-auto sm:p-5 lg:p-8 rounded-md  lg:sticky top-32">
        {sidebaarLink?.map((link: any) => {
          return (
            <span
              key={link.id}
              className="p-2 my-2 flex font-serif items-center rounded-md cursor-pointer hover:bg-gray-50 w-full hover:text-emerald-600 gap-2"
              onClick={() => handleNavigate(link.route)}
            >
              {link.icon}
              {link.name}
            </span>
          );
        })}
      </div>

      <div className=" w-full bg-white flex-1 p-5">{children}</div>
    </div>
  );
};

export default Layout;
