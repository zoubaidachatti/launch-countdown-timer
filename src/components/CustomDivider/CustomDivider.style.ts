import { Layout } from '@/config/constants';
import { Box, styled } from '@mui/material';

export const VerticalDivider = styled(Box)(() => ({
  height: '100%',
  borderRadius: Layout.borderRadius,
}));
export const HorizontalDivider = styled(Box)(() => ({
  width: '100%',
  borderRadius: Layout.borderRadius,
}));
