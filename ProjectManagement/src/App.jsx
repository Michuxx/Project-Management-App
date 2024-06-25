import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectID: id,
      };
    });
  }

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

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID
  );

  console.log(projectsState.projects.selectedProjectID);

  console.log(projectsState);

  let content = <SelectedProject project={selectedProject} />;
  if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject
        OnCancelProject={handleCancelProject}
        onAdd={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected OnStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar
        OnStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
