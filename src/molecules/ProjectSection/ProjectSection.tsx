import { AnimateSharedLayout, useCycle } from "framer-motion";
import { StepDesc, StepTitle } from "molecules/Step/Step.styles";
import React from "react";
import { IStep, IStepItem } from "types/Project";
import {
  ProjectSectionIframe,
  ProjectSectionImage,
  ProjectSectionImages,
  ProjectSectionInfo,
  ProjectSectionWrapper,
} from "./ProjectSection.styles";

interface Props {
  step: IStep;
}

export default function ProjectSection({ step }: Props) {
  return (
    <ProjectSectionWrapper>
      <ProjectSectionInfo>
        <StepTitle>{step.title}</StepTitle>
        <StepDesc>{step.desc}</StepDesc>
      </ProjectSectionInfo>
      <AnimateSharedLayout>
        <ProjectSectionImages layout>
          {step.stepItem.map((item) => (
            <ProjectSectionItem step={item} key={item.src} />
          ))}
        </ProjectSectionImages>
      </AnimateSharedLayout>
    </ProjectSectionWrapper>
  );
}

function ProjectSectionItem({ step }: { step: IStepItem }) {
  switch (step.type) {
    case "image":
      return <ProjectSectionImage layout src={step.src} />;
    case "iframe":
      return <ProjectSectionIframe layout src={step.src} />;
    default:
      return <div></div>;
  }
}
