import { ColorsConfig, Layout } from '@/config/constants';
import { Box, Stack, alpha, styled } from '@mui/material';
import { IndicatorHeight } from './SlidesIndicator.constants';

export const IndicatorsContainer = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  bottom: 0,
  height: IndicatorHeight,
}));

export const IndicatorStyle = styled(Box)(() => ({ isselected }: { isselected?: string }) => ({
  width: 15,
  height: 15,
  backgroundColor:
    isselected === `${true}` ? ColorsConfig.grey[300] : alpha(ColorsConfig.grey[300], 0.8),
  borderRadius: Layout.borderRadius,
  cursor: isselected === `${true}` ? 'default' : 'pointer',
  pointerEvents: isselected === `${true}` ? 'none' : undefined,
}));

export const CustomIndicatorStyle = styled(Box)(
  () =>
    ({ isselected }: { isselected?: string }) => ({
      cursor: isselected === `${true}` ? 'default' : 'pointer',
      pointerEvents: isselected === `${true}` ? 'none' : undefined,
      svg: {
        fill:
          isselected === `${true}` ? ColorsConfig.grey[300] : alpha(ColorsConfig.grey[300], 0.8),
      },
    }),
);
