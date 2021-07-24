import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProjectCardWrapper = styled(motion.div)`
  transition: box-shadow 0.2s ease;
  width: 100%;
  height: 475px;
  cursor: pointer;
  position: relative;
  min-width: 300px;

  /* border: 1px solid #f73c77; */
  box-sizing: border-box;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 50px;

  :hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectCardImage = styled(motion.img)`
  position: absolute;
  inset: 0px;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  z-index: 0;
`;
