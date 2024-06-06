import MenuIcon from '@/assets/icons/menu.svg?react';
import AppLogoSmall from '@/assets/small.svg?react';
import { RouterPaths } from '@/config/constants';
import { MediaQueryEnum } from '@/config/enums';
import { useResponsive, useScroll } from '@/hooks';
import { Drawer, Stack, alpha } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { NavbarHeight } from '../LandingLayout.constants';
import { navbarRoutes } from './LandingNavbar.constants';
import {
  MenuIconContainer,
  StyledButton,
  StyledDrawerRoute,
  StyledRoute,
} from './LandingNavbar.style';

export const LandingNavbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isSmallScreen = useResponsive(MediaQueryEnum.DOWN, 'sm') as boolean;
  const isPastThreshold = useScroll();

  useEffect(() => {
    if (!isSmallScreen) {
      setOpenDrawer(false);
    }
  }, [isSmallScreen]);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        ModalProps={{
          sx: {
            '& .MuiDrawer-paper': {
              backgroundColor: (th) => th.palette.grey[50],
            },
          },
        }}
      >
        <Stack
          spacing={1}
          direction={'column'}
          minWidth={'80vw'}
          height={'100vh'}
          justifyContent={'center'}
        >
          {navbarRoutes.map((route, index) => (
            <StyledDrawerRoute key={`route_${index}_drawer`}>{t(route.label)}</StyledDrawerRoute>
          ))}
        </Stack>
      </Drawer>
      <Stack
        position={'fixed'}
        minHeight={NavbarHeight}
        justifyContent={'center'}
        paddingInline={{ xs: 2, md: 10 }}
        width={'100%'}
        zIndex={11}
        bgcolor={(theme) => (isPastThreshold ? alpha(theme.palette.grey[100], 0.5) : 'transparent')}
        sx={{
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Stack
          direction={'row'}
          width={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <MenuIconContainer
            display={{ xs: 'flex', sm: 'none' }}
            direction={'row'}
            spacing={1}
            scrolling={`${isPastThreshold}`}
          >
            <MenuIcon onClick={() => setOpenDrawer((prev) => !prev)} />
            <AppLogoSmall
              id={'logo'}
              onClick={() => navigate(RouterPaths.DashboardPaths.homePath)}
            />
          </MenuIconContainer>
          <Stack>
            {!isSmallScreen && (
              <StyledRoute
                scrolling={`${isPastThreshold}`}
                sx={{ fontWeight: 700, fontSize: '1.4rem' }}
                onClick={() => navigate(RouterPaths.DashboardPaths.homePath)}
              >
                <AppLogoSmall />
              </StyledRoute>
            )}
          </Stack>
          <Stack spacing={1} direction={'row'} display={{ xs: 'none', sm: 'flex' }}>
            {navbarRoutes.map((route, index) => (
              <StyledRoute scrolling={`${isPastThreshold}`} key={`route_${index}`}>
                {t(route.label)}
              </StyledRoute>
            ))}
          </Stack>
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <StyledRoute
              scrolling={`${isPastThreshold}`}
              onClick={() => navigate(RouterPaths.AuthPaths.loginPath)}
            >
              {t('auth.login')}
            </StyledRoute>
            <StyledButton
              onClick={() => navigate(RouterPaths.RegisterPaths.inscriptionPath)}
              variant={'contained'}
            >
              {t('auth.register')}
            </StyledButton>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default LandingNavbar;
