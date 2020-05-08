import { createMuiTheme } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

export const LightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: blue[600],
      light: blue[50]
    },
    secondary: {
      main: grey[400],
      light: grey[500]
    },
    text: {
      primary: "#000",
      secondary: grey[700]
    },
    background: {
      default: grey[100]
    }
  }
});
