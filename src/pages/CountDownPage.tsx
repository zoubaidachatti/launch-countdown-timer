import FBIcon from '@/assets/icons/icon-facebook.svg?react';
import IgIcon from '@/assets/icons/icon-instagram.svg?react';
import PinterestIcon from '@/assets/icons/icon-pinterest.svg?react';
import { Counter } from '@/features';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SVGContainer } from './CountDownPage.style';

export const CountDownPage = () => {
  const { t } = useTranslation();
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'space-between'}
      height="100vh"
      paddingBlock={2.5}
      paddingInline={{ xs: 1, sm: 2 }}
    >
      <Stack
        justifyContent={'center'}
        padding={{ xs: 1, sm: 4 }}
        spacing={7}
        height={'calc(100% - 100px)'}
      >
        <Typography textAlign={'center'} color="grey.50" variant="h2">
          {t('content.title')}
        </Typography>
        <Counter />
      </Stack>
      <SVGContainer spacing={'3.2rem'} direction={'row'} alignItems={'center'}>
        <FBIcon />
        <PinterestIcon />
        <IgIcon />
      </SVGContainer>
    </Stack>
  );
};

export default CountDownPage;
