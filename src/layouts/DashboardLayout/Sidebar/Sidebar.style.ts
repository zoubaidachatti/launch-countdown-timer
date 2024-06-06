import { Layout } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({
  background: theme.palette.grey[100],
  height: '100vh',
  justifyContent: 'flex-end',
  position: 'fixed',
  top: 0,
  left: 0,
  overflowY: 'auto',
  boxShadow: theme.shadows[1],
}));

export const StyledBox = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: Layout.borderRadius,
  background: Layout.highlightedBgColor(theme.palette.primary.main),
  svg: {
    fill: theme.palette.text.primary,
    width: 30,
    height: 30,
  },
}));

export const StyledSidebarGroup = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: Layout.borderRadius,
  overflowY: 'auto',
  paddingInline: '12px',
  svg: {
    fill: theme.palette.text.primary,
  },
}));
export const LogoContainer = styled(Stack)(({ theme }) => ({
  svg: {
    fill: theme.palette.primary.main,
    height: 100,
    width: 100,
    transition: 'all 0.5s ease',
    rect: {
      fill: Layout.highlightedBgColor(theme.palette.primary.main),
    },
  },
  '#Layer_1': {
    fill: theme.palette.primary.main,
  },
}));
