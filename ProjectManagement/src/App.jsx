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

  function handleDeleteProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectID: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectID
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );
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
