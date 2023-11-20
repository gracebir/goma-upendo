/** @format */

import { useEffect, useState } from "react";
import BottomHeadear from "./components/BottomHeadear";
import Footer from "./components/Footer";
import GaleryImage from "./components/GaleryImage";
import Header from "./components/Header";

function App() {
    const [scrollValue, setScrollValue] = useState(0);
    useEffect(() => {
        // scroll behaviar
        window.addEventListener("scroll", () => {
            setScrollValue(window.pageYOffset);
        });
    }, [scrollValue]);
    return (
        <div className='font-poppins text-white bg-[#121212] min-h-screen'>
            <Header scrollValue={scrollValue} />
            <BottomHeadear scrollValue={scrollValue} />
            <div className='max-w-7xl mx-auto mt-8'>
                <GaleryImage />
            </div>
            <Footer />
        </div>
    );
}

export default App;
