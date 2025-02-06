import { useState } from "react"

export default function Sidebar() {

    const [isVisible, setIsVisible] = useState(false)

    function handleClick(){
        setIsVisible(true)
        console.log(isVisible)
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <ul className="mt-8">...</ul>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handleClick}
            >+ Add Project</button>
        </aside>
    )
}