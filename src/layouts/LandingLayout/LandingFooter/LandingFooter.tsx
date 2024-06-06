import FbLogo from '@/assets/icons/facebook.svg?react';
import IgLogo from '@/assets/icons/instagram.svg?react';
import PinterestLogo from '@/assets/icons/pinterest.svg?react';
import TwitterLogo from '@/assets/icons/twitter.svg?react';
import Logo from '@/assets/logo.svg?react';
import { fontFamily2 } from '@/theme/typography';
import { Stack, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { Routes, challenger, challengerLink, coder, coderLink } from './LandingFooter.constants';
import { LogoContainer, SocialsContainer, StyledLink, StyledRoute } from './LandingFooter.style';

export const LandingFooter = () => {
  const { t } = useTranslation();
  return (
    <Stack padding={'3rem'} width={'100%'} bgcolor={'primary.light'}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Stack
        alignItems={'center'}
        spacing={{ xs: '2rem', md: '2.4rem' }}
        direction={'row'}
        margin={'2rem 0 4rem'}
        justifyContent={'center'}
      >
        {Routes.map((route, index) => (
          <StyledRoute key={`route_${index}`}>{t(route.label)}</StyledRoute>
        ))}
      </Stack>
      <Stack>
        <SocialsContainer direction={'row'}>
          <FbLogo /> <IgLogo /> <TwitterLogo /> <PinterestLogo />
        </SocialsContainer>
        <Typography
          textAlign={'center'}
          fontSize={'.9rem'}
          color="grey.900"
          fontFamily={fontFamily2}
        >
          <Trans
            i18nKey={'content.challenged_by_code_by'}
            values={{
              challenger: challenger,
              coder: coder,
            }}
            components={{
              a: <StyledLink href={challengerLink} target="_blank" rel="noopener noreferrer" />,
              span: <StyledLink href={coderLink} target="_blank" rel="noopener noreferrer" />,
            }}
          />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LandingFooter;
