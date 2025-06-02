import Link from "next/link"
import MenuButton from "./ui/menu-button"


export default async function Nav() {

  return (
    <div className=" top-0 inset-x-0 z-50 group">
      <div className="relative h-24 mx-auto duration-200 bg-linear-to-r from-[#012020] to-[#076565] ">
        <nav className="flex items-center justify-between text-white tracking-wider w-full max-w-[1500px] h-full mx-auto p-2">
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
                  Cart (0)
                </Link>                
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}