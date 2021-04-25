import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Primary = css`
  background-color: #21e6c1;
  color: #444;
  &:hover {
    background-color: #1bbfa1;
  }
`;

const Secondary = css`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#fff" : "#232c32"};
  color: ${({ theme }) => (theme.mode === "dark" ? "#444" : "#f7f0f5")};
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#3e4e59" : "#3e4e59"};
  }
`;

const colors = {
  secondary: Secondary,
  primary: Primary,
};

const Round = css`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  border-radius: 50%;
  justify-self: flex-start;
  & svg {
    position: absolute;
    top: calc(50% - 0.75rem);
    left: calc(50% - 0.75rem);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const NotRound = css`
  width: auto;
  height: auto;
  position: static;
  border-radius: 1rem;
  & svg {
    position: round;
    width: 1rem;
    height: 1rem;
  }
`;

const handleColor = (color) => {
  return color === "secondary" ? colors.secondary : colors.primary;
};

const handleSize = (size) => {
  switch (size) {
    case "small":
      return "font-size: 0.75rem; padding: 0.3rem; font-weight: 500;";

    case "regular":
      return "font-size: 0.75rem; padding: 0.5rem;";

    case "large":
      return "font-size: 1rem; padding: 0.75rem; border-radius: 1.5rem;";
    default:
      return "font-size: 0.75rem; padding: 0.5rem;";
  }
};
//svg { width: 0.75rem; height: 0.75rem; }
const Wrapper = styled.button`
  ${({ round }) => (round ? Round : NotRound)}
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  ${({ size }) => handleSize(size)}
  ${({ color }) => handleColor(color)}
  &:disabled {
    background-color: #adadad;
    color: #5c5c5c;
    cursor: default;
  }

  &:disabled:hover {
    background-color: #adadad;
  }
  transition: background 0.3s ease-in;
`;

export default function LinkButton({ as, children, ...delegated }) {
  const tag = as === "link" ? Link : "button";
  return (
    <Wrapper as={tag} {...delegated}>
      {children}
    </Wrapper>
  );
}
