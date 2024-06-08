import { Layout } from '@/config/constants';
import { Button, Stack, styled } from '@mui/material';

export const StyledRoute = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.grey[200],
  fontWeight: 400,
  textDecoration: 'none',
  ':hover': {
    color: theme.palette.grey[900],
    transition: Layout.transition,
  },
}));

export const MenuIconContainer = styled(Stack)(() => ({
  cursor: 'pointer',
}));
