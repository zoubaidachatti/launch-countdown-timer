import { Theme } from '@mui/material';

export default function List(theme: Theme) {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          '& .Mui-focusVisible': {
            backgroundColor: theme.palette.grey[50] + '!important',
          },
        },
      },
    },
  };
}
