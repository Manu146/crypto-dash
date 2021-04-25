import React from "react";
import styled from "styled-components";

const ItemLink = styled.a`
  display: flex;
  flex-wrap: nowrap;
  padding: 0.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
  transition: background 0.2s ease-in;
  &:hover {
    background-color: #caf0ff;
  }

  & i {
    display: inline-block;
    padding: 0 0.5rem;

    & svg {
      fill: #3d3d3d;
    }
  }
`;

const Text = styled.span`
  display: ${({ isOpen }) => (isOpen ? "inline" : "none")};
`;

export default function SidebarItem({ item, isOpen }) {
  const Icon = item.icon;
  return (
    <li>
      <ItemLink href={item.path}>
        <i>
          <Icon />
        </i>
        <Text isOpen={isOpen}>{item.text}</Text>
      </ItemLink>
    </li>
  );
}
