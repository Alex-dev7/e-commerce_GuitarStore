"use client";
import { useState } from "react";

const colorOptions = [
    { name: "None", color: null },
    { name: "Red", color: "#ef4444" },
    { name: "Black", color: "#000000" },
    { name: "Wooden", color: "#a16207" },
];

function ColorOptions() {
    const [selected, setSelected] = useState<string | null>("None");

    return (
        <div className="space-y-2" >
            <h4 className="bg-[#f0f0f099] py-2 px-1 font-semibold text-gray-500  mb-3">Color</h4>
            <div className="flex gap-4">
                {colorOptions.map(({ name, color }) => (
                    <button
                        key={name}
                        onClick={() => setSelected(name)}
                        className={`w-8 h-8 rounded-full border-2 border-black transition-all duration-200 cursor-pointer hover:border-amber-800`}
                        style={{
                            backgroundColor: color !== null ? color : '#F0F0F0',
                            borderColor:
                                selected === name ? "#3b82f6" : "transparent",
                            boxShadow:
                                selected === name
                                    ? "0 0 0 2px #3b82f6"
                                    : "none",
                        }}
                        aria-label={name}
                    />
                ))}
            </div>
            {selected && (
                <p className="text-sm text-gray-500">Selected: {selected}</p>
            )}
        </div>
    );
}

export default ColorOptions;
