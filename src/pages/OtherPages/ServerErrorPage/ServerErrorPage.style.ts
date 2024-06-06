import { Typography, styled } from '@mui/material';

export const StyledEmoticon = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '6rem',
  lineHeight: '9.5rem',
  userSelect: 'none',
  textWrap: 'nowrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
    lineHeight: '7rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: '7rem',
  },
}));
