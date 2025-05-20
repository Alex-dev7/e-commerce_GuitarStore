"use client"

import { useState } from 'react';

const countries = [
  { name: 'USA', emoji: '🇺🇸' },
  { name: 'Canada', emoji: '🇨🇦' },
  { name: 'Mexico', emoji: '🇲🇽' },
  { name: 'Great Britain', emoji: '🇬🇧' },
  { name: 'France', emoji: '🇫🇷' },
]


function ShipTo() {
    const [selectedCountry, setSelectedCountry] = useState(countries[0])

    return (
        <div className="relative text-[15px] group cursor-pointer">
          <div className="px-3 py-1">
            Shipping to: {selectedCountry.emoji} {selectedCountry.name}
          </div>
    
          {/* Dropdown menu */}
          <div className="absolute left-[100px] -top-[200px] text-black mt-1 hidden group-hover:block bg-white border border-gray-200 rounded shadow-md z-10">
            {countries.map((country) => (
              <div
                key={country.name}
                onClick={() => setSelectedCountry(country)}
                className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
              >
                {country.emoji} {country.name}
              </div>
            ))}
          </div>
        </div>
      )
}

export default ShipTo