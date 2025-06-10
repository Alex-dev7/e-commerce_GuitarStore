import Link from "next/link";
import ShipTo from "./ui/country-options";

type MenuWindowProps = {
  onClose: () => void;
};

export default function MenuWindow({onClose}: MenuWindowProps) {
  return (
    <div
        role="dialog"
        aria-modal="true"
        className="z-30 absolute top-4 left-4 w-[450px] h-[96dvh] flex flex-col justify-between p-6 rounded-xl  bg-[#5c8787]">
        <div className="w-full relative">
            <button className="absolute right-2 text-2xl place-self-end cursor-pointer border-1 border-cyan-900 rounded-full p-4 hover:border-white hover:rotate-180 transition-all" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15 15 5M5 5l10 10"></path></svg>            
            </button> 

        </div>
        
        <div className="flex flex-col gap-4 text-4xl font-bold text-gray-100 ">
            <Link href="/shop" onClick={onClose} className=" hover:underline">Shop</Link>
            <Link href="#" onClick={onClose} className=" hover:underline">About</Link>
            <Link href="#" onClick={onClose} className=" hover:underline">Contact</Link>
            <Link href="#" onClick={onClose} className=" hover:underline">FAQ</Link>
        </div>
        <ShipTo />
    </div>
  )
}

