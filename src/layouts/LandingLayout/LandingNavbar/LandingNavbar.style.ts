import { ColorsConfig, Layout } from '@/config/constants';
import { fontFamily2 } from '@/theme/typography';
import { Button, Stack, styled } from '@mui/material';

export const StyledRoute = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.125rem',
  color: theme.palette.grey[50],
  fontFamily: fontFamily2,
  textDecoration: 'none',
  fontWeight: 600,
}));

export const StyledDrawerRoute = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.125rem',
  color: theme.palette.info.dark,
  fontFamily: fontFamily2,
  textDecoration: 'none',
  fontWeight: 600,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: ColorsConfig.grey[50],
  color: theme.palette.info.dark,
  borderRadius: '2rem',
  padding: '.7rem 1rem',
  transition: Layout.transition,
  ':hover': {
    backgroundColor: ColorsConfig.grey[100],
    color: theme.palette.grey[50],
  },
}));

export const MenuIconContainer = styled(Stack)(() => ({
  cursor: 'pointer',
}));
