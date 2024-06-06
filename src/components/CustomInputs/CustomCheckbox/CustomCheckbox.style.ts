import { Layout } from '@/config/constants';
import { Box, styled } from '@mui/material';

export const RootStyle = styled(Box)(({ theme }) => ({
  borderRadius: Layout.checkboxBorderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
  outline: '1px solid transparent',
  background: theme.palette.grey[50],
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

export const CheckedRootStyle = styled(Box)(({ theme }) => ({
  borderRadius: Layout.checkboxBorderRadius,
  background: theme.palette.grey[50],
  border: `1px solid ${theme.palette.primary.main}`,
  outline: '1px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CheckedBoxStyle = styled(Box)(({ theme }) => ({
  borderRadius: Layout.checkboxBorderRadius,
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
}));
