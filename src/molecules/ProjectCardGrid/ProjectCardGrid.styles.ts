import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProjectCardGridWrapper = styled(motion.div)`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
