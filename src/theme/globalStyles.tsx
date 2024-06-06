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
        '*::-webkit-scrollbar': {
          width: 6,
          height: 7,
        },
        ':hover::-webkit-scrollbar': {
          width: 6,
          height: 7,
        },
        ':hover::-webkit-scrollbar-thumb:vertical': {
          background: alpha(theme.palette.info.light, 0.2),
        },
        ':hover::-webkit-scrollbar-track': {
          backgroundColor: alpha(theme.palette.info.light, 0.2),
        },
      }}
    />
  );
}
