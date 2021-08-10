import SidebarItem from "./SidebarItem";
import UserCard from "./UserCard";
import ThemeToggler from "./ThemeToggler";
import {
  SidebarContainer,
  SidebarUl,
  SidebarHeader,
  LogoLink,
  ToggleButton,
} from "./styles";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as TransactionIcon } from "../../icons/transaction.svg";
import { ReactComponent as CoinsIcon } from "../../icons/coins.svg";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";
import { ReactComponent as SidebarArrow } from "../../icons/sidebar-arrow.svg";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/authSlice";
import useIsAuthenticated from "../../custom-hooks/useIsAuthenticated";

const sidebarItems = [
  { text: "Home", icon: HomeIcon, path: "/home", enabled: true },
  {
    text: "Transactions",
    icon: TransactionIcon,
    path: "/transactions",
    enabled: true,
  },
  { text: "Coins", icon: CoinsIcon, path: "/coins", enabled: true },
  { text: "Settings", icon: SettingsIcon, path: "/settings", enabled: false },
];

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
        {sidebarItems
          .filter((item) => item.enabled)
          .map((item, index) => (
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
