import ProjectCard from "atoms/ProjectCard";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React from "react";
import { IProject } from "types/Project";
import { ProjectCardGridWrapper } from "./ProjectCardGrid.styles";

interface Props {
  projects: IProject[];
}

export default function ProjectCardGrid({ projects }: Props) {
  return (
    <AnimateSharedLayout>
      <ProjectCardGridWrapper layout className="project-card-grid">
        <AnimatePresence exitBeforeEnter>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </AnimatePresence>
      </ProjectCardGridWrapper>
    </AnimateSharedLayout>
  );
}
