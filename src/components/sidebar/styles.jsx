import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: background 0.2s ease-in;
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? "#caf0ff" : "#2C2F49"};
  }
`;
