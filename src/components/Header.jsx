/** @format */

import React from "react";
import { FaPhone } from "react-icons/fa6";

const Header = ({ scrollValue }) => {
    return (
        <header
            className={`w-full bg-black z-30 duration-300 transition-all h-[100px] flex items-center sticky top-0 ${
                scrollValue > 80 ? "bg-opacity-100" : "bg-opacity-50"
            }`}
        >
            <div className='max-w-7xl mx-auto flex items-center justify-between lg:px-0 px-6 flex-1'>
                <h1 className='text-gray-100 font-bold text-3xl'>
                    Goma Upendo
                </h1>
                <div className='hidden lg:flex text-white items-center gap-4'>
                    <FaPhone size={25} />
                    <div className='flex flex-col gap-1'>
                        <span className='font-bold text-lg'>
                            +243 977-550-000
                        </span>
                        <span className='font-bold text-lg'>
                            +243 975-142-464
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
