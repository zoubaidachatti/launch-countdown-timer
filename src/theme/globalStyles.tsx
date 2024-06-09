import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          height: '100vh',
          background: `linear-gradient(to bottom, ${theme.palette.grey[900]}, ${theme.palette.primary.dark})`,
          overflowX: 'hidden',
          transition: 'background-color  .2s linear',
          backgroundSize: '100%',
        },
      }}
    />
  );
}
