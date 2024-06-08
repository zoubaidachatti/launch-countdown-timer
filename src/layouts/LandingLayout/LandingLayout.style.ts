import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  padding: '4rem 6rem',
  [theme.breakpoints.down('md')]: {
    padding: '2rem',
  },
}));
