import { Layout } from '@/config/constants';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          caretColor: theme.palette.primary.main,
          WebkitTapHighlightColor: 'transparent',
          backgroundColor: theme.palette.grey[100],
          overflowX: 'hidden',
          transition: 'background-color  .2s linear',
        },
        '::selection': {
          color: theme.palette.common.white,
          background: theme.palette.primary.main,
        },
        '::-moz-selection': {
          color: theme.palette.common.white,
          background: theme.palette.primary.main,
        },
        '*::-webkit-scrollbar': {
          width: 6,
          height: 7,
        },
        ':hover::-webkit-scrollbar': {
          width: 6,
          height: 7,
          borderRadius: Layout.borderRadius,
        },
        ':hover::-webkit-scrollbar-thumb': {
          borderRadius: Layout.borderRadius,
          background: alpha(theme.palette.primary.dark, 0.3),
        },
        ':hover::-webkit-scrollbar-thumb:vertical': {
          borderRadius: Layout.borderRadius,
          background: alpha(theme.palette.primary.dark, 0.3),
        },
        ':hover::-webkit-scrollbar-track': {
          backgroundColor: alpha(theme.palette.primary.light, 0.2),
          borderRadius: `0 0 ${Layout.borderRadius}px ${Layout.borderRadius}px`,
        },
      }}
    />
  );
}
