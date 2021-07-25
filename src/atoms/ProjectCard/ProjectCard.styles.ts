import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface ProjectCardWrapperProps {
  minWidth?: string;
}

const getMinWidth = (minValue: string) => css`
  min-width: ${minValue};
`;

export const ProjectCardWrapper = styled(motion.div)<ProjectCardWrapperProps>`
  transition: box-shadow 0.2s ease;
  width: 100%;
  height: 475px;
  cursor: pointer;
  position: relative;

  border: 1px solid #8c8c8c;
  box-sizing: border-box;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 50px;

  :hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);

    .p-c-t {
      background: rgba(255, 255, 255, 1);
    }
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: 20px;
  }

  ${({ minWidth }) => (minWidth ? getMinWidth(minWidth) : "")};
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

export const ProjectCardTitle = styled(motion.div)`
  transition: background 0.2s ease;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 1.2rem 3rem;
  background: rgba(255, 255, 255, 0.75);

  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  letter-spacing: 0.1em;

  color: #161616;
`;
