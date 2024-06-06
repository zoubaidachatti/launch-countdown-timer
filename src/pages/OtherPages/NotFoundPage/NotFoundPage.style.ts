import { Typography, styled } from '@mui/material';

export const StyledEmoticon = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '6rem',
  lineHeight: '9.5rem',
  userSelect: 'none',
  textWrap: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3.5rem',
    lineHeight: '7rem',
  },
}));
