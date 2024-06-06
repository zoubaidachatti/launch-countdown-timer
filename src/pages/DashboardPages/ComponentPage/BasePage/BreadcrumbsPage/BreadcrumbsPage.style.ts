import { Stack, alpha, styled } from '@mui/material';

export const StyledBreadcrumb = styled(Stack)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.primary.light, 0.1),
  padding: 5,
  width: 100,
  a: {
    textAlign: 'center',
  },
}));
