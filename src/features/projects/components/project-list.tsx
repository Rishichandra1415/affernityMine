"use client";

import { projects } from "../constants/projects";
import { ProjectListItem } from "./project-list-item";

export function ProjectList() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      {projects.map((project, index) => (
        <ProjectListItem 
          key={project.id} 
          project={project} 
          reverse={index % 2 !== 0} 
        />
      ))}
    </div>
  );
}
