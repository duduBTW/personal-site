import ProjectTitle from "atoms/ProjectTitle";
import ProjectCardList from "molecules/ProjectCardList";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { IProject } from "types/Project";
import { ProjectsWrapper } from "./Projects.styles";

interface Props {
  projects: IProject[];
}
export default function Projects({ projects }: Props) {
  const { push } = useRouter();
  const [filter, setFilter] = useState("all");
  const [projectsData, setProjectsData] = useState(projects);

  useEffect(() => {
    if (filter !== "all") {
      setProjectsData(projects.filter((p) => p.type !== filter));
    } else {
      setProjectsData(projects);
    }
  }, [filter]);

  return (
    <ProjectsWrapper>
      <div className="title">
        <ProjectTitle />
        <span onClick={() => push("/project")}>(ver grid)</span>
      </div>
      <select name="show" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todos</option>
        <option value="overlay">Overlays</option>
        <option value="dev">Dev</option>
      </select>
      <ProjectCardList projects={projectsData} />
    </ProjectsWrapper>
  );
}
