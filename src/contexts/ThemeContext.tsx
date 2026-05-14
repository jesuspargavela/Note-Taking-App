import { createContext, useState } from "react";

type Theme = "white" | "black";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  themeColorsSwitcher: Record<Theme, string>;
  setThemeColorsSwitcher: React.Dispatch<
    React.SetStateAction<Record<Theme, string>>
  >;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderType = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ThemeProviderType) {
  const [theme, setTheme] = useState<Theme>("black");
  const [themeColorsSwitcher, setThemeColorsSwitcher] = useState<
    Record<Theme, string>
  >({
    white: "black",
    black: "white",
  });

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, themeColorsSwitcher, setThemeColorsSwitcher }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
