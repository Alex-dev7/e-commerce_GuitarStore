"use client"
import { useState } from "react"
import MenuWindow from "../menu-window"

export default function MenuButton() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <button 
                className="relative transition-all cursor-pointer"
                aria-haspopup="true"
                aria-expanded={menu}
                aria-controls="menu-popup"
                onClick={() => setMenu(true)}
            >
                Menu
            </button>
            {menu && (
                <MenuWindow onClose={() => setMenu(false)}/>
            )}
        </>
    )        
}