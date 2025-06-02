"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import DetailsButton from "../ui/details-button"

const Scene = dynamic(() => import('./Scene'), {ssr: false})

function NewInventory() {
  return (
    <section className="w-screen min-h-screen">
      <div className="max-w-[500px] flex flex-col place-items-center gap-6 mx-auto">
        <h3 className="text-5xl font-semibold tracking-wide">
          New Exclusives
        </h3>
        <p className="text-center mt-6">
          Discover one-of-a-kind instruments and gear you won't find anywhere else. Shop limited-edition releases!
        </p>
        <Link href="#" className="w-[160px] text-center text-md font-semibold text-white bg-black py-4 rounded-4xl hover:bg-neutral-800">
            Shop Now
        </Link>
      </div>
      <div className="h-[700px] w-screen relative ">
        <Scene />
      </div>
    </section>
  )
}

export default NewInventory
