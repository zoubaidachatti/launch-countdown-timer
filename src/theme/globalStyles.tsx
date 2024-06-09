import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Hills from '@/assets/images/pattern-hills.svg';
import Stars from '@/assets/images/bg-stars.svg';

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          height: '100vh',
          background: `url(${Hills}) no-repeat bottom right 20%, url(${Stars}),
                      linear-gradient(to bottom, ${theme.palette.grey[900]}, ${theme.palette.primary.dark})`,
          overflowX: 'hidden',
          transition: 'background-color  .2s linear',
          backgroundSize: '100%',
        },
      }}
    />
  );
}
