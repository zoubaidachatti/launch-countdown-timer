import { Layout } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const SVGContainer = styled(Stack)(({ theme }) => ({
  svg: {
    cursor: 'pointer',
    ':hover': {
      path: { transition: Layout.transition, fill: theme.palette.secondary.main },
    },
  },
}));
