import Image from "next/image";

const ItemParts = {
    firstPoint: "This is doing something.",
    secondPoint: "Very good quality",
    thirdPoint: "Great product for you!",
};

function ProductParts() {
    return (
        <div className=" w-fit h-fit absolute z-0 inset-0 left-1/2 -translate-x-1/2 top-[10%]">
            <Image
                src={"/images/amp.png"}
                width={400}
                height={400}
                alt="amp image"
                className=""
            />

            <div className="flex  absolute left-[2%] top-[15%] w-[300px] h-15  rounded-full group overflow-hidden   transition-all duration-300   ">
                <button
                    className={`z-10 cursor-pointer min-w-15 h-15  rounded-full border border-white bg-white group-hover:border-black  `}
                >
                    +
                </button>
                <span className="flex place-items-center justify-end h-15 min-w-fit  z-5 opacity-0 -translate-x-[150%] duration-300 pl-20 pr-4 rounded-full transition-all  group-hover:-translate-x-15 group-hover:opacity-100 bg-white">
                    {ItemParts.firstPoint}
                </span>
            </div>
            <div className="flex  absolute left-[50%] top-[38%] w-[300px] h-15  rounded-full group overflow-hidden   transition-all duration-300   ">
                <button
                    className={`z-10 cursor-pointer min-w-15 h-15  rounded-full border border-white bg-white group-hover:border-black  `}
                >
                    +
                </button>
                <span className="flex place-items-center justify-end h-15 min-w-fit  z-5 opacity-0 -translate-x-[150%] duration-300 pl-20 pr-4 rounded-full transition-all  group-hover:-translate-x-15 group-hover:opacity-100 bg-white">
                    {ItemParts.secondPoint}
                </span>
            </div>
            <div className="flex absolute left-[8%] top-[75%] w-[300px] h-15 rounded-full group overflow-hidden   transition-all duration-300   ">
                <button
                    className={`z-10 cursor-pointer min-w-15 h-15  rounded-full border border-white bg-white group-hover:border-black  `}
                >
                    +
                </button>
                <span className="flex place-items-center justify-end h-15 min-w-fit  z-5 opacity-0 -translate-x-[150%] duration-300 pl-20 pr-4 rounded-full transition-all  group-hover:-translate-x-15 group-hover:opacity-100 bg-white">
                    {ItemParts.thirdPoint}
                </span>
            </div>
        </div>
    );
}

export default ProductParts;
