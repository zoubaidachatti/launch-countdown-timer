import { Layout } from '@/config/constants';
import { Box, Stack, styled } from '@mui/material';

export const BannerStyle = styled(Box)(({ theme }) => ({
  borderRadius: Layout.borderRadius,
  width: '100%',
  height: 110,
  background: Layout.linearGradient(
    theme.palette.primary.dark,
    theme.palette.primary.main,
    theme.palette.primary.light,
  ),
}));

export const StyledContent = styled(Stack)(() => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  alignItems: 'center',
}));

export const AvatarStyle = styled(Stack)(({ theme }) => ({
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  width: 68,
  height: 68,
  border: `4px solid ${theme.palette.grey[50]}`,
  '& .MuiAvatar-root': {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.grey[200],
  },
}));
