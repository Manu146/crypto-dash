import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import UserCard from "./UserCard";
import ThemeToggler from "./ThemeToggler";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as TransactionIcon } from "../../icons/transaction.svg";
import { ReactComponent as CoinsIcon } from "../../icons/coins.svg";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";
import { ReactComponent as SidebarArrow } from "../../icons/sidebar-arrow.svg";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/authSlice";
import useIsAuthenticated from "../../custom-hooks/useIsAuthenticated";

const sidebarItems = [
  { text: "Home", icon: HomeIcon, path: "/home" },
  { text: "Transactions", icon: TransactionIcon, path: "/transactions" },
  { text: "Coins", icon: CoinsIcon, path: "/coins" },
  { text: "Settings", icon: SettingsIcon, path: "/settings" },
];

const SidebarContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    top: 0;
    left: 0;
    padding: 0.5rem;
    flex-grow: 0;
    flex-shrink: 0;
    width: ${({ isOpen }) => (isOpen ? "15rem" : "5rem")};
    justify-content: center;
    border-right: 1px solid
      ${({ theme }) => (theme.mode === "light" ? "#cde8f1" : "#0d131f")};
    overflow: hidden;
    transition: width 0.3s ease-in;
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

export default function Sidebar({ isOpen, toggle }) {
  const authData = useSelector(authSelector);
  const isAuth = useIsAuthenticated();
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
      <ThemeToggler />
      {isAuth && (
        <UserCard
          userInfo={{
            img: "https://randomuser.me/api/portraits/men/71.jpg",
            ...authData,
          }}
          isOpen={isOpen}
        />
      )}
    </SidebarContainer>
  );
}
