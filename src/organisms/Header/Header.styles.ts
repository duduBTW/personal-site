import styled from "@emotion/styled";
import Section from "atoms/Section";

export const HeaderWrapper = styled(Section)`
  gap: 20px;

  align-items: center;
`;

export const HeaderTitleWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1/2;

  @media only screen and (max-width: 800px) {
    grid-row: 1 / 1;
  }
`;

export const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: clamp(72px, 4vw, 120px);
  line-height: 163px;
  letter-spacing: 0.1em;
  padding: 0px;
  margin: 0px;
`;

export const HeaderSubTitle = styled.h3`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 41px;
  letter-spacing: 0.1em;

  padding: 0px;
  margin: 0px;
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
