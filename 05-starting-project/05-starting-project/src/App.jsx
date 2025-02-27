import Home from "./Components/Home";
import Form from "./Components/Forms";
import { useState } from "react";
import SideBar from "./Components/SideBar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function hanldeStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevProjected) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevProjected,
        selectedProject: [...prevProjected.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content

  if (projectsState.selectedProjectId === null) {
    content = <Form onAdd={handleAddProject} />
  }
  else if (projectsState.selectedProjectId === undefined) {
    content = <Home onStartAddProject={hanldeStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={hanldeStartAddProject} />
      {content}
    </main>
  );
}

export default App;
