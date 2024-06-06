import { Stack, styled } from '@mui/material';

export const StyledContainer = styled(Stack)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}));
