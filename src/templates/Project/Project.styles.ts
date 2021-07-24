import styled from "@emotion/styled";

export const ProjectTitle = styled.div`
  height: 66px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 30px;

  background: #fafafa;
  padding: 0px 50px;
  margin: 0px;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  h1 {
    padding: 0px;
    margin: 0px;

    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.1em;

    color: #161616;
  }

  .icon {
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px 30px;
  }
`;
export const ProjectWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px 0px;
  gap: 40px;

  .title {
    position: sticky;
    top: 0px;
    width: 100%;
    text-align: center;

    background: rgba(255, 255, 255, 1);
    align-self: center;
  }

  img {
    max-width: 75vw;
    max-height: 75vh;

    cursor: pointer;
  }
`;
