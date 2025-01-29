'use client'
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const Logo = ({ textCLR, handleNavigate }: { textCLR: string, handleNavigate: (route: string) => void; }) => {
    return (
        <div className={`flex gap-3 items-center cursor-pointer text-${textCLR}`} onClick={()=>handleNavigate('/')}>
            <FaShoppingBasket className="min-w-12 min-h-12" />
            <div className="grid grid-cols-1 gap-0">
                <span className="text-xl tracking-[.2rem] font-bold">MANDI</span>
                <span className="text-base tracking-[.3rem]">BAZAR</span>
            </div>
        </div>
    );
};

export default Logo;