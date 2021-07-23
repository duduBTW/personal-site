import styled from "@emotion/styled";
import Section from "atoms/Section";

export const ProjectsTemplateWrapper = styled(Section)`
  .title {
    grid-column: 2 / 24;
    grid-row: 1 / 2;

    margin: 50px 0px;

    display: flex;
    gap: 30px;

    align-items: center;

    .spacer {
      flex: 1;
    }
    .icon {
      cursor: pointer;
    }

    select {
      height: 50px;

      border: none;
      border-bottom: 1px solid black;
      outline: none;
    }
  }

  .project-card-grid {
    grid-row: 2 / 3;
    grid-column: 2 / span 22;
  }
`;
