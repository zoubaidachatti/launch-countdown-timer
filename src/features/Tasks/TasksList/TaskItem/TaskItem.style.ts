import { Layout } from '@/config/constants';
import { TaskStatus } from '@/config/enums';
import { Box, Stack, Theme, alpha, styled } from '@mui/material';

const generateStatusColor = (status: TaskStatus, theme: Theme) => {
  switch (status) {
    case TaskStatus.done:
      return theme.palette.success.light;
    case TaskStatus.inProgress:
      return theme.palette.warning.light;
    case TaskStatus.todo:
    default:
      return theme.palette.secondary.light;
  }
};

const generateStatusTextColor = (status: TaskStatus, theme: Theme) => {
  switch (status) {
    case TaskStatus.done:
      return theme.palette.success.dark;
    case TaskStatus.inProgress:
      return theme.palette.warning.dark;
    case TaskStatus.todo:
    default:
      return theme.palette.secondary.dark;
  }
};

export const RootStyle = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  borderRadius: Layout.borderRadius,
  ':hover': {
    backgroundColor: alpha(theme.palette.grey[200], 0.2),
  },
  boxShadow: theme.shadows[1],
}));

export const StatusStyle = styled(Box)(({ theme }) => ({ status }: { status: string }) => ({
  backgroundColor: alpha(generateStatusColor(status as TaskStatus, theme), 0.5),
  color: generateStatusTextColor(status as TaskStatus, theme),
  padding: '2px 5px',
  borderRadius: Layout.borderRadius,
}));
