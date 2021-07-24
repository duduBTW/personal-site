import styled from "@emotion/styled";

export const ProjectsWrapper = styled.div`
  height: 100%;
  display: grid;

  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: 1fr 2.5fr;
  grid-column-gap: 20px;
  @media only screen and (max-width: 800px) {
    grid-column-gap: 5px;
  }
  grid-row-gap: 80px;

  span {
    cursor: pointer;

    align-self: flex-end;
    margin-left: 20px;
    font-size: 30px;
    line-height: 72px;

    :hover {
      text-decoration: underline;
      text-underline-offset: 8px;
    }
  }

  .project-card-list {
    grid-row: 2 / 3;
    grid-column: 2 / span 24;

    @media only screen and (max-width: 800px) {
      grid-column: 2 / span 26;
    }
  }

  .title {
    grid-column: 2 / 22;
    grid-row: 1 / 2;

    display: flex;
    width: 100%;
  }

  select {
    grid-row: 1 / 2;
    grid-column: 20 / 22;
    height: 50px;
    align-self: flex-end;
    outline: none;

    border: none;
    border-bottom: 1px solid black;
  }
`;
