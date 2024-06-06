import { Layout } from '@/config/constants';
import { Theme } from '@mui/material';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: Layout.borderRadius,
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  };
}
