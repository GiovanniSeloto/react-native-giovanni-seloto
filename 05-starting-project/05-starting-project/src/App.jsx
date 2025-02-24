import Home from "./Home";
import Form from "./Components/Forms";
import { useState } from "react";

function App() {

  const [isSelected, setIsSelected] = useState("Home")

  return (
    <main  className="h-screen my-8 flex gap-8">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <ul className="mt-8">...</ul>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={()=> setIsSelected("Form")}
            >+ Add Project</button>
        </aside>
      {isSelected === "Home" ? <Home/> : <Form/>}
    </main>
  );
}

export default App;
