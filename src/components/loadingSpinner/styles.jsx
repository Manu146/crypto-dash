import styled, { keyframes } from "styled-components";

const Chase = keyframes`
      100% {
    transform: rotate(360deg);
  }

`;

const ChaseDot = keyframes`
      80%,
  100% {
    transform: rotate(360deg);
  }
`;

const ChaseDotBefore = keyframes`
      50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 40px;
  height: 40px;
  position: relative;
  animation: ${Chase} 2.5s infinite linear both;
`;

export const Dot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${ChaseDot} 2s infinite ease-in-out both;

  &::before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: var(--brand-color);
    border-radius: 100%;
    animation: ${ChaseDotBefore} 2s infinite ease-in-out both;
  }

  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }
  &:nth-child(1):before {
    animation-delay: -1.1s;
  }
  &:nth-child(2):before {
    animation-delay: -1s;
  }
  &:nth-child(3):before {
    animation-delay: -0.9s;
  }
  &:nth-child(4):before {
    animation-delay: -0.8s;
  }
  &:nth-child(5):before {
    animation-delay: -0.7s;
  }
  &:nth-child(6):before {
    animation-delay: -0.6s;
  }
`;
