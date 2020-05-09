import React, { useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { getThemeByName } from './baseTheme';

export const ThemeContext = React.createContext(themeName => {});

const ThemeProvider = props => {
  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(window.localStorage.getItem("theme") || "lightTheme");
  // Save theme to local browser storage
  useEffect(() => {
    window.localStorage.setItem("theme", themeName);
  }, [themeName]);

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName);
  return (
    <ThemeContext.Provider value={_setThemeName}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;