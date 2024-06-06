import { ColorsConfig } from '@/config/constants';
import { Button, Stack, styled } from '@mui/material';

export const StyledRoute = styled(Button)(
  ({ theme }) =>
    ({ scrolling }: { scrolling?: string }) => ({
      color: scrolling === `${true}` ? theme.palette.grey[900] : theme.palette.grey[50],
      fontWeight: 600,
      svg: {
        fill: scrolling === `${true}` ? theme.palette.grey[900] : theme.palette.grey[50],
        transition: 'all 0.5s ease',
        width: 35,
        height: 35,
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem',
        minWidth: 40,
        width: 80,
        height: 24,
      },
    }),
);
export const StyledDrawerRoute = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[900],
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: ColorsConfig.grey[50],
  backgroundColor: ColorsConfig.grey[900],
  whiteSpace: 'nowrap',
  ':hover': {
    backgroundColor: ColorsConfig.grey[900],
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    minWidth: 40,
  },
}));

export const MenuIconContainer = styled(Stack)(
  ({ theme }) =>
    ({ scrolling }: { scrolling?: string }) => ({
      svg: {
        fill: scrolling === `${true}` ? theme.palette.grey[900] : theme.palette.grey[50],
        width: 25,
        height: 25,
      },

      cursor: 'pointer',
    }),
);
