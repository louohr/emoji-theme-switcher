// skapa context

import { createContext, ReactNode, useContext, useState } from "react";

// emoji theme
type Theme = "😎" | "😴";

// define context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// create theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme");
  }
  return context;
};

// themeprovider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("😎");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "😎" ? "😴" : "😎"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
