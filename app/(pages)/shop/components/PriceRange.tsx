"use client";
import { useState } from "react";

function PriceRange() {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(3000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className="space-y-4">
      <h4 className="bg-[#f0f0f099] py-2 px-1 font-semibold text-gray-500  mb-3">Price Range</h4>

      <div className="flex justify-between text-sm text-gray-600">
        <span>min ${minPrice}</span>
        <span>max ${maxPrice}</span>
      </div>

      <div className="relative h-10 flex flex-col gap-2">
        <input
          type="range"
          min="20"
          max="3000"
          value={minPrice}
          onChange={handleMinChange}
          className="w-full cursor-pointer"
        />
        <input
          type="range"
          min="20"
          max="3000"
          value={maxPrice}
          onChange={handleMaxChange}
          className="w-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default PriceRange;
