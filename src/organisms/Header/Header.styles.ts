import styled from "@emotion/styled";
import Section from "atoms/Section";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(Section)`
  gap: 20px;

  align-items: center;
  background-image: url("/bg.png");

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 800px) {
    gap: 10px;
  }
`;

export const HeaderTitleWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
  overflow: hidden;

  @media only screen and (max-width: 800px) {
    grid-row: 1 / 1;
  }
`;

export const HeaderTitle = styled(motion.h1)`
  padding: 0px;
  margin: 0px;

  font-style: normal;
  font-weight: 500;
  font-size: clamp(72px, 9vw, 140px);
  line-height: 191px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.1em;

  color: #0c1517;

  text-align: center;
  position: relative;

  ::before {
    content: "DuduBTW";

    position: absolute;
    inset: 0px;
    top: 2px;
    left: -3px;
    color: #4ebfc3;
    z-index: -1;
  }
  ::after {
    content: "DuduBTW";

    position: absolute;
    inset: 0px;
    bottom: 4px;
    right: -4px;
    color: #f1c7e6;
    z-index: -1;
  }
`;

export const HeaderSubTitle = styled(motion.h3)`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: clamp(20px, 2.5vw, 30px);
  line-height: 41px;
  letter-spacing: 0.1em;

  padding: 0px;
  margin: 0px;

  text-align: center;
`;

export const HeaderImage = styled.img`
  grid-column: 14 / 24;
  grid-row: 1/2;

  pointer-events: none;
  max-width: 100%;

  @media only screen and (max-width: 800px) {
    grid-row: 2 / 3;
  }
`;
