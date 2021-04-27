import React from "react";
import styled from "styled-components";
import { StyledLink } from "../common/StyledLink";

const ItemLink = styled(StyledLink)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

  & i {
    display: inline-block;
    padding: 0 0.5rem;

    & svg {
      fill: #3d3d3d;
    }
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
      <ItemLink href={item.path}>
        <i>
          <Icon />
        </i>
        <Text isOpen={isOpen}>{item.text}</Text>
      </ItemLink>
    </li>
  );
}
