import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectID: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prev) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
  }
  function handleCancelProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectID: undefined,
      };
    });
  }

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject
        OnCancelProject={handleCancelProject}
        onAdd={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected OnStartAddProcjet={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar OnStartAddProcjet={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
