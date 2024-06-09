import { Layout } from '@/config/constants';
import { Stack, styled } from '@mui/material';
import Hills from '@/assets/images/pattern-hills.svg';
import Stars from '@/assets/images/bg-stars.svg';

export const SVGContainer = styled(Stack)(({ theme }) => ({
  svg: {
    cursor: 'pointer',
    ':hover': {
      path: { transition: Layout.transition, fill: theme.palette.secondary.main },
    },
  },
}));

export const RootStyle = styled(Stack)(({ theme }) => ({
  background: `url(${Hills}) no-repeat bottom right 20%, url(${Stars}), linear-gradient(to bottom, ${theme.palette.grey[900]}, ${theme.palette.primary.dark})`,
  overflowX: 'hidden',
  backgroundSize: '100%, cover',
}));
