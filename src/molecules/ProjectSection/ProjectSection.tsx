import { AnimateSharedLayout, useCycle } from "framer-motion";
import { StepDesc, StepTitle } from "molecules/Step/Step.styles";
import React, { useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { IStep, IStepItem } from "types/Project";
import {
  ProjectSectionIframe,
  ProjectSectionImage,
  ProjectSectionImages,
  ProjectSectionInfo,
  ProjectSectionWrapper,
  ScrollRigth,
} from "./ProjectSection.styles";

interface Props {
  step: IStep;
}

export default function ProjectSection({ step }: Props) {
  const id = `container-${step.title}`;
  return (
    <ProjectSectionWrapper>
      <ProjectSectionInfo>
        <StepTitle>{step.title}</StepTitle>
        <StepDesc>{step.desc}</StepDesc>
      </ProjectSectionInfo>
      <AnimateSharedLayout>
        <ProjectSectionImages id={id} layout>
          {step.stepItem.map((item) => (
            <ProjectSectionItem step={item} key={item.src} />
          ))}
          <ScrollRigth
            onClick={(e) => {
              var container = document.getElementById(id);

              if (container) container.scrollLeft += window.innerWidth / 2;
            }}
          >
            <AiOutlineRight color="black" size={30} />
          </ScrollRigth>
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
