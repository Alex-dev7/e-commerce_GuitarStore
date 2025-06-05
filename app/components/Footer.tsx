"use client"
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaSpotify,
//   FaYoutube
// } from "react-icons/fa"
// import { PiXLogoFill } from "react-icons/pi"
// import { MdKeyboardArrowRight } from "react-icons/md"
import { useState } from "react"
import ShipTo from "./ui/country-options"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-neutral-700 ">
        {/* Left Section */}
        <div className="space-y-5 col-span-1 md:col-span-1">
          <h2 className="text-3xl font-extrabold text-black">GUITAR STORE</h2>
          <p className="text-lg font-semibold text-black">
            Subscribe to our Newsletter and stay updated.
          </p>
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden max-w-md">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="E-mail"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <button className="p-3 bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer">
                send
            </button>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-3 gap-4 col-span-3 place-items-center">
          <div>
            <h4 className="font-semibold text-black mb-2">Shop</h4>
            <ul className="space-y-1">
              <li>Electrics</li>
              <li>Acoustics</li>
              <li>Pedals</li>
              <li>Amps</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">Collaborations</h4>
            <ul className="space-y-1">
              <li className="hover:underline hover:cursor-pointer">Gibson</li>
              <li className="hover:underline hover:cursor-pointer">Fender</li>
              <li className="hover:underline hover:cursor-pointer">Yamaha</li>
              <li className="hover:underline hover:cursor-pointer">Ibanez</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-2">About</h4>
            <ul className="space-y-1">
              <li>Story</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t pt-6 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-neutral-600 gap-6">
        <div className="flex items-center gap-2">
          <ShipTo />
        </div>

        <div className="flex flex-wrap gap-2">
          <img src="svg/visa.svg" alt="Visa" className="h-10" />
          <img src="svg/mastercard.svg" alt="MasterCard" className="h-10" />
          <img src="svg/amex.svg" alt="Amex" className="h-10" />
          <img src="svg/paypal.svg" alt="PayPal" className="h-10" />
          <img src="svg/discover.svg" alt="Discover" className="h-10" />
        </div>
      </div>

      <div className="text-center text-neutral-400 text-xs pb-4">
      © 2025, Guitar Store. This is a demo website created exclusively to showcase my development skills.
      </div>
    </footer>
  )
}
