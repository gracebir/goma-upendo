/** @format */

import React from "react";

const Contact = () => {
    return (
        <div className='flex items-center justify-center p-6'>
            <div
                style={{
                    backgroundImage: `url('../src/assets/contact.webp')`,
                }}
                className='w-[237px] bg-no-repeat cursor-pointer bg-cover hover:scale-95 duration-300 h-[237px] lg:w-[325px] lg:h-[325px] rounded-lg'
            ></div>
        </div>
    );
};

export default Contact;
