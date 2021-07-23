import ProjectTitle from "atoms/ProjectTitle";
import ProjectCardGrid from "molecules/ProjectCardGrid";
import React, { ReactElement, useEffect, useState } from "react";
import { ProjectsTemplateWrapper } from "./Projects.styles";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/dist/client/router";
import { IProject } from "types/Project";

interface Props {
  projects: IProject[];
}

export default function ProjectsTemplate({ projects }: Props): ReactElement {
  const { push } = useRouter();
  const [filter, setFilter] = useState("all");
  const [projectsData, setProjectsData] = useState(projects);

  useEffect(() => {
    if (filter !== "all") {
      setProjectsData(projects.filter((p) => p.type === filter));
    } else {
      setProjectsData(projects);
    }
  }, [filter]);

  return (
    <ProjectsTemplateWrapper>
      <div className="title">
        <IoMdArrowRoundBack
          className="icon"
          onClick={() => push("/?initialSlide=1")}
          size={40}
          color="#f73c77"
        />
        <ProjectTitle />
        <div className="spacer"></div>
        <select name="show" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todos</option>
          <option value="overlay">Overlays</option>
          <option value="dev">Dev</option>
        </select>
      </div>
      <ProjectCardGrid projects={projectsData} />
    </ProjectsTemplateWrapper>
  );
}
