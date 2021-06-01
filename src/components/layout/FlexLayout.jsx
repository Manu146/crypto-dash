import styled from "styled-components";
import { DefaultContainer } from "./DefaultContainer";

export const FlexContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const MainContainer = styled.main`
  margin: 0;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
  padding-bottom: 4.75rem;
  transition: margin 0.3s ease-in;
  @media only screen and (min-width: 768px) {
    margin-left: ${({ isOpen }) => (isOpen ? "15rem" : "5rem")};
    width: auto;
    padding-bottom: 2rem;
  }
`;

export const MainContainerWMargins = styled(MainContainer)`
  h1,
  h2 {
    margin-bottom: 1rem;
  }

  h1 {
    text-align: center;
  }

  & > ${DefaultContainer} {
    margin-bottom: 1rem;
  }
`;
