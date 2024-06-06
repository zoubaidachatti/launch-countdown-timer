import { Typography } from '@mui/material';
import { RootStyle } from './HeroSection.style';
import { useTranslation } from 'react-i18next';
import DownArrowIcon from '@/assets/icons/long_down_arrow.svg?react';

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <RootStyle
      alignItems={'center'}
      paddingTop={'6rem'}
      height={'100vh'}
      paddingInline={{ xs: 2.5, md: '2.5rem' }}
    >
      <Typography
        fontSize={{
          sm: '3rem',
          xs: '2rem',
        }}
        textAlign={'center'}
        color={'grey.50'}
        variant="h1"
        margin={'4rem 0 4rem'}
      >
        {t('content.we_are_creatives')}
      </Typography>
      <DownArrowIcon />
    </RootStyle>
  );
};

export default HeroSection;
