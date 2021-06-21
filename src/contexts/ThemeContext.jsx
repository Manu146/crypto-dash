import { useState, useEffect, createContext, useCallback } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

const defaultTheme = { mode: "light" };

const getSavedTheme = () => {
  let savedTheme = window.localStorage.getItem("theme");
  return savedTheme === null ? savedTheme : JSON.parse(savedTheme);
};

const saveThemeLocal = (theme) => {
  window.localStorage.setItem("theme", JSON.stringify(theme));
};

export default function ThemeContextProv({ children }) {
  const [theme, setTheme] = useState();
  const switchTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (!theme) {
      let savedTheme = getSavedTheme();
      if (savedTheme) setTheme(savedTheme.mode);
      else setTheme(defaultTheme);
    }

    saveThemeLocal({ mode: theme });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <ThemeProvider theme={theme ? { mode: theme } : defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
