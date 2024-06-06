import { MediaQueryEnum } from '@/config/enums';
import { useResponsive } from '@/hooks';
import { Stack } from '@mui/material';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppLoading } from '..';
import { FooterHeight, NavbarHeight, OutletMargin } from './DashboardLayout.constants';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';

export function DashboardLayout() {
  const isMediumScreen = useResponsive(MediaQueryEnum.UP, 'md') as boolean;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(isMediumScreen);
  const onOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const onCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <Stack direction="row" alignItems={'flex-start'} width={'100vw'} position={'relative'}>
      <Sidebar isOpen={isSidebarOpen} onClose={onCloseSidebar} />
      <Stack height={'100%'} width={'100%'} direction={'column'} zIndex={1000}>
        <Navbar isSidebarOpen={isSidebarOpen} onClickMenu={onOpenSidebar} />
        <Stack
          position={'relative'}
          minHeight={`calc(100vh - ${NavbarHeight.md})`}
          marginTop={OutletMargin.top}
          marginLeft={isSidebarOpen ? OutletMargin.left : 0}
          width={{
            xs: '100%',
            md: `calc(100% - ${isSidebarOpen ? OutletMargin.left.md : 0})`,
          }}
          padding={'14px 1.5%'}
          sx={{ transition: 'margin .3s ease' }}
        >
          <Stack marginBottom={FooterHeight}>
            <Suspense fallback={<AppLoading />}>
              <Outlet />
            </Suspense>
          </Stack>
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
}
