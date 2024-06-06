import { Layout } from '@/config/constants';
import { styled } from '@mui/material';

export const StyledTextArea = styled('textarea')(
  ({ theme }) =>
    ({ haserror }: { haserror?: string }) => ({
      backgroundColor: theme.palette.grey[50],
      color: theme.palette.text.primary,
      borderColor: haserror === `${true}` ? theme.palette.error.main : theme.palette.grey[400],
      borderRadius: Layout.inputRadius,
      padding: Layout.inputPadding,
      maxWidth: '100%',
      minWidth: '100%',
      minHeight: 70,
      fontSize: '0.75rem',
      outline: 'none !important',
      '&:hover': {
        borderColor: theme.palette.primary.main,
        borderWidth: `1px !important`,
      },
      '&:focus-visible': {
        borderColor: theme.palette.primary.main,
        borderWidth: Layout.inputFocusBorderWidth,
      },
      '&::placeholder': {
        color: theme.palette.grey[400],
        fontSize: '0.75rem',
        fontStyle: 'italic',
      },
      ':disabled': {
        pointerEvents: 'none',
        opacity: 0.6,
        color: theme.palette.text.primary,
        borderColor: theme.palette.action.disabled,
        backgroundColor: theme.palette.grey[50],
        '::placeholder': {
          color: theme.palette.action.disabled,
        },
      },
      ':read-only': {
        backgroundColor: theme.palette.grey[200],
        ':disabled': {
          backgroundColor: theme.palette.grey[50],
          color: theme.palette.text.primary,
        },
      },
    }),
);
