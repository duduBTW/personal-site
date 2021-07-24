import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProjectCardGridWrapper = styled(motion.div)`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
