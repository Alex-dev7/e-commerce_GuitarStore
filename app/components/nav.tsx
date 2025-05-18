import Link from "next/link"
import { Suspense } from "react"
import CartButton from "./ui/cart-button"
import MenuButton from "./ui/menu-button"


export default async function Nav() {

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white ">
        <nav className="flex items-center justify-between w-full max-w-[1500px] h-full mx-auto p-2">
          <div className="flex-1 basis-0 h-full flex items-center">
            <MenuButton />
          </div>

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus  uppercase"
              data-testid="nav-store-link"
            >
              Guitar Store
            </Link>
          </div>

          <div className="flex items-center place-content-end gap-x-6 h-full flex-1 basis-0">
            {/* <div className="small:flex  place-content-center gap-x-6 h-full">
              <Link
                className=""
                href="/faq"
              >
                FAQ
              </Link>
            </div> */}
            <div className="small:flex  place-content-center gap-x-6 h-full">
              <span
                className=""
              >
                Search
              </span>
            </div>
            <div className="small:flex place-content-center gap-x-6 h-full">
              <Link
                className=""
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
      </header>
    </div>
  )
}