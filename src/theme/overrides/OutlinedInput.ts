import { Layout } from '@/config/constants';
import { Theme } from '@mui/material';

export default function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ':hover .MuiOutlinedInput-notchedOutline': {
            border: `1px solid  ${theme.palette.primary.main}`,
          },
          'fieldset:focus': {
            border: `${Layout.inputFocusBorderWidth} solid  ${theme.palette.primary.main} !important`,
          },
        },
        input: {
          padding: Layout.inputPadding,
          fontSize: '0.75rem',
          zIndex: 6,
          '&::placeholder': {
            color: theme.palette.grey[400],
            opacity: 1,
            fontStyle: 'italic',
          },
        },
        notchedOutline: {
          borderRadius: `${Layout.inputRadius}px`,
          border: `1px solid  ${theme.palette.grey[400]}`,
          backgroundColor: theme.palette.grey[50],
          zIndex: 5,
        },
      },
    },
  };
}
