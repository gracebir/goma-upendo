/** @format */

import React from "react";
import logo from "../assets/airtel-logo.png";

const Footer = () => {
    return (
        <footer className='mt-8 bg-black'>
            <div className='max-w-7xl mx-auto text-white py-16 flex flex-col lg:items-start items-center gap-14 lg:gap-4 lg:flex-row justify-between'>
                <div>
                    <h2 className='text-3xl font-bold'>Goma Upendo</h2>
                    <span>Ngufu yetu niku saidiyana</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='text-center text-xl max-w-xs'>
                            Appel de fonds aux déplacés de Kanyaruchinya (Goma)
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex flex-col items-center'>
                            <img
                                src={logo}
                                className='w-[111px] h-[29px]'
                                alt=''
                            />
                            <span className='text-[#e40000] text-base'>
                                money
                            </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='font-bold text-lg lg:text-xl'>
                                +243 977-550-000
                            </span>
                            <span className='font-bold text-lg lg:text-xl'>
                                +243 975-142-464
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
