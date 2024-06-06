import { ColorsConfig, Layout } from '@/config/constants';
import { PaletteVariants, ToastVariants } from '@/types/interfaces';
import { Stack, alpha, styled } from '@mui/material';

export const RootStyle = styled(Stack)(() => ({ variant }: { variant: ToastVariants }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: 200,
  backgroundColor: variant === 'standard' ? ColorsConfig.grey[50] : 'transparent',
  borderRadius: Layout.borderRadius,
}));

export const CloseIconContainer = styled(Stack)(
  ({ theme }) =>
    ({ variant, type }: { variant: ToastVariants; type: PaletteVariants }) => ({
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      svg: {
        fill: variant === 'outlined' ? theme.palette[type].main : theme.palette[type].dark,
      },
    }),
);
export const ContainerStyle = styled(Stack)(
  ({ theme }) =>
    ({ variant, type }: { variant: ToastVariants; type: PaletteVariants }) => ({
      backdropFilter: 'blur(10px)',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 9,
      width: '100%',
      overflow: 'hidden',

      color: variant === 'filled' ? theme.palette.grey[50] : theme.palette[type].dark,
      borderRadius: Layout.borderRadius,
      borderColor: variant === 'outlined' ? theme.palette[type].main : 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor:
        variant === 'outlined'
          ? theme.palette.grey[100]
          : variant === 'standard'
            ? alpha(theme.palette[type].main, 0.5)
            : theme.palette[type].main,
    }),
);
