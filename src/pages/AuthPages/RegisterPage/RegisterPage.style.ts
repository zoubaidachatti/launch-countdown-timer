import { Typography, styled } from '@mui/material';

export const StyledLink = styled(Typography)(({ theme }) => ({
  a: {
    textDecoration: 'auto',
    color: theme.palette.primary.main,
  },
}));
