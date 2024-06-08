import Logo from '@/assets/logo.svg';
import { MediaQueryEnum } from '@/config/enums';
import { useResponsive } from '@/hooks';
import { Drawer, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navbarRoutes } from './LandingNavbar.constants';
import {
  MenuIconContainer,
  StyledButton,
  StyledDrawerRoute,
  StyledRoute,
} from './LandingNavbar.style';

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
        >
          {navbarRoutes.map((route, index) => (
            <StyledDrawerRoute key={`route_${index}_drawer`}>{t(route.label)}</StyledDrawerRoute>
          ))}
        </Stack>
      </Drawer>
      <Stack
        position={'absolute'}
        top={0}
        paddingInline={{ xs: 2.5, md: '2.5rem' }}
        paddingTop={{ xs: 2.5, md: '2.5rem' }}
        width={'100%'}
        bgcolor={'transparent'}
      >
        <Stack
          direction={'row'}
          width={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <img alt={'logo'} src={Logo} style={{ width: '8rem', userSelect: 'none' }} />
          <MenuIconContainer display={{ xs: 'flex', sm: 'none' }}></MenuIconContainer>

          <Stack
            alignItems={'center'}
            spacing={{ xs: '2rem', md: '2.4rem' }}
            direction={'row'}
            display={{ xs: 'none', sm: 'flex' }}
          >
            {navbarRoutes.map((route, index) => (
              <StyledRoute key={`route_${index}`}>{t(route.label)}</StyledRoute>
            ))}
            <StyledButton>{t('content.contact')}</StyledButton>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default LandingNavbar;
