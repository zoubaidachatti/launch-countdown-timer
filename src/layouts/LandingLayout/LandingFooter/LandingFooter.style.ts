import { Layout } from '@/config/constants';
import { fontFamily2 } from '@/theme/typography';
import { Stack, styled } from '@mui/material';

export const SocialsContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  svg: {
    margin: '.7rem',
    width: 20,
    height: 20,
    fill: theme.palette.success.main,
    cursor: 'pointer',
    '&:hover': {
      fill: theme.palette.grey[50],
    },
    transition: Layout.transition,
  },
}));

export const LogoContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  svg: {
    path: { fill: theme.palette.success.main, transition: Layout.transition },
    cursor: 'pointer',
    '&:hover': {
      path: { fill: theme.palette.grey[50] },
    },
  },
}));

export const StyledRoute = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.125rem',
  color: theme.palette.success.main,
  fontFamily: fontFamily2,
  textDecoration: 'none',
  fontWeight: 600,
  transition: Layout.transition,
  '&:hover': {
    color: theme.palette.grey[50],
  },
}));

export const StyledLink = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '.9rem',
  color: theme.palette.success.main,
  fontFamily: fontFamily2,
  textDecoration: 'none',
  fontWeight: 600,
  transition: Layout.transition,
  '&:hover': {
    color: theme.palette.grey[50],
  },
}));
