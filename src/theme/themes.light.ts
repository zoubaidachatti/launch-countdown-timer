import { BoxShadows, ColorsConfig } from '@/config/constants';
import { Shadows, ThemeOptions } from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';

export const DefaultTheme: ThemeOptions = {
  palette: ColorsConfig,
  breakpoints,
  typography,
  shadows: BoxShadows as Shadows,
};
