import React, { useContext, useEffect, useState } from "react";
import { IconButton, useTheme } from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { WbSunny } from "@mui/icons-material";
import { ThemeContext } from "./CustomThemeProvider";

const DarkModeButton = () => {
  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);

  return (
    <IconButton
      onClick={() => switchColorMode()}
      style={{
        backgroundColor: "#6C63FF",
        color: "white",
        borderRadius: "8px",
      }}
    >
      {theme.palette.mode === "light" ? <NightsStayIcon /> : <WbSunny />}
    </IconButton>
  );
};

export default DarkModeButton;
