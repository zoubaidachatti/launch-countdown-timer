import { createTheme } from '@mui/material';
import ComponentsOverrides from './overrides';

import { DefaultTheme } from './themes.light';

const generateTheme = () => {
  const theme = createTheme(DefaultTheme);
  theme.components = ComponentsOverrides(theme);
  return theme;
};

export default generateTheme;
