import Button from "./Button";

export default function Home({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src="/logo.png" alt="" />
            <h2 className="text-xl font-bold text-stone-600 my-4">No project Selectd</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <Button onClick={ onStartAddProject}>Create new project</Button>
        </div>
    )
}