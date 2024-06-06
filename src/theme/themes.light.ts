import {
  BoxShadows,
  ColorsConfig,
  ForestGreenColorsConfig,
  MidnightPurpleColorsConfig,
  OceanBlueColorsConfig,
  RoyalGoldColorsConfig,
  SunsetRedColorsConfig,
} from '@/config/constants';
import { Shadows, ThemeOptions } from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';

export const DefaultTheme: ThemeOptions = {
  palette: ColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadows as Shadows,
};
export const OceanBlueTheme: ThemeOptions = {
  palette: OceanBlueColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadows as Shadows,
};
export const MidnightPurpleTheme: ThemeOptions = {
  palette: MidnightPurpleColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadows as Shadows,
};
export const ForestGreenTheme: ThemeOptions = {
  palette: ForestGreenColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadows as Shadows,
};
export const SunsetRedTheme: ThemeOptions = {
  palette: SunsetRedColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadows as Shadows,
};
export const RoyalGoldTheme: ThemeOptions = {
  palette: RoyalGoldColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadows as Shadows,
};
