import { AnimatePresence } from "framer-motion";
import React, { ReactElement } from "react";
import { IStep } from "types/Step";
import {
  CurrentStep,
  NextStep,
  StepDesc,
  StepImage,
  StepImageWrapper,
  StepInfo,
  StepTitle,
  StepWrapper,
} from "./Step.styles";

interface Props {
  step: IStep;
  current: number;
  setNextStep: () => void;
}

export default function Step({
  step,
  current,
  setNextStep,
}: Props): ReactElement {
  return (
    <StepWrapper>
      <StepInfo>
        <CurrentStep>Step {current + 1} / 3</CurrentStep>
        <div>
          <StepTitle>{step.title}</StepTitle>
          <StepDesc>{step.desc}</StepDesc>
        </div>
        <NextStep onClick={setNextStep}>Next Step</NextStep>
      </StepInfo>
      <StepImageWrapper>
        <AnimatePresence exitBeforeEnter>
          <StepImage
            key={current}
            initial={{ scale: 0.8, x: 300 }}
            exit={{ scale: 0.8, x: -300 }}
            animate={{ scale: 1, x: 0 }}
            src={step.url}
          />
        </AnimatePresence>
      </StepImageWrapper>
    </StepWrapper>
  );
}
