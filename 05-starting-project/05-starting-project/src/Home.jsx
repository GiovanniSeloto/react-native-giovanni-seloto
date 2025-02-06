export default function Home() {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src="../public/logo.png" alt="" />
            <h2  className="text-xl font-bold text-stone-600 my-4">No project Selectd</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <button className="text-stone-800 hover:text-stone-950">Create new project</button>
        </div>
    )
}