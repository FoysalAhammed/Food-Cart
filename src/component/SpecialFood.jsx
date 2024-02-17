import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const SpecialFood = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
        <div className="container mx-auto py-[2vh]">
            <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">Special <span className="text-[#f54748]">Foods</span></div>
            <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <div className="food-card bg-red-500/10  rounded-xl flex flex-col cursor-pointer items-center p-5">
                    <div className="relative mb-3">
                        <a href="/">
                            <img src="https://res.cloudinary.com/dvge54a7y/image/upload/v1705847060/yczhzjadnyiauau3ioc4.png" className="h-64" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                  <FaHeart className=" absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "/>
                                </button>           
                            </div>
                            <div className=" absolute bottom-2 right-2">
                                <button className=" shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$16</div>
                                </button>
                            </div>
                        </a>
                    </div>
                    <div className="flex gap-4 mb-3 items-center">
                        <p className="text-lg text-center font-bold text-[#f54748]">Ice-cream </p>
                        <div className="flex text-sm space-x-2 cursor-pointer">
                            <span className=" font-normal text-[#fdc55e]">4.3</span>
                            <FaStar className="text-[#fdc55e]" height={16} width={16}/>
                        </div>
                    </div>
                    <button className=" bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">add to cart</button>
                </div>
                <div className="food-card bg-red-500/10  rounded-xl flex flex-col cursor-pointer items-center p-5">
                    <div className="relative mb-3">
                        <a href="/">
                            <img src="https://res.cloudinary.com/dvge54a7y/image/upload/v1704460279/mg7praetrrklgyisisaw.png" className="h-64" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                  <FaHeart className=" absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "/>
                                </button>           
                            </div>
                            <div className=" absolute bottom-2 right-2">
                                <button className=" shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$10</div>
                                </button>
                            </div>
                        </a>
                    </div>
                    <div className="flex gap-4 mb-3 items-center">
                        <p className="text-lg text-center font-bold text-[#f54748]">Peps</p>
                        <div className="flex text-sm space-x-2 cursor-pointer">
                            <span className=" font-normal text-[#fdc55e]">4.3</span>
                            <FaStar className="text-[#fdc55e]" height={16} width={16}/>
                        </div>
                    </div>
                    <button className=" bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">add to cart</button>
                </div>
                <div className="food-card bg-red-500/10  rounded-xl flex flex-col cursor-pointer items-center p-5">
                    <div className="relative mb-3">
                        <a href="/">
                            <img src="https://res.cloudinary.com/dvge54a7y/image/upload/v1704432710/y2ymhgnhpqsab5ivonzo.png" className="h-64" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                  <FaHeart className=" absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "/>
                                </button>           
                            </div>
                            <div className=" absolute bottom-2 right-2">
                                <button className=" shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$14</div>
                                </button>
                            </div>
                        </a>
                    </div>
                    <div className="flex gap-4 mb-3 items-center">
                        <p className="text-lg text-center font-bold text-[#f54748]">Red Bull</p>
                        <div className="flex text-sm space-x-2 cursor-pointer">
                            <span className=" font-normal text-[#fdc55e]">4.3</span>
                            <FaStar className="text-[#fdc55e]" height={16} width={16}/>
                        </div>
                    </div>
                    <button className=" bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">add to cart</button>
                </div>
                <div className="food-card bg-red-500/10  rounded-xl flex flex-col cursor-pointer items-center p-5">
                    <div className="relative mb-3">
                        <a href="/">
                            <img src="https://res.cloudinary.com/dvge54a7y/image/upload/v1704382802/uid3iuzhgs47e9yz91ep.png" className="h-64" alt="" />
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                                  <FaHeart className=" absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "/>
                                </button>           
                            </div>
                            <div className=" absolute bottom-2 right-2">
                                <button className=" shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$199</div>
                                </button>
                            </div>
                        </a>
                    </div>
                    <div className="flex gap-4 mb-3 items-center">
                        <p className="text-lg text-center font-bold text-[#f54748]">Blackberries</p>
                        <div className="flex text-sm space-x-2 cursor-pointer">
                            <span className=" font-normal text-[#fdc55e]">4.3</span>
                            <FaStar className="text-[#fdc55e]" height={16} width={16}/>
                        </div>
                    </div>
                    <button className=" bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">add to cart</button>
                </div>
             

            </div>
        </div>
    </div>
  )
}

export default SpecialFood