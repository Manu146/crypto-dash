import styled, { keyframes } from "styled-components";
import { DefaultContainer } from "../layout/DefaultContainer";

const ScrollAnm = keyframes`
    0% { transform: translateX(0); }
	100% { transform: translateX(-50%)}
`;

export const SlideTrack = styled.div`
  position: absolute;
  display: flex;
  animation: ${ScrollAnm} 50s linear infinite;
  animation-play-state: running;
`;

export const Container = styled(DefaultContainer)`
  position: relative;
  overflow: hidden;
  height: 5rem;
  width: 100%;
  &::before,
  &::after {
    content: "";
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    height: 100%;
    width: 5rem;
    z-index: 2;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    top: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:hover ${SlideTrack} {
    animation-play-state: paused;
  }
`;
