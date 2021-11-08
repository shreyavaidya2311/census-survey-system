import { createTheme } from "@mui/material";

var primary = "#0288d1";
var secondary = "#6e4e28";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },

  typography: {
    fontFamily: `"Rubik", sans-serif`,
    fontSize: 14,
  },
});

export default theme;
