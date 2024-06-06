import { Layout } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({ isactive }: { isactive: string }) => ({
  backgroundColor:
    isactive === `${true}` ? Layout.highlightedBgColor(theme.palette.primary.main) : '',
  cursor: 'pointer',
  width: '100%',
  padding: Layout.sidebarItemsPadding,
  borderRadius: Layout.borderRadius,
  '&:hover': {
    backgroundColor: Layout.highlightedBgColor(theme.palette.primary.main),
  },
  transition: 'background-color .2s ease-in-out',
}));

export const StyledStack = styled(Stack)(() => ({
  cursor: 'pointer',
  width: '100%',
}));

export const IconContainerStyle = styled(Stack)(() => ({
  svg: {
    width: 17,
    height: 17,
  },
}));
