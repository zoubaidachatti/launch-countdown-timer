import { Layout } from '@/config/constants';
import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  borderRadius: Layout.borderRadius,
  ':hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.2),
  },
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary + '!important',
}));
