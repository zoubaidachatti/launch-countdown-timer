import { Theme } from '@mui/material';

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root.Mui-disabled': {
            pointerEvents: 'none',
            opacity: 0.6,
          },
          '&.MuiInputBase-readOnly': {
            fieldset: { backgroundColor: theme.palette.grey[200] },
          },
          fieldset: {
            borderWidth: '1px !important',
          },
          svg: {
            zIndex: 8,
            fill: theme.palette.primary.main,
            width: 18,
            height: 18,
          },
        },
      },
    },
  };
}
