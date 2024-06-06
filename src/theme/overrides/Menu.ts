import { Theme } from '@mui/material';

export default function Menu(theme: Theme) {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.palette.grey[50],
        },
      },
    },
  };
}
