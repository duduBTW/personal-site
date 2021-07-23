import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  height: 100%;
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(24, 1fr);
  align-items: center;
`;

export const HeaderTitleWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1/2;
`;

export const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 120px;
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
`;
