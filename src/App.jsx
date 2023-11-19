/** @format */

import BottomHeadear from "./components/BottomHeadear";
import Contact from "./components/Contact";
import GaleryImage from "./components/GaleryImage";
import Header from "./components/Header";

function App() {
    return (
        <div className='font-poppins text-white bg-[#121212] min-h-screen'>
            <Header />
            <BottomHeadear />
            <div className='max-w-7xl mx-auto'>
                <Contact />
                <GaleryImage />
            </div>
        </div>
    );
}

export default App;
