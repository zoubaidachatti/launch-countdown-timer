import { Stack, styled } from '@mui/material';

export const RootStyle = styled(Stack)(() => ({ src }: { src: string }) => ({
  backgroundImage: `url(${src})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));
