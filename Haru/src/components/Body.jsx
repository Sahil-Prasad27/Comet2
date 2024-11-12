import React from 'react'

const Body = () => {
    return (
        <>
            <div className="flex justify-center my-6 ml-8">
                <button className="bg-black text-white text-sm px-4 py-2 rounded-full border-t-0 border-r-0 border-l-0 border-b border-[#FFF5D9]">For You</button>
                <button className="bg-black text-white px-4 py-2 text-sm rounded-full ml-2 ">Following</button>


            </div>
            <div className="flex flex-wrap gap-4 ml-9">
                <div className="flex flex-col items-center">
                    <img src="../public/img/mobile.jpg" alt="Image 1" className="w-[236.06px] h-[299.46px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/2.jpg" alt="Image 2" className="w-[235.76px] h-[248.33px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/32.png" alt="Image 3" className="w-[236.06px] h-[299.46px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/4.jpg" alt="Image 4" className="w-[186.72px] h-[236.87px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/5.jpg" alt="Image 5" className="w-[236.06px] h-[299.46px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/6.png" alt="Image 6" className="w-[236.06px] h-[299.46px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/7.png" alt="Image 6" className="w-[236.06px] h-[299.46px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/8.png" alt="Image 6" className="w-[236.06px] h-[299.46px]" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/9.png" alt="Image 9" className="w-[187px] h-[161.47px]" />
                    <img src="../public/img/10.png" alt="Image 10" className="w-[187px] h-[140.01px] pt-2" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="../public/img/11.png" alt="Image 11" className="w-[236.06px] h-[299.46px]" />
                </div>
            </div>
        </>
    )
}

export default Body