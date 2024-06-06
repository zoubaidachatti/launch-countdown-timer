import { Layout } from '@/config/constants';
import { TextAlignType } from '@/types/interfaces';
import { Stack, TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)(
  ({ theme }) =>
    ({ textalign }: { textalign?: TextAlignType }) => ({
      '& .MuiOutlinedInput-input': { textAlign: textalign },
      '& .Mui-focused fieldset': {
        border: `${Layout.inputFocusBorderWidth} solid  ${theme.palette.primary.main} !important`,
      },
      'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      'input[type=number]': {
        MozAppearance: 'textfield',
      },
      svg: {
        zIndex: 8,
        fill: theme.palette.primary.main,
        width: 18,
        height: 18,
      },
      '& .MuiInputAdornment-root': {
        marginLeft: -2,
      },
    }),
);

export const StyledPasswordIconStack = styled(Stack)(() => ({
  cursor: 'pointer',
}));
