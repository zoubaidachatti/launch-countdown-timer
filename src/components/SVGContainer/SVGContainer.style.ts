import { Stack, styled } from '@mui/material';

export const SVGContainer = styled(Stack)(
  ({ theme }) =>
    ({ isinverted }: { isinverted?: string }) => ({
      svg: {
        width: 20,
        height: 20,
        fill: isinverted === `${true}` ? theme.palette.grey[600] : theme.palette.primary.main,
        cursor: 'pointer',
        '&:hover': {
          fill: isinverted === `${true}` ? theme.palette.primary.main : theme.palette.grey[600],
        },
      },
      [theme.breakpoints.down('sm')]: {
        svg: {
          width: 17,
          height: 17,
        },
      },
    }),
);
