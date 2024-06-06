import { Layout } from '@/config/constants';
import { fontFamily1 } from '@/theme/typography';
import { styled } from '@mui/material';

export const StyledLink = styled('a')(({ theme }) => ({ first }: { first: string }) => ({
  textDecoration: 'none',
  color: theme.palette.info.dark,
  fontWeight: 800,
  padding: '.5rem',
  position: 'relative',
  cursor: 'pointer',
  fontFamily: fontFamily1,
  zIndex: 2,
  '::before': {
    content: '""',
    position: 'absolute',
    bottom: '.3rem',
    left: 0,
    width: '100%',
    height: '.7rem',
    background: first === `${true}` ? theme.palette.warning.light : theme.palette.secondary.light,
    zIndex: '-1',
    borderRadius: '.5rem',
    transition: Layout.transition,
  },
  ':hover': {
    '::before': {
      background: first === `${true}` ? theme.palette.warning.main : theme.palette.secondary.main,
    },
  },
}));
