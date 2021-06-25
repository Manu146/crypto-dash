import styled, { keyframes } from "styled-components";

const BounceDelay = keyframes`
     0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 70px;
  text-align: center;

  & > div {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) =>
      theme.mode === "light" ? "#626b77" : "#24263b"};

    border-radius: 100%;
    display: inline-block;
    animation: ${BounceDelay} 1.4s infinite ease-in-out both;
  }

  & .bounce1 {
    animation-delay: -0.32s;
  }

  & .bounce2 {
    animation-delay: -0.16s;
  }
`;
