import { createMuiTheme } from "@material-ui/core";
import { indigo, grey } from "@material-ui/core/colors";

export const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: indigo[900],
      light: indigo[500]
    },
    secondary: {
      main: grey[700],
      light: grey[500]
    },
    text: {
      primary: "#FFF",
      secondary: grey[100]
    },
    background: {
      default: grey[800]
    }
  }
});
