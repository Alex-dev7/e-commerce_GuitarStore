import Image from "next/image"


function StatsSection() {
  return (
    <section className="min-h-screen w-screen bg-[#4a3828] relative flex flex-col justify-between">
        <Image src={'/images/amp.png'} width={400} height={400} alt="amp image" className="absolute inset-0 left-1/2 -translate-x-1/2 top-[10%]"/>
        <div className="w-[650px] flex flex-col space-y-10 text-[#F0F0F0] p-[5%]">
            <h3 className="text-5xl font-extrabold ">Mini Tone Master® Amplifier</h3>
            <p className="text-lg">
                This miniaturized version of the Tone-Master boasts glorious tone for its size, along with authentic looks to match.
                {/* This portable mini amp features classic details reminiscent of the original Tone-Master, from metal amp corners to vintage-style brown grille cloth and white knobs. */}
            </p>
            <button className="text-lg w-[160px] text-center text-md font-semibold bg-white text-black py-4 rounded-4xl hover:bg-neutral-200 cursor-pointer">
                Learn More
            </button>
        </div>
        <div className="w-full h-[400px] flex p-[30px] text-[#F0F0F0]">
            <div className="w-[50%] border-r-white border-r-[1px] text-center space-y-6 place-content-center">
                <h1 className="text-9xl font-extrabold">5</h1>
                <h5>Microphone talk solution</h5>
                <p className="max-w-[600px] mx-auto">A proprietary wind-reduction microphone array means clearer calls wherever you are - focus only on the sound you want.</p>
            </div>
            <div className="w-[50%] text-center space-y-6 place-content-center">
                <h1 className="text-9xl font-extrabold">9.4</h1>
                <h5>Microphone talk solution</h5>
                <p className="max-w-[600px] mx-auto">A proprietary wind-reduction microphone array means clearer calls wherever you are - focus only on the sound you want.</p>
            </div>

        </div>
    </section>
  )
}

export default StatsSection

// bg-[#99C5B5]