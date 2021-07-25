import ProjectCard from "atoms/ProjectCard";
import React from "react";
import FlipMove from "react-flip-move";
import { IProject } from "types/Project";
import { ProjectCardListWrapper } from "./ProjectCardList.styles";

interface Props {
  projects: IProject[];
}

export default function ProjectCardList({ projects }: Props) {
  return (
    <ProjectCardListWrapper className="project-card-list">
      {projects.map((project) => (
        <ProjectCard
          minWidth={"600px"}
          project={project}
          key={project.miniature}
        />
      ))}
    </ProjectCardListWrapper>
  );
}
