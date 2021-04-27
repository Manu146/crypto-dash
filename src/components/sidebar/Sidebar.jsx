import React from "react";
import styled from "styled-components";
import useToggle from "../../custom-hooks/useToggle";
import SidebarItem from "./SidebarItem";
import UserCard from "./UserCard";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as TransactionIcon } from "../../icons/transaction.svg";
import { ReactComponent as CoinsIcon } from "../../icons/coins.svg";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";
import { ReactComponent as SidebarArrow } from "../../icons/sidebar-arrow.svg";

const sidebarItems = [
  { text: "Home", icon: HomeIcon, path: "#" },
  { text: "Transactions", icon: TransactionIcon, path: "#" },
  { text: "Coins", icon: CoinsIcon, path: "#" },
  { text: "Settings", icon: SettingsIcon, path: "#" },
];

const userInfo = {
  img: "https://randomuser.me/api/portraits/men/71.jpg",
  username: "Caleb Dean",
};

const SidebarContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: var(--light-bg-secondary);
  border-top: 1px solid #cde8f1;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    position: static;
    padding: 0.5rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: ${({ isOpen }) => (isOpen ? "15rem" : "5rem")};
    justify-content: center;
    border-right: 1px solid #cde8f1;
    overflow: hidden;
    transition: flex-basis 0.3s ease-in;
  }
`;

const SidebarUl = styled.ul`
  display: flex;
  flex-direction: row;
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
    margin-bottom: auto;
  }
`;

const SidebarHeader = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const LogoLink = styled.a`
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "0" : "-999px")};
  background-color: #9494ca;
  margin-left: 1rem;
  transition: left 0.3s ease-in;
`;

const ToggleButton = styled.button`
  color: #3d3d3d;
  padding: 0.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-left: ${({ isOpen }) => (isOpen ? "10rem" : "0")};
  transition: background 0.2s ease-in, margin-left 0.3s ease-in;
  &:hover {
    background-color: #caf0ff;
  }

  & i {
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    display: inline-block;
    padding: 0 0.5rem;

    & svg {
      fill: #3d3d3d;
    }
  }
`;

export default function Sidebar() {
  const [isOpen, toggle] = useToggle(false);
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <LogoLink href="#" isOpen={isOpen}>
          <span>LOGO</span>
        </LogoLink>
        <ToggleButton onClick={toggle} isOpen={isOpen}>
          <i>
            <SidebarArrow />
          </i>
        </ToggleButton>
      </SidebarHeader>
      <SidebarUl>
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} item={item} isOpen={isOpen} />
        ))}
      </SidebarUl>
      <UserCard userInfo={userInfo} isOpen={isOpen} />
    </SidebarContainer>
  );
}
