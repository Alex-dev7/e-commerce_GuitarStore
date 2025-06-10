"use client"
import { useState } from "react";


function Categories() {
    const [selectedFilter, setSelectedFilter] = useState("All")

    return (
        <div className="tracking-wider">
            <p className="bg-[#f0f0f099] py-2 px-1 text-lg font-semibold text-gray-700  mb-3">
                Categories
            </p>
            <ul className="ml-2 space-y-2 text-lg">
                <li className={`hover:bg-[#f0f0f099] py-1 px-2 text-gray-600 cursor-pointer transition-all duration-300 rounded-sm ${selectedFilter === "All" && 'text-black font-bold bg-[#e8e8e8] '}`} onClick={() => setSelectedFilter("All")}>All</li>
                <li className={`hover:bg-[#f0f0f099] py-1 px-2 text-gray-600 cursor-pointer transition-all duration-300 rounded-sm ${selectedFilter === "Electrics" && 'text-black font-bold bg-[#f0f0f099]   '}`} onClick={() => setSelectedFilter("Electrics")}>Electrics</li>
                <li className={`hover:bg-[#f0f0f099] py-1 px-2 text-gray-600 cursor-pointer transition-all duration-300 rounded-sm ${selectedFilter === "Acoustics" && 'text-black font-bold bg-[#f0f0f099]   '}`} onClick={() => setSelectedFilter("Acoustics")}>Acoustics</li>
                <li className={`hover:bg-[#f0f0f099] py-1 px-2 text-gray-600 cursor-pointer transition-all duration-300 rounded-sm ${selectedFilter === "Pedals" && 'text-black font-bold bg-[#f0f0f099]   '}`} onClick={() => setSelectedFilter("Pedals")}>Pedals</li>
                <li className={`hover:bg-[#f0f0f099] py-1 px-2 text-gray-600 cursor-pointer transition-all duration-300 rounded-sm ${selectedFilter === "AMPS" && 'text-black font-bold bg-[#f0f0f099]   '}`} onClick={() => setSelectedFilter("AMPS")}>AMPS</li>
            </ul>
        </div>
    );
}

export default Categories;