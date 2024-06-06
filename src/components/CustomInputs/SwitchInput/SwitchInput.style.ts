import { ColorsConfig, Layout } from '@/config/constants';
import { Stack, styled } from '@mui/material';

export const SwitchContainer = styled(Stack)(({ theme }) => ({ on }: { on?: string }) => ({
  borderRadius: Layout.borderRadius,
  position: 'relative',
  padding: 5,
  background:
    on === `${true}`
      ? Layout.linearGradient(
          theme.palette.primary.dark,
          theme.palette.primary.main,
          theme.palette.primary.light,
        )
      : ColorsConfig.grey[700],
  ':hover': {
    background: on === `${true}` ? theme.palette.primary.light : theme.palette.grey[700],
  },
}));

export const SwitchChecked = styled(Stack)(() => ({
  borderRadius: 3,
  background: ColorsConfig.grey[50],
  position: 'absolute',
  top: 2,
  transition: 'right 0.1s linear',
}));
