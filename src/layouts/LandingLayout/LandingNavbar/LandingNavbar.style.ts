import { Layout } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const StyledRoute = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.grey[200],
  textDecoration: 'none',
  ':hover': {
    color: theme.palette.grey[900],
    transition: Layout.transition,
  },
}));

export const MenuIconContainer = styled(Stack)(() => ({
  cursor: 'pointer',
}));
