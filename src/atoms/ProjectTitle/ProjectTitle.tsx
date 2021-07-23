import React from "react";
import { ProjectsTitleWrapper } from "./ProjectTitle.styles";

export default function ProjectTitle({
  title = "Projetos",
}: {
  title?: string;
}) {
  return (
    <ProjectsTitleWrapper className="project-title" layoutId="projectTitle">
      {title}
    </ProjectsTitleWrapper>
  );
}
