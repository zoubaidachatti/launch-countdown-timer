import { ColorsConfig, Layout } from '@/config/constants';
import { OrientationType, SizeType } from '@/types/interfaces';
import { SimplePaletteColorOptions, Stack, styled } from '@mui/material';

export const SimpleSwitchContainer = styled(Stack)(
  ({ theme }) =>
    ({ orientation, size }: { orientation: OrientationType; size: SizeType }) => ({
      height: 20,
      width: 40,
      cursor: 'pointer',
      borderRadius: 5,
      position: 'relative',
      background: Layout.linearGradient(
        theme.palette.primary.dark,
        theme.palette.primary.main,
        theme.palette.primary.light,
      ),
      transform: `scale(${size === 'medium' ? '1.3' : size === 'large' ? '1.5' : '1'}) translateX(${size === 'medium' ? '-5' : size === 'large' ? '-7' : '0'}px) rotate(${orientation === 'vertical' ? '90' : '0'}deg)`,
    }),
);

export const IconContainer = styled(Stack)(({ theme }) => ({ isdark }: { isdark?: string }) => ({
  borderRadius: 5,
  backgroundColor: Layout.highlightedBgColor(theme.palette.primary.main),
  height: 'calc(100% - 4px)',
  width: '40%',
  top: 2,
  left: isdark === `${true}` ? '5%' : '55%',
  transition: 'left .3s ease-in-out',
  position: 'absolute',
  svg: {
    fill: ColorsConfig.grey?.[200],
  },
}));

export const RootStyle = styled(Stack)(
  () =>
    ({
      isdark,
      orientation,
      size,
    }: {
      isdark: string;
      orientation: OrientationType;
      size: SizeType;
    }) => ({
      borderRadius: 42,
      width: 36,
      height: 20,
      cursor: 'pointer',
      backgroundColor:
        isdark === `${true}`
          ? (ColorsConfig.primary as SimplePaletteColorOptions).dark
          : (ColorsConfig.info as SimplePaletteColorOptions).light,
      position: 'relative',
      overflow: 'hidden',
      transform: `scale(${size === 'medium' ? '1.3' : size === 'large' ? '1.5' : '1'}) translateX(${size === 'medium' ? '-5' : size === 'large' ? '-7' : '0'}px) rotate(${orientation === 'vertical' ? '90' : '0'}deg)`,
      transition: 'background-color ease-in 300ms',
    }),
);

export const StyledStack = styled(Stack)(() => ({ transform }: { transform: string }) => ({
  transform: transform,
  transition: '300ms all linear',
}));

export const CircleStyle = styled(Stack)(({ theme }) => ({ isdark }: { isdark: string }) => ({
  position: 'absolute',
  width: 16,
  height: 16,
  borderRadius: '50%',
  top: 2,
  left: isdark === `${true}` ? 18 : 2,
  boxShadow:
    isdark === `${true}`
      ? `inset -5px -2px 0px 0px ${ColorsConfig.grey?.[50]}`
      : `inset -20px 0px 0px 0px ${theme.palette.warning.light}`,
  transition: 'all 300ms linear',
}));
