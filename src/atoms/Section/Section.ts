import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: auto;
`;
