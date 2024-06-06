import { Layout } from '@/config/constants';
import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  minHeight: 'inherit',
  width: '100%',
  borderRadius: Layout.borderRadius,
  backgroundColor: theme.palette.grey[100],
  border: `1px solid ${alpha(theme.palette.grey[700], 0.2)}`,
  boxShadow: theme.shadows[1],
  overflow: 'hidden',
}));
