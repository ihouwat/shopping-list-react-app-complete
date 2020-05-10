import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: ["'Telex'", 'sans-serif'].join(','),
  },
  palette: {
    type: 'light',
    primary: {
      main: '#0040cb',
      light: '#e7e9fa',
      dark: '#002bb3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#cb0040',
      light: '#fce2e7',
      dark: '#a3003c',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.70)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    background: {
      default: "#fafafa",
    },
  },
  spacing: 8,
});

// lightTheme.overrides = {
//   ...lightTheme.overrides,
//   MuiIconButton: {
//       ...lightTheme.MuiButton,
//       root: {
//          ...lightTheme.root,
//           backgroundColor: '#53471f',
//       },
//       label: {
//         ...lightTheme.label,
//         color: lightTheme.palette.primary.main,
//       }
//   },
// }