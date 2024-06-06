import { Slider, styled } from '@mui/material';

export const StyledSlider = styled(Slider)(
  ({ theme }) =>
    ({ isreadonly, islarge }: { isreadonly?: string; islarge?: string }) => ({
      '& .MuiSlider-thumb ': {
        width: islarge === `${true}` ? 30 : undefined,
        height: islarge === `${true}` ? 30 : undefined,
      },
      '& .MuiSlider-rail': {
        height: islarge === `${true}` ? 7 : undefined,
        backgroundColor: isreadonly === `${true}` ? theme.palette.action.disabled : undefined,
      },
    }),
);
