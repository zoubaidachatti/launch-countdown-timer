import { Layout } from '@/config/constants';
import { Theme } from '@mui/material';
import { CSSProperties } from 'react';

export const tooltipContentStyle = (theme: Theme): CSSProperties => ({
  borderRadius: Layout.borderRadius,
  backgroundColor: theme.palette.grey[50],
  boxShadow: theme.shadows[1],
});
