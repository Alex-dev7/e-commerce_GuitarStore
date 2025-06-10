import React from "react";
import SidePanel from "./components/SidePanel";
import CardsSection from "./components/CardsSection/CardsSection";

function Shop() {
    return (
    <main className="min-h-screen w-full overflow-hidden flex justify-center mt-20">
        <div className=" w-7/8 max-w-[1550px] flex gap-0">
            <SidePanel />
            <CardsSection />
        </div>
        
    </main>
    )
}

export default Shop;
