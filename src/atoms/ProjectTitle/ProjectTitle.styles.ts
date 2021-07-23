import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProjectsTitleWrapper = styled(motion.h2)`
  /* grid-column: 2 / 22;
  grid-row: 1 / 2; */

  font-style: normal;
  font-weight: 300;
  font-size: clamp(32px, 3vw, 60px);
  line-height: 82px;
  /* identical to box height */

  letter-spacing: 0.1em;
  align-self: flex-end;
  padding: 0px;
  margin: 0px;

  color: #f73c77;
`;
