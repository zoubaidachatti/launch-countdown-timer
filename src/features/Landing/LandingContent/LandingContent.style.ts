import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.grey[100],
  paddingInline: '4%',
  paddingBlock: '30px',
}));
