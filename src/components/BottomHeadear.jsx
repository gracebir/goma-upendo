/** @format */

import React, { useEffect, useState } from "react";

const BottomHeadear = ({ scrollValue }) => {
    console.log("scoll");
    return (
        <div
            className={`bg-black bg-opacity-50 duration-300 transition-all px-6 z-10 lg:px-0 ${
                scrollValue > 80 ? "sticky top-[80px]" : "static"
            }`}
        >
            <div className='max-w-7xl mx-auto py-6'>
                <div className='flex flex-col gap-3 max-w-xl'>
                    <h1 className='lg:text-3xl text-xl'>
                        Ngufu yetu niku saidiyana
                    </h1>
                    {scrollValue < 81 && (
                        <p
                            className={`text-gray-300 duration-300 transition-all`}
                        >
                            Nous les jeunes volontaires de Goma,nous lançons un
                            appel de fonds pour aider les déplacés de
                            kANYARUCHINYA à l'Est de la République démocratique
                            du Congo
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BottomHeadear;
