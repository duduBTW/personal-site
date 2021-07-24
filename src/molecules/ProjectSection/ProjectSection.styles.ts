import styled from "@emotion/styled";
import Section from "atoms/Section";
import { motion } from "framer-motion";

export const ProjectSectionWrapper = styled(Section)`
  height: calc(100% - 66px);
  padding-top: 66px;
`;

export const ProjectSectionInfo = styled.div`
  grid-column: 1 / span 5;
  padding: 50px;

  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    grid-column: 1 / span 24;
    grid-row: 1 / 2;
    padding: 15px 30px;
  }
`;

export const ProjectSectionImages = styled(motion.div)`
  grid-column: 6 / 26;
  background: #ffd8d3;
  scroll-behavior: smooth;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.15);

  gap: 60px;
  padding: 60px;

  align-items: center;
  overflow-x: auto;

  @media only screen and (max-width: 800px) {
    grid-column: 1 / span 24;
    grid-row: 2 / 10;
    padding: 10px;
  }
`;

export const ProjectSectionIframe = styled(motion.iframe)`
  width: 90%;
  min-width: 90%;
  height: calc(100% - 120px);
  @media only screen and (max-width: 800px) {
    height: calc(100% - 20px);
  }

  white-space: nowrap;
  background: white;
`;

export const ScrollRigth = styled(motion.div)`
  position: sticky;
  transition: all 0.2s ease;
  right: -60px;
  height: 100%;

  min-width: 40px;
  background: #fafafa;
  cursor: pointer;
  opacity: 0.8;

  :hover {
    background: #fafafa;
    opacity: 1;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjectSectionImage = styled(motion.img)`
  max-width: 85%;
  max-height: 100%;
`;
