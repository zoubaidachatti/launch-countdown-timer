import { MenuItem, Typography, alpha, styled } from '@mui/material';

export const StyledMenuItem = styled(MenuItem)(
  ({ theme }) =>
    ({ isselected }: { isselected?: string }) => ({
      backgroundColor:
        isselected === 'true' ? alpha(theme.palette.primary.light, 0.6) : theme.palette.grey[50],
      ':hover': {
        backgroundColor: alpha(theme.palette.primary.light, 0.6),
      },
    }),
);

export const StyledPlaceholder = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: theme.palette.grey[400],
  opacity: 1,
  fontStyle: 'italic',
}));
