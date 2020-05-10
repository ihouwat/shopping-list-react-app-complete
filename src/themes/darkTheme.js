import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  typography: {
    fontFamily: ["'Telex'", 'sans-serif'].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#c3c8f3',
      light: '#e6e8fa',
      dark: '#8a94d4',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f7b6c3',
      light: '#fce2e7',
      dark: '#f1879c',
    },
    background: {
      paper: '#1C2A35', 
      default: '#17242C',
    }
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
