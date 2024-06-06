import { Stack, alpha, styled } from '@mui/material';
import { ElementsBorderRadius, ElementsBoxShadow, ElementsFill } from './AppSkeleton.constants';

export const RootStyle = styled(Stack)(({ theme }) => ({
  position: 'relative',
  width: 450,
  minWidth: 450,
  height: 322,
  minHeight: 322,
  backdropFilter: 'blur(3px)',
  background: ElementsFill(
    alpha(theme.palette.primary.light, 0.7),
    alpha(theme.palette.primary.main, 0.7),
  ),
  boxShadow: ElementsBoxShadow,
  borderRadius: ElementsBorderRadius,
  zIndex: 11,

  [theme.breakpoints.down('lg')]: {
    width: 350,
    minWidth: 350,
    height: 250,
    minHeight: 250,
  },
  [theme.breakpoints.down('md')]: {
    width: 320,
    minWidth: 320,
    height: 220,
    minHeight: 220,
  },
  [theme.breakpoints.down('sm')]: {
    width: 290,
    minWidth: 290,
    height: 190,
    minHeight: 190,
  },
}));
