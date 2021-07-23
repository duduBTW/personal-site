/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { ProjectTitle } from "./Project.styles";
import { FullPage, Slide } from "react-full-page";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/dist/client/router";
import ProjectSection from "molecules/ProjectSection";
import { IProject } from "types/Project";

interface Props {
  project: IProject;
}

export default function Project({ project }: Props) {
  const { push } = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <ProjectTitle>
        <IoMdArrowRoundBack
          className="icon"
          onClick={() => push("/project")}
          size={30}
          color="#f73c77"
        />
        <h1>
          {project.title} -{" "}
          {project.steps ? `${currentStep} / ${project.steps.length}` : null}
        </h1>
      </ProjectTitle>
      <FullPage afterChange={(step) => setCurrentStep(step.to + 1)}>
        {project.steps?.map((step) => (
          <Slide key={step.title}>
            <ProjectSection step={step} />
          </Slide>
        ))}
      </FullPage>
    </>
  );
}
