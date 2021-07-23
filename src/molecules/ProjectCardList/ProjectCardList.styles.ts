import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProjectCardListWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  overflow-x: auto;
  position: relative;
  padding: 0px 20px;
`;
