"use client"
import { useState } from "react";
import Categories from "./Categories";
import ColorOptions from "./ColorOptions";
import PriceRange from "./PriceRange";

function SidePanel() {
    const [selectedFilter, setSelectedFilter] = useState("latest");

    return (
        <section className="w-[350px] h-screen bg-white flex flex-col space-y-15 p-4">
            <Categories />
            <fieldset className="tracking-wider space-y-8">
                <h4 className="bg-[#f0f0f099] py-2 px-1 font-semibold text-gray-500  mb-3">Sort by</h4>
                <ul className="space-y-1 text-gray-500">
                    <li
                        className={`flex items-center gap-2 cursor-pointer ${selectedFilter === 'latest' && 'text-black'}`}
                        onClick={() => setSelectedFilter("latest")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <circle cx="10" cy="10" r="2" fill={`${selectedFilter === 'latest' ? 'black' : 'transparent'}`} />
                        </svg>
                        Latest Arrivals
                    </li>
                    <li
                        className={`flex items-center gap-2 cursor-pointer ${selectedFilter === 'lowToHigh' && 'text-black'}`}
                        onClick={() => setSelectedFilter("lowToHigh")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <circle cx="10" cy="10" r="2" fill={`${selectedFilter === 'lowToHigh' ? 'black' : 'transparent'}`}  />
                        </svg>
                        Price: Low {"->"} High
                    </li>
                    <li
                        className={`flex items-center gap-2 cursor-pointer ${selectedFilter === 'highToLow' && 'text-black'}`}
                        onClick={() => setSelectedFilter("highToLow")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <circle cx="10" cy="10" r="2" fill={`${selectedFilter === 'highToLow' ? 'black' : 'transparent'}`} />
                        </svg>
                        Price: High {"->"} Low
                    </li>
                    <li
                        className={`flex items-center gap-2 cursor-pointer ${selectedFilter === 'used' && 'text-black'}`}
                        onClick={() => setSelectedFilter("used")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <circle cx="10" cy="10" r="2" fill={`${selectedFilter === 'used' ? 'black' : 'transparent'}`} />
                        </svg>
                        Used & Refurbished
                    </li>
                </ul>
                <ColorOptions />
                <PriceRange />
            </fieldset>
            
        </section>
    );
}

export default SidePanel;
