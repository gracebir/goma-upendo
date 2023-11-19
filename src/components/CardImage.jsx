/** @format */

import React from "react";

const CardImage = ({ id, img, isPic }) => {
    return (
        <div>
            {isPic ? (
                <div className='rounded-lg hover:translate-y-2 duration-300 w-[325px] h-[325px] shadow-lg'>
                    <img
                        className='w-full h-full rounded-lg'
                        src={img}
                        alt={`pic-${id}`}
                    />
                </div>
            ) : (
                <video
                    video
                    width='750'
                    height='500'
                    controls
                    className='hover:translate-y-2 duration-300 shadow-lg rounded-lg w-[325px] h-[325px]'
                >
                    <source className='rounded-lg' src={img} type='video/mp4' />
                </video>
            )}
        </div>
    );
};

export default CardImage;
