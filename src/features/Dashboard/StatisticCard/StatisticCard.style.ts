import { Layout } from '@/config/constants';
import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(
  ({ theme }) =>
    ({ isselected }: { isselected?: string }) => ({
      minHeight: 'inherit',
      cursor: 'pointer',
      padding: '10px 20px',
      background:
        isselected === `${true}`
          ? Layout.linearGradient(
              theme.palette.primary.dark,
              theme.palette.primary.main,
              theme.palette.primary.light,
            )
          : theme.palette.grey[50],
      borderRight: `1px solid ${theme.palette.grey[300]}`,
      ':last-of-type': {
        border: 'none',
      },
      width: 'calc(100% / 4)',
      [theme.breakpoints.down('sm')]: {
        borderRight: 'none',
        width: '100%',
      },
      ':hover': {
        background: isselected === `${true}` ? undefined : alpha(theme.palette.primary.light, 0.1),
      },
      transition: 'background 0.3s ease',
    }),
);

export const IconContainer = styled(Stack)(
  ({ theme }) =>
    ({ isselected }: { isselected?: string }) => ({
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundColor: isselected === `${true}` ? theme.palette.grey[800] : theme.palette.grey[700],
      justifyContent: 'center',
      alignItems: 'center',
      svg: {
        minWidth: 20,
        minHeight: 20,
        fill: isselected === `${true}` ? theme.palette.grey[50] : theme.palette.grey[300],
      },
    }),
);
