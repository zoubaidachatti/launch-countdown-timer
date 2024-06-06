import AppLogo from '@/assets/full.svg?react';
import FacebookIcon from '@/assets/icons/facebook.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import XIcon from '@/assets/icons/twitterx.svg?react';
import { CustomDivider } from '@/components';
import { getCurrentYear } from '@/utils';
import { Grid, Stack, Typography, alpha } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ExtraRoutes, Links } from './LandingFooter.constants';
import { LogoContainer, SocialsContainer, StyledLink } from './LandingFooter.style';

export const LandingFooter = () => {
  const { t } = useTranslation();
  const currentYear = useMemo(() => getCurrentYear(), []);

  return (
    <Stack
      spacing={2}
      paddingInline={'4%'}
      paddingBlock={'30px'}
      width={'100%'}
      bgcolor={(th) => alpha(th.palette.primary.main, 0.1)}
    >
      <Grid container gap={{ xs: 2, sm: 0 }}>
        <Grid item xs={12} sm={3}>
          <LogoContainer alignItems={'center'} justifyContent={'center'}>
            <AppLogo />
          </LogoContainer>
        </Grid>
        {Links.map(({ title, routes }) => (
          <Grid key={title} item xs={12} sm={3}>
            <Stack justifyContent={'center'} spacing={{ sm: 2, xs: 1 }} alignItems={'center'}>
              <Typography fontWeight={700}>{t(title)}</Typography>
              <Stack spacing={{ sm: 1.5, xs: 1 }}>
                {routes.map(({ label }) => (
                  <StyledLink key={title + label}>{t(label)}</StyledLink>
                ))}
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <CustomDivider orientation="horizontal" width="1px" color="grey.400" />
      <Stack
        direction={'row'}
        gap={1}
        flexWrap={'wrap'}
        width={'100%'}
        justifyContent={{ sm: 'space-between', xs: 'center' }}
      >
        <Stack
          direction={'row'}
          gap={1}
          flexWrap={'wrap'}
          alignItems={'center'}
          justifyContent={{ md: 'flex-start', xs: 'center' }}
        >
          <Typography fontWeight={700}>
            {t('dashboard.app_name')} &copy; {currentYear}
          </Typography>
          <Stack
            direction={'row'}
            columnGap={2}
            rowGap={1}
            flexWrap={'wrap'}
            justifyContent={{ xs: 'center' }}
          >
            {ExtraRoutes.map(({ label }) => (
              <StyledLink key={label}>{t(label)}</StyledLink>
            ))}
          </Stack>
        </Stack>
        <SocialsContainer direction={'row'} gap={1} flexWrap={'wrap'}>
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
          <LinkedInIcon />
        </SocialsContainer>
      </Stack>
    </Stack>
  );
};

export default LandingFooter;
