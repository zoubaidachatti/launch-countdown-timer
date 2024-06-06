import { Stack, styled } from '@mui/material';
import BgImage from '@/assets/images/image-header.jpg';
import BgImageDesktop from '@/assets/images/image-header-desktop.jpg';

export const RootStyle = styled(Stack)(({ theme }) => ({
  backgroundImage: `url(${BgImageDesktop})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${BgImage})`,
  },
}));
