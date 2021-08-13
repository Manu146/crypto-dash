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

export const SidebarContainer = styled.nav`
  width: 100%;

  position: fixed;

  bottom: 0;

  z-index: 999;

  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};

  display: flex;

  flex-direction: row;

  @media only screen and (min-width: 768px) {
    top: 0;

    left: 0;

    padding: 0.5rem;

    flex-grow: 0;

    flex-shrink: 0;

    flex-direction: column;

    width: ${({ isOpen }) => (isOpen ? "15rem" : "5rem")};

    justify-content: center;

    border-right: 1px solid
      ${({ theme }) => (theme.mode === "light" ? "#cde8f1" : "#0d131f")};

    overflow: hidden;

    transition: width 0.3s ease-in;
  }
`;

export const SidebarUl = styled.ul`
  display: flex;

  flex-direction: row;

  flex: 1;

  gap: 0.5rem;

  list-style: none;

  margin-bottom: 0;

  & li {
    flex: 1;
  }

  @media only screen and (min-width: 768px) {
    & li {
      flex: 0 1 auto;
    }

    flex-direction: column;
    flex: 0;
    margin-bottom: auto;
  }
`;

export const SidebarHeader = styled.div`
  display: none;

  align-items: center;
  flex-direction: column;
  margin-bottom: auto;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LogoLink = styled.a`
  width: 100%;
  & svg {
    width: 100%;
    height: 46px;
  }
`;

export const ToggleButton = styled.button`
  padding: 0.75rem;

  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};

  border-radius: 0.5rem;

  margin-left: ${({ isOpen }) => (isOpen ? "10rem" : "0")};

  transition: background 0.2s ease-in, margin-left 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? "#caf0ff" : "#2C2F49"};
  }

  & i {
    transition: transform 0.3s ease;

    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};

    display: inline-block;

    padding: 0 0.5rem;

    & svg {
      fill: ${({ theme }) => (theme.mode === "light" ? "#3d3d3d" : "#9289DE")};
    }
  }
`;
