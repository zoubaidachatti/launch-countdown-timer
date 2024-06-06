import { Theme, alpha } from '@mui/material';

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: alpha(theme.palette.success.main, 0.5),
          color: theme.palette.grey[900],
        },
        standardWarning: {
          backgroundColor: alpha(theme.palette.warning.main, 0.5),
          color: theme.palette.grey[900],
        },
        standardError: {
          backgroundColor: alpha(theme.palette.error.main, 0.5),
          color: theme.palette.grey[900],
        },
        standardInfo: {
          backgroundColor: alpha(theme.palette.info.main, 0.5),
          color: theme.palette.grey[900],
        },
      },
    },
  };
}
