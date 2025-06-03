import { Review } from "@/types/review";
import Image from "next/image";


type CardProps = {
    data: Review;
  };
  
function Card({ data }: CardProps) {
    return (
    <div className="min-w-[500px] h-[250px] flex flex-col justify-between bg-white rounded-2xl shadow-lg p-6">
        <div className="flex gap-1">
            {
                [...Array(data.stars)].map((_, i) => (
                    <Image key={i} src='/svg/star.svg' alt="review stars" width={15} height={15} />
                ))
            }            
        </div>

        <p className="italic">{data.text}</p>
        <div className="flex place-items-center gap-2">
            <Image src={data.avatar} alt="avatar image" width={80} height={80} />
            <div>
               <h5 className="font-bold ">{data.name}</h5>
               <span className="text-gray-500">{data.job}</span> 
            </div>
            
        </div>
    </div>
    )
}

export default Card;
