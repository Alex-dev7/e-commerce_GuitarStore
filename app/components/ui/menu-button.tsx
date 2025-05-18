"use client"
import { useState } from "react"
import MenuWindow from "../menu-window"

export default function MenuButton() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <button 
                className="relative"
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