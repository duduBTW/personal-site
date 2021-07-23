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
`;

export const ProjectSectionImages = styled(motion.div)`
  grid-column: 6 / 26;
  background: #ffd8d3;
  display: flex;
  flex-wrap: nowrap;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.15);

  gap: 60px;
  padding: 60px;

  align-items: center;
  overflow-x: auto;
`;

export const ProjectSectionIframe = styled(motion.iframe)`
  width: 90%;
  min-width: 90%;
  height: calc(100% - 120px);

  white-space: nowrap;
  background: white;
`;

export const ProjectSectionImage = styled(motion.img)`
  max-width: 85%;
  max-height: 100%;
`;
