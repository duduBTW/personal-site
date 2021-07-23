import styled from "@emotion/styled";
import Section from "atoms/Section";
import { motion } from "framer-motion";

export const StepWrapper = styled(Section)``;
export const StepInfo = styled.div`
  grid-column: 2 / span 6;
  grid-row: 1/2;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 204px 0px;

  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.25);
  z-index: 2;

  padding-right: 40px;
`;

export const StepDesc = styled.p`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 171.2%;
  /* or 27px */

  letter-spacing: 0.1em;

  color: #373737;
`;
export const CurrentStep = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 82px;
  /* identical to box height */

  letter-spacing: 0.1em;

  color: #f73c77;
`;
export const NextStep = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  letter-spacing: 0.1em;

  color: #08176c;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
export const StepTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  letter-spacing: 0.1em;

  color: #f73c77;

  padding: 0px;
  margin: 0px;
`;

export const StepImageWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 8 / 26;

  align-self: center;
`;
export const StepImage = styled(motion.img)`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;

  object-fit: cover;
`;
