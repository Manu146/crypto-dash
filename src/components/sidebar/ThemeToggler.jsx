import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ReactComponent as Light } from "../../icons/light_mode.svg";
import { ReactComponent as Dark } from "../../icons/dark_mode.svg";

const ToggleButton = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  border-radius: 0.5rem;
  transition: background 0.2s ease-in, margin-left 0.3s ease-in;
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? "#caf0ff" : "#2C2F49"};
  }

  & i {
    display: inline-block;
    padding: 0 0.5rem;

    & svg {
      fill: ${({ theme }) => (theme.mode === "light" ? "#3d3d3d" : "#9289DE")};
    }
  }
`;

export default function ThemeToggler() {
  const { switchTheme, theme } = useContext(ThemeContext);
  return (
    <ToggleButton onClick={switchTheme}>
      <i>{theme === "light" ? <Light /> : <Dark />}</i>
    </ToggleButton>
  );
}
