import Home from "./Home";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <main  className="h-screen my-8 flex gap-8">
      <Sidebar/>
      <Home/>
    </main>
  );
}

export default App;
