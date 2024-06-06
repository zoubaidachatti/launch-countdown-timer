import { AppSkeleton, LandingContent } from '@/features';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  HeroSectionStyle,
  StyledButton,
  StyledDescription,
  StyledTitle,
} from './LandingPage.style';

export const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <Stack width={'100%'}>
      <Stack direction={'column'} zIndex={10} position={'relative'}>
        <HeroSectionStyle
          direction={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
          spacing={{ xs: '42px', md: 1 }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          <Stack
            spacing={3}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            zIndex={12}
            maxWidth={{ xs: '100%', sm: 400 }}
            overflow={'visible'}
          >
            <Stack spacing={{ md: 4, xs: 2 }} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <StyledTitle>{t('landing.title')}</StyledTitle>
              <StyledDescription textAlign={{ xs: 'center', md: 'left' }}>
                {t('landing.description')}
              </StyledDescription>
            </Stack>
            <StyledButton variant="outlined">{t('common.get_started')}</StyledButton>
          </Stack>
          <AppSkeleton />
        </HeroSectionStyle>
      </Stack>

      <LandingContent />
    </Stack>
  );
};

export default LandingPage;
