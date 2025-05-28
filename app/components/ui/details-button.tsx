"use client"

function DetailsButton({left, top}: {left: string; top: string}) {
  return (
    <button className={`absolute left-[${left}] top-[${top}] w-10 h-10 rounded-full border`}>
        +
    </button>
  )
}

export default DetailsButton