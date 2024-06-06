import { Layout } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(({ theme }) => ({ isactive }: { isactive: string }) => ({
  cusrsor: 'pointer',
  padding: Layout.sidebarItemsPadding,
  borderRadius: Layout.borderRadius,
  width: '100%',
  backgroundColor:
    isactive === `${true}` ? Layout.highlightedBgColor(theme.palette.primary.main) : '',
  '&:hover': {
    backgroundColor: Layout.highlightedBgColor(theme.palette.primary.main),
  },
  transition: 'background-color .2s ease-in-out',
}));
