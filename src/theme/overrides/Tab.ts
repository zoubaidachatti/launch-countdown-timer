import { Layout } from '@/config/constants';
import { Theme } from '@mui/material';

export default function Tab(theme: Theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          border: `1px solid transparent`,
          color: theme.palette.grey[700],
          borderRadius: Layout.borderRadius,
          minHeight: Layout.tabsHeight,
          minWidth: 120,
          marginRight: 20,
          textTransform: 'none',
          fontSize: '1rem',
          alignItems: 'center',
          padding: Layout.tabsPadding,
          '&:hover': {
            color: theme.palette.primary.main,
          },
          zIndex: 2,
        },
      },
    },
  };
}
