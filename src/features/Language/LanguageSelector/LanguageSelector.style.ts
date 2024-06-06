import { Layout } from '@/config/constants';
import { Stack, alpha, styled } from '@mui/material';

export const StyledOption = styled(Stack)(
  ({ theme }) =>
    ({ isselected }: { isselected: string }) => ({
      cursor: 'pointer',
      backgroundColor: isselected === `${true}` ? theme.palette.primary.main : 'transparent',
      borderRadius: Layout.borderRadius,
      color: isselected === `${true}` ? theme.palette.grey[50] : theme.palette.grey[800],
      svg: {
        width: 20,
        height: 20,
        fill: isselected === `${true}` ? theme.palette.grey[50] : theme.palette.grey[800],
      },
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
      },
    }),
);
