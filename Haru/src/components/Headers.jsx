import React from 'react';
import Search from './Search';

const Headers = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
            <div className="flex items-center space-x-2 text-[#fff5d9]">
                <h1 className="font-bold text-[#FFF5D9] pr-4 flex items-center">
                    <img src="../public/img/icon.png" className="w-10 h-10 mr-2" alt="icon" />
                    Comet
                </h1>
                <button className="bg-[#1B1B1F] text-white px-4 py-2 rounded-2xl border border-[#FFF5D9] border-r-0 border-t-0 bprder-b-2 border-l-0 hover:bg-white hover:text-black shadow-2xl shadow-[#FFF5D9]">Upgrade</button>
                <nav className="flex space-x-4">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline text-[#868173]">Discover</a>
                </nav>
            </div>


            <Search/>



            <div className="flex items-center space-x-4">
                <img src="../public/img/plus.png" alt="Plus" className="h-4 w-4" />
                <img src="../public/img/arrow.png" alt="Arrow" className="h-4 w-4" />
                <img src="../public/img/3.png" alt="Icon 3" className="h-4 w-4" />
                <img src="../public/img/bell.png" alt="Bell" className="h-4 w-4" />
                <img src="../public/img/round.png" alt="Round Icon" className="h-10 w-10" />
                <img src="../public/img/down.png" alt="Down Icon" className="h-2 w-[10px]" />
            </div>
        </nav>
    );
};

export default Headers;
