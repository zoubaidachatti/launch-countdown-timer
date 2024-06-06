import { Box, styled } from '@mui/material';

export const RootStyle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.grey[300]}`,
  outline: '1px solid transparent',
  background: theme.palette.grey[50],
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

export const CheckedRootStyle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  background: theme.palette.grey[50],
  border: `1px solid ${theme.palette.primary.main}`,
  outline: '1px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CheckedRadioStyle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
}));
