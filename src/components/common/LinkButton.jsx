import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Primary = css`
  background-color: var(--brand-color);
  color: #fff;
  &:hover {
    background-color: #cc6f47;
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
  text-align: center;
  border-radius: 0.75rem;
  //display: flex;
  //align-items: center;
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
