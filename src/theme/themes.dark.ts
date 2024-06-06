import {
  BoxShadowsDarkMode,
  DarkModeColorsConfig,
  ForestGreenDarkColorsConfig,
  MidnightPurpleDarkColorsConfig,
  OceanBlueDarkColorsConfig,
  RoyalGoldDarkColorsConfig,
  SunsetRedDarkColorsConfig,
} from '@/config/constants';
import { Shadows, ThemeOptions } from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';

export const DefaultDarkTheme: ThemeOptions = {
  palette: DarkModeColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadowsDarkMode as Shadows,
};

export const OceanBlueDarkTheme: ThemeOptions = {
  palette: OceanBlueDarkColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadowsDarkMode as Shadows,
};

export const MidnightPurpleDarkTheme: ThemeOptions = {
  palette: MidnightPurpleDarkColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadowsDarkMode as Shadows,
};

export const ForestGreenDarkTheme: ThemeOptions = {
  palette: ForestGreenDarkColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadowsDarkMode as Shadows,
};

export const SunsetRedDarkTheme: ThemeOptions = {
  palette: SunsetRedDarkColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadowsDarkMode as Shadows,
};

export const RoyalGoldDarkTheme: ThemeOptions = {
  palette: RoyalGoldDarkColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadowsDarkMode as Shadows,
};
