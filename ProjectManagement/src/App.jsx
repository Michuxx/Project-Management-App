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
    const projectID = Math.random();

    setProjectsState((prev) => {
      const newProject = {
        ...projectData,
        id: projectID,
      };

      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectID: undefined,
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
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar
        OnStartAddProcjet={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
