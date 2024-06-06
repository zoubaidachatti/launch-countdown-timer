import { Layout } from '@/config/constants';
import { ActivityStatus } from '@/config/enums';
import { Box, Stack, Theme, alpha, styled } from '@mui/material';

const generateStatusColor = (status: ActivityStatus, theme: Theme) => {
  switch (status) {
    case ActivityStatus.online:
      return theme.palette.success.light;
    case ActivityStatus.offline:
      return theme.palette.grey.A100;
    case ActivityStatus.away:
      return theme.palette.warning.light;
    case ActivityStatus.busy:
    default:
      return theme.palette.error.light;
  }
};

export const RootStyle = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  borderRadius: Layout.borderRadius,
  ':hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.2),
  },
}));
export const ActivityStatusStyle = styled(Box)(({ theme }) => ({ status }: { status: string }) => ({
  width: 10,
  height: 10,
  backgroundColor: generateStatusColor(status as ActivityStatus, theme),
  border: `2px solid ${theme.palette.grey[50]}`,
  position: 'absolute',
  right: 0,
  bottom: 0,
  borderRadius: '50%',
}));
