import Image from "next/image"
import data from "../../mock-data/categories.json"

function Category() {
  return (
    <section className='my-[100px]  w-full flex justify-center place-items-center gap-6'>
        {
            data.map((item, idx) => (
                <div key={idx} className="w-[300px] h-[300px] pt-6 flex flex-col place-content-center place-items-center justify-around gap-3.5 bg-white rounded-2xl cursor-pointer group">
                    <Image src={item.image} alt="categorie image" width={120} height={120} className="group-hover:scale-105  duration-600 ease-in-out"/>
                    <div className="w-3/4 flex place-content-between">
                        <h3 className="text-md font-semibold">{item.category}</h3>
                        {/* arrow svg */}
                        <svg role="presentation" focusable="false" width="24" height="24"  viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-100 duration-300">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    
                </div>
            ))
        }
    </section>
  )
}

export default Category