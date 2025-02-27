import { CssBaseline } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

type ThemeContextType = {
  switchColorMode: () => void;
};

type Props = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  switchColorMode: () => {},
});

const CustomThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == null || (theme !== "light" && theme !== "dark")) {
      setMode("light");
    } else {
      setMode(theme);
    }
  }, []);

  const switchColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ switchColorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default CustomThemeProvider;
