import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <div className="w-full h-[95dvh] flex bg-linear-to-r from-[#294347] to-[#396f79]" >
        <header className="w-[90dvw] h-[78dvh] rounded-2xl overflow-hidden mx-auto">
            <Image priority={true} src={'/images/headerImg.jpg'} width={1800} height={800} alt="" className="object-cover h-full w-full"/>
            <div className="absolute flex flex-col gap-5 top-[41%] left-40">
                <h3 className="text-white text-lg font-semibold">New & Used</h3>
                <h1 className="text-white text-5xl font-extrabold">
                    FIND YOUR FIRST <br/> GUITAR <span className=" text-cyan-700">HERE</span>
                </h1>
                <Link href="#" className="w-[160px] text-center text-md font-semibold text-black bg-white py-4 rounded-4xl hover:bg-neutral-300">
                    Shop Now
                </Link>
            </div>
        </header>        
    </div>
  )
}

export default Header