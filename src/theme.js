import { createTheme } from "@mui/material";

var primary = "#7431a7";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
  typography: {
    fontFamily: `"Rubik", sans-serif`,
    fontSize: 14,
  },
});

export default theme;
