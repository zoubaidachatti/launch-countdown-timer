import { Layout } from '@/config/constants';
import { styled } from '@mui/material';

export const StyledColorPicker = styled('input')(
  ({ theme }) =>
    ({ haserror }: { haserror?: string }) => ({
      width: 90,
      height: 39.25,
      borderRadius: Layout.borderRadius,
      borderColor: haserror === `${true}` ? theme.palette.error.main : theme.palette.grey[400],
      backgroundColor: theme.palette.grey[50],
      '::-webkit-color-swatch': {
        borderRadius: Layout.borderRadius,
        border: 'none',
      },
      '::-moz-color-swatch': {
        borderRadius: Layout.borderRadius,
        border: 'none',
      },
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
      ':disabled': {
        pointerEvents: 'none',
        opacity: 0.6,
        borderColor: theme.palette.action.disabled,
        backgroundColor: theme.palette.grey[50],
      },
      ':read-only': {
        backgroundColor: theme.palette.grey[200],
        ':disabled': {
          backgroundColor: theme.palette.grey[50],
          color: theme.palette.text.primary,
          pointerEvents: 'none',
        },
      },
    }),
);
