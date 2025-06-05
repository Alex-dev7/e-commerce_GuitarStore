"use client";
import { useRef, useState } from "react";
import faqData from "../../../../mock-data/faq.json";

function QuestionsAcordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    

    function toggleAccordion(index: number) {
        setOpenIndex(index === openIndex ? null : index)
    }

    return (
        <div className="w-[95%] h-[80%] bg-neutral-200 rounded-2xl p-8 space-y-2">
            {faqData.map((data, index) =>{
                const contentRef = useRef<HTMLDivElement>(null)
                const isOpen = openIndex === index

                return (
                    <div key={index} className="py-2 flex flex-col place-items-start  transition-all duration-300">
                        <button onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between cursor-pointer my-2 group"
                        >
                            <span className="font-bold">{data.question}</span>
                            <span className="h-6 w-6  text-center rounded-full bg-gray-300 group-hover:bg-gray-700 group-hover:text-white transition-all duration-300">{isOpen ? "-" : "+"}</span>
                        </button>

                        <div
                            ref={contentRef}
                            className="overflow-hidden transition-all duration-500 ease-in-out"
                            style={{
                                height: isOpen ? contentRef.current?.scrollHeight : 0,
                            }}
                            >
                            <p className="mt-3 text-sm text-gray-700">{data.answer}</p>
                        </div>
                        <span className="w-[100%] border-b-[1px] border-neutral-300"></span>
                    </div>
                )})
            }
        </div>
    );
}

export default QuestionsAcordion;
