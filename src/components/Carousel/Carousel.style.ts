import { ColorsConfig, Layout } from '@/config/constants';
import { Stack, alpha, styled } from '@mui/material';
import { MotionStyle } from 'framer-motion';

export const RootStyle = styled(Stack)(() => ({
  borderRadius: Layout.borderRadius,
  overflow: 'hidden',
  position: 'relative',
  userSelect: 'none',
}));

export const SlideStyle = styled(Stack)(() => ({
  position: 'relative',
  borderRadius: Layout.borderRadius,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

export const SlideImageStyle: MotionStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
};

export const SlideContentStyle: MotionStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  overflow: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: alpha(ColorsConfig.grey[600], 0.5),
};

export const ControlContainer = styled(Stack)(() => ({
  position: 'absolute',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '7px',
  svg: {
    fill: alpha(ColorsConfig.grey[300], 0.8),
    width: 50,
    height: 50,
  },
}));
