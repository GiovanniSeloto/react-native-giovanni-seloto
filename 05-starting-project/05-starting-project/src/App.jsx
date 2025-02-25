import Home from "./Components/Home";
import Form from "./Components/Forms";
import { useState } from "react";
import SideBar from "./Components/SideBar";

function App() {

  const [isSelected, setIsSelected] = useState("Home")

  return (
    <main  className="h-screen my-8 flex gap-8">
      <SideBar setIsSelected={setIsSelected}/>
      {isSelected === "Home" ? <Home/> : <Form/>}
    </main>
  );
}

export default App;
