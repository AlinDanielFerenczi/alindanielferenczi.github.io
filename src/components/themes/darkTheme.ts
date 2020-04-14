import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000"
    },
    primary: {
      main: "#fff"
    },
    secondary: {
      main: '#9932CC'
    }
  }
});