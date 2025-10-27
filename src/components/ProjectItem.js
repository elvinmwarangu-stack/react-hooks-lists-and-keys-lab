import React from "react";

export default function ProjectItem(props) {
  // Destructure props for readability
  const { name, about, technologies } = props;

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>

      <div className="technologies">
        {/* Render each technology as a span */}
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}
