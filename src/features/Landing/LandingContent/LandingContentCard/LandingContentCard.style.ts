import { Layout } from '@/config/constants';
import { Button, Stack, keyframes, styled } from '@mui/material';

const rotateY = 'rotateY(180deg)';

const rotation = keyframes`
    0% {
      transform: rotateZ(0deg);
    }
    0% {
      transform: rotateZ(360deg);
    }
`;

// card
export const RootStyle = styled(Stack)(() => ({
  overflow: 'visible',
  width: 220,
  height: 220,
  ':hover': {
    '#content': {
      transform: rotateY,
    },
  },
}));

// #content
export const ContentStyle = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 300ms',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  borderRadius: Layout.borderRadius,
}));

// front card style
export const FrontCardStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: Layout.borderRadius,
  overflow: 'hidden',
  transform: rotateY,
}));

// back card style
export const BackCardStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: Layout.borderRadius,
  overflow: 'hidden',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  '::before': {
    position: 'absolute',
    content: '""',
    display: 'block',
    width: 160,
    height: '160%',
    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.light}, ${theme.palette.primary.light}, ${theme.palette.primary.light}, ${theme.palette.primary.light}, transparent)`,
    animation: `${rotation} 5000ms infinite linear`,
  },
}));

// back content style
export const BackContentStyle = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  width: '99%',
  height: '99%',
  backgroundColor: theme.palette.grey[100],
  borderRadius: Layout.borderRadius,
  padding: 10,
}));

// front content style
export const FrontContentStyle = styled(Stack)(() => ({
  padding: 10,
  position: 'absolute',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  background: 'transparent',
  border: `1px solid ${theme.palette.primary.main}`,
}));
