import createPortal from 'react-dom'

export default function Forms(){
    return createPortal(
        <form className="mt-4 text-right">
            <button>Cancel</button>
            <button>Save</button>
            <label className="text-sm font-bold uppercase text-stone-500">title</label>
            <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="text"/>
            <label className="text-sm font-bold uppercase text-stone-500">Description</label>
            <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="" />
            <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
            <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="date" />
        </form>
    ), document.querySelector("Home")
}