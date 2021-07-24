import { useRouter } from "next/dist/client/router";
import React from "react";
import { IProject } from "types/Project";
import {
  ProjectCardImage,
  ProjectCardTitle,
  ProjectCardWrapper,
} from "./ProjectCard.styles";

interface Props {
  project: IProject;
  minWidth?: string;
}

export default function ProjectCard({
  project: { id, miniature, title },
  ...rest
}: Props) {
  const { push } = useRouter();

  return (
    <ProjectCardWrapper
      {...rest}
      onClick={() => push(`/project/${id}`)}
      layout
      layoutId={`project-card-${id}`}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ ease: "easeInOut" }}
    >
      <ProjectCardImage src={miniature} />
      <ProjectCardTitle className="p-c-t">{title}</ProjectCardTitle>
    </ProjectCardWrapper>
  );
}
