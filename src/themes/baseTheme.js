import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

export function getThemeByName(theme) {
  return themeMap[theme];
}

const themeMap = {
  lightTheme,
  darkTheme
};