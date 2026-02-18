import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    warning: {
      main: "#5693b4",
    },
  },
  typography: {
    h1: {
      fontFamily: "serif",
      fontSize: "2.5rem",
    },
    h6: {
      lineHeight: 1.1,
    },
  },
});
