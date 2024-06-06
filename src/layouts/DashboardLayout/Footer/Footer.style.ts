import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  padding: '0 1.5% 14px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  transition: 'width .3s ease',
  backgroundColor: theme.palette.grey[100],
}));
