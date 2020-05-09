import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  typography: {
    fontFamily: ["'Telex'", 'sans-serif'].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#e7e9fa',
      light: '#fce2e7',
      dark: '#a3003c',
      contrastText: '#fff'
    },
    background: {
      appBackground: "#303030",
    },
  },
  spacing: 8,
});

// darkTheme.overrides = {
//   ...darkTheme.overrides,
//   MuiIconButton: {
//       ...darkTheme.MuiButton,
//       root: {
//          ...darkTheme.root,
//           backgroundColor: '#14c5ed',
//       },
//       label: {
//         ...darkTheme.label,
//         color: darkTheme.palette.primary.main,
//       }
//   },
// }
