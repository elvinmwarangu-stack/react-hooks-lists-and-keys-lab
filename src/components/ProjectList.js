import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects }) {
  // Log projects to the console for debugging
  console.log(projects);

  // Render each project item inside the list
  const projectItems = projects.map(({ id, name, about, technologies }) => (
    <ProjectItem
      key={id}
      name={name}
      about={about}
      technologies={technologies}
    />
  ));

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </section>
  );
}

