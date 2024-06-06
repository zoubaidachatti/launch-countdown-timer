import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          backgroundColor: theme.palette.grey[200],
          overflowX: 'hidden',
          transition: 'background-color  .2s linear',
        },
      }}
    />
  );
}
