import { Layout } from '@/config/constants';
import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  minWidth: 150,
  letterSpacing: '0.2rem',
  color: theme.palette.grey[900],
  padding: '13px 26px',
  transition: Layout.transition,
}));
