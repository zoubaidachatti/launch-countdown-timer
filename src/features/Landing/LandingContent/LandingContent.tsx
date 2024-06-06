import { Stack, Typography } from '@mui/material';
import { RootStyle } from './LandingContent.style';
import { useTranslation } from 'react-i18next';
import LandingContentCard from './LandingContentCard/LandingContentCard';
import { Cards } from './LandingContent.constants';
export const LandingContent = () => {
  const { t } = useTranslation();
  return (
    <RootStyle spacing={3}>
      <Stack alignItems={'center'} spacing={2}>
        <Typography variant="h2" textAlign={'center'} fontWeight={800}>
          {t('landing.key_features.title')}
        </Typography>
        <Typography variant="h5" maxWidth={700} textAlign={'center'}>
          {t('landing.key_features.description')}
        </Typography>
      </Stack>
      <Stack
        direction={'row'}
        gap={3}
        alignItems={'center'}
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        {Cards.map((card) => (
          <LandingContentCard {...card} key={card.title} />
        ))}
      </Stack>
    </RootStyle>
  );
};

export default LandingContent;
