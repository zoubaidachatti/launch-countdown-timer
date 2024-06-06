import { Layout } from '@/config/constants';
import { TextAlignType } from '@/types/interfaces';
import { styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const StyledDatePicker = styled(DatePicker)(
  ({ theme }) =>
    ({ textalign }: { textalign?: TextAlignType }) => ({
      '& .MuiOutlinedInput-input': { textAlign: textalign },
      '& .MuiInputBase-adornedEnd': {
        paddingRight: 9,
      },
      '& .MuiButtonBase-root:hover, .MuiButtonBase-root': {
        backgroundColor: 'transparent',
        zIndex: 9,
      },
      '& .Mui-focused fieldset': {
        border: `${Layout.inputFocusBorderWidth} solid  ${theme.palette.primary.main} !important`,
      },
      '& .MuiInputAdornment-root': {
        marginLeft: -2,
      },
    }),
);
