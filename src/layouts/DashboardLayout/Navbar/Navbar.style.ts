import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  zIndex: 1005,
  backgroundColor: theme.palette.grey[100],
  boxShadow: theme.shadows[1],
  padding: '14px 1.5%',
  position: 'fixed',
  top: 0,
  right: 0,
  transition: 'width .3s ease',
}));
