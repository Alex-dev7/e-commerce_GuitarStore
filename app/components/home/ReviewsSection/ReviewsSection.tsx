"use client"
import Card from "./Card";
import reviewsData from '../../../../mock-data/reviews.json'
import { Review } from "@/types/review";
import { useRef, useState } from "react";

export type ReviewList = Review[]
const reviews: ReviewList = reviewsData;

const middle = Math.floor(reviews.length / 2) - 1
const end = reviews.length - 1

function ReviewsSection() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const scrollToIndex = (index: number) => {
        const container = scrollRef.current;
        if (container) {
          const child = container.children[index] as HTMLElement
          console.log(child.offsetLeft)
          container.scrollTo({
            left: index === 0? 0 : child.offsetLeft,
            behavior: "smooth",
          })
          setActiveIndex(index)
        }
      }

    return (
        <section className=" w-screen  flex flex-col items-center py-28">
            <h3 className='text-5xl font-semibold' >What people Think <span className="text-pink-500">About Us</span></h3>
            <div
            ref={scrollRef}
            className="reviewsElement flex overflow-x-scroll scroll-smooth snap-x snap-mandatory max-w-[1040px]  px-4 py-24 gap-6"
            >
                {
                    reviews.map((data, index) => (
                        <Card key={index} data={data} />
                    ))
                }
            </div>
            
            <div className="flex gap-2 mt-6">
                <input
                    type="radio"
                    name="carousel"
                    className="w-4 h-4 accent-yellow-500 border-none outline-none  cursor-pointer"
                    checked={activeIndex === 0}
                    onChange={() => scrollToIndex(0)}
                />
                <input
                    type="radio"
                    name="carousel"
                    className="w-4 h-4 accent-yellow-500 border-none outline-none  cursor-pointer"
                    checked={activeIndex === middle}
                    onChange={() => scrollToIndex(middle)}
                />
                <input
                    type="radio"
                    name="carousel"
                    className="w-4 h-4 accent-yellow-500 border-none outline-none  cursor-pointer"
                    checked={activeIndex === reviews.length - 1}
                    onChange={() => scrollToIndex(end)}
                />
            </div>
        </section>        
    )

}

export default ReviewsSection;
