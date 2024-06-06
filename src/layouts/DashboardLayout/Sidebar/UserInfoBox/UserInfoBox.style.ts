import { Stack, styled } from '@mui/material';

export const SVGBox = styled(Stack)(() => ({
  cursor: 'pointer',
  top: 10,
  right: 4,
  position: 'absolute',
  svg: {
    width: '20px !important',
    height: '20px !important',
  },
}));
