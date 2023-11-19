/** @format */

import React from "react";
import CardImage from "./CardImage";
import video from "../assets/video1.mp4";
import { gallery } from "../data";

const GaleryImage = () => {
    return (
        <div className='p-12 rounded-lg grid grid-cols-1 gap-8 justify-items-center lg:grid-cols-3 bg-secondary'>
            {gallery.map(({ id, isPic, img }) => (
                <CardImage key={id} img={img} isPic={isPic} />
            ))}
        </div>
    );
};

export default GaleryImage;
