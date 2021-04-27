import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledLink = styled(Link)`
  padding: 0.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
  transition: background 0.2s ease-in;
  &:hover {
    background-color: #caf0ff;
  }
`;
