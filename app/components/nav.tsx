'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link"
import MenuButton from "./ui/menu-button"



export default  function Nav() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className=" top-0 inset-x-0 z-50 ">
      <div className={` h-20 mx-auto duration-200 bg-linear-to-r ${pathname !== '/' ? ' bg-[#ddddddb0] backdrop-blur-sm fixed left-0 top-0 w-full' : 'from-[#012020] to-[#076565] relative'} `}>
        <nav className={`flex items-center justify-between ${pathname !== '/' ? 'text-black' : 'text-white'} tracking-wider w-full max-w-[1500px] h-full mx-auto p-2`}>
          <div className="flex-1 basis-0 h-full flex items-center transition-all">
            <MenuButton />
          </div>

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="text-2xl tracking-widest font-semibold"
              data-testid="nav-store-link"
            >
              GUITAR STORE
            </Link>
          </div>

          <div className="flex items-center place-content-end text-md gap-x-6 h-full flex-1 basis-0">
            <div className="small:flex  place-content-center gap-x-6 h-full">
              <span
                className="hover:underline cursor-pointer"
              >
                Search
              </span>
            </div>
            <div className="small:flex place-content-center gap-x-6 h-full ">
              <Link
                className="hover:underline"
                href="/account"
              >
                Account
              </Link>
            </div>
            <div>
                <Link
                  className=" flex gap-2 items-center h-full"
                  href="/cart"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> (0)
                </Link>                
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}