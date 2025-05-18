import Link from "next/link";


export default function MenuWindow({onClose}) {
  return (
    <div className="absolute top-4 left-4 w-[450px] h-[96dvh] flex flex-col justify-between p-6 rounded-xl bg-gray-300">
        <div className="w-full relative">
            <button className="absolute right-2 text-2xl place-self-end cursor-pointer" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15 15 5M5 5l10 10"></path></svg>            
            </button> 

        </div>
        
        <div className="flex flex-col gap-3 text-2xl font-bold text-gray-100">
            <Link href="#" className="">All</Link>
            <Link href="#" className="">Electric Guitars</Link>
            <Link href="#" className="">Accoustic</Link>
            <Link href="#" className="">Parts</Link>
            <Link href="#" className="">Accessories</Link>
            <Link href="#" className="">FAQ</Link>
        </div>
        <div className="text-[15px]">
            Shipping to: {"USA"}
        </div>
    </div>
  )
}

