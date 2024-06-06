import { Layout } from '@/config/constants';
import { Theme } from '@mui/material';

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        popper: {
          borderRadius: Layout.borderRadius,
        },
        tooltip: {
          backgroundColor: theme.palette.grey[50],
          border: 'none',
          borderRadius: Layout.borderRadius,
          padding: '10px',
          fontSize: '0.75rem',
          width: 'inherit',
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[1],
          span: { color: theme.palette.grey[50] },
        },
      },
    },
  };
}
