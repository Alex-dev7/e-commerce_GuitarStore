
function MarqueeText({text}) {

  return (
    <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="text-9xl font-extrabold mx-4 bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent inline-block">{text}</span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent inline-block">
            <span className="text-9xl font-extrabold mx-4">{text}</span>
        </div>
    </div>
  )
}

export default MarqueeText

// bg-gradient-to-r from-fuchsia-500 to-cyan-500bg-gradient-to-r from-emerald-500 to-emerald-900
// bg-gradient-to-r from-slate-500 to-slate-800
// bg-gradient-to-r from-slate-300 to-slate-500