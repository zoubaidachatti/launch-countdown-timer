import { Layout } from '@/config/constants';
import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({ isdark }: { isdark?: string }) => ({
  borderRadius: Layout.borderRadius,
  width: 140,
  height: 140,
  cursor: 'pointer',
  border: '2px solid transparent',
  color: isdark === `${true}` ? theme.palette.grey[50] : theme.palette.text.primary,
  svg: {
    fill: isdark === `${true}` ? theme.palette.grey[50] : theme.palette.text.primary,
  },
}));
