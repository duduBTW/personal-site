import { useRouter } from "next/dist/client/router";
import React from "react";
import { IProject } from "types/Project";
import { ProjectCardImage, ProjectCardWrapper } from "./ProjectCard.styles";

interface Props {
  project: IProject;
}

export default function ProjectCard({ project: { id, miniature } }: Props) {
  const { push } = useRouter();

  return (
    <ProjectCardWrapper
      onClick={() => push(`/project/${id}`)}
      layout
      layoutId={`project-card-${id}`}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ ease: "easeInOut" }}
    >
      <ProjectCardImage src={miniature} />
    </ProjectCardWrapper>
  );
}
