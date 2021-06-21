import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ItemLink = styled(NavLink)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: background 0.2s ease-in;
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? "#caf0ff" : "#2C2F49"};
  }

  & i {
    display: inline-block;
    padding: 0 0.5rem;
  }

  & svg {
    fill: ${({ theme }) => (theme.mode === "light" ? "#3d3d3d" : "#9289DE")};
  }

  &.active svg {
    fill: var(--brand-color);
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Text = styled.span`
  display: inline;
  @media only screen and (min-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "inline" : "none")};
  }
`;

export default function SidebarItem({ item, isOpen }) {
  const Icon = item.icon;
  return (
    <li>
      <ItemLink exact to={item.path} activeClassName="active">
        <i>
          <Icon />
        </i>
        <Text isOpen={isOpen}>{item.text}</Text>
      </ItemLink>
    </li>
  );
}
