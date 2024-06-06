import { Layout } from '@/config/constants';
import { Theme, alpha } from '@mui/material';

export default function Tabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 0,
          maxWidth: '100%',
        },
        indicator: {
          height: '100%',
          borderRadius: Layout.borderRadius,
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
          zIndex: 1,
        },
      },
    },
    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          svg: {
            fill: theme.palette.grey[700],
          },
          borderRadius: Layout.borderRadius,
          minHeight: Layout.tabsHeight,
          width: Layout.tabsHeight,
        },
      },
    },
  };
}
