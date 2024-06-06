import { Stack, styled } from '@mui/material';

export const ImageContainerStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  width: 70,
  height: 70,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  svg: {
    width: 50,
    height: 50,
    fill: theme.palette.grey[400],
  },
}));
