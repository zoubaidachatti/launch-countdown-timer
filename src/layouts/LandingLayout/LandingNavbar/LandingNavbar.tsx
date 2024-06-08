import StackIcon from '@/assets/icon-menu.svg?react';
import CloseIcon from '@/assets/icon-menu-close.svg?react';
import LogoIcon from '@/assets/logo.svg?react';
import { MediaQueryEnum } from '@/config/enums';
import { useResponsive } from '@/hooks';
import { Drawer, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navbarRoutes } from './LandingNavbar.constants';
import { MenuIconContainer, StyledRoute } from './LandingNavbar.style';

export const LandingNavbar = () => {
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isSmallScreen = useResponsive(MediaQueryEnum.DOWN, 'sm') as boolean;

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
          spacing={'2.4rem'}
          direction={'column'}
          minWidth={'80vw'}
          height={'100vh'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
        >
          <Stack
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                setOpenDrawer(false);
              }
            }}
            component={'div'}
            tabIndex={0}
            position={'absolute'}
            top={12}
            right={12}
          >
            <CloseIcon />
          </Stack>
          {navbarRoutes.map((route, index) => (
            <StyledRoute key={`route_${index}_drawer`}>{t(route.label)}</StyledRoute>
          ))}
        </Stack>
      </Drawer>
      <Stack top={0} width={'100%'} bgcolor={'transparent'}>
        <Stack
          direction={'row'}
          width={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <LogoIcon />
          <MenuIconContainer
            display={{ xs: 'flex', sm: 'none' }}
            onClick={() => setOpenDrawer(true)}
            tabIndex={0}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                setOpenDrawer(true);
              }
            }}
          >
            <StackIcon />
          </MenuIconContainer>
          <Stack
            alignItems={'center'}
            spacing={{ xs: '2rem', md: '2.4rem' }}
            direction={'row'}
            display={{ xs: 'none', sm: 'flex' }}
          >
            {navbarRoutes.map((route, index) => (
              <StyledRoute key={`route_${index}`}>{t(route.label)}</StyledRoute>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default LandingNavbar;
