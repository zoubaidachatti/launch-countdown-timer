import { Stack, Typography, styled } from '@mui/material';

export const SocialsContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  svg: {
    width: 20,
    height: 20,
    fill: theme.palette.grey[900],
    cursor: 'pointer',
    '&:hover': {
      fill: theme.palette.primary.main,
    },
    transition: 'all 0.3s ease',
  },
}));

export const StyledLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[900],
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  transition: 'all 0.3s ease',
}));

export const LogoContainer = styled(Stack)(({ theme }) => ({
  svg: {
    fill: theme.palette.text.primary,
    height: 70,
    width: 150,
    transition: 'all 0.5s ease',
  },
}));
