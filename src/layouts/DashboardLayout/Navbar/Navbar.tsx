import MenuIcon from '@/assets/icons/menu.svg?react';
import { CustomDivider, ModeSelector, SVGContainer, ThemeSelector } from '@/components';
import { Layout, RouterPaths } from '@/config/constants';
import { LanguageSelector, Messages } from '@/features';
import { Events } from '@/features/Events';
import { Notifications } from '@/features/Notifications';
import { Tasks } from '@/features/Tasks';
import { useAppSelector } from '@/redux/hooks';
import { Avatar, Badge, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { OutletMargin } from '../DashboardLayout.constants';
import { RootStyle } from './Navbar.style';
import { useResponsive } from '@/hooks';
import { MediaQueryEnum } from '@/config/enums';

export const Navbar = ({
  isSidebarOpen,
  onClickMenu,
}: {
  isSidebarOpen: boolean;
  onClickMenu: () => void;
}) => {
  const navigate = useNavigate();
  const isXSScreen = useResponsive(MediaQueryEnum.DOWN, 'sm') as boolean;
  const badgeVariant = isXSScreen ? 'dot' : 'standard';

  const user = useAppSelector((state) => state.authReducer);

  const navigateToProfile = () => {
    navigate(RouterPaths.DashboardPaths.profilePath);
  };

  const IconContainer = ({ icon, onClick }: { icon: ReactNode; onClick?: () => void }) => (
    <SVGContainer isinverted={`${true}`} onClick={onClick}>
      {icon}
    </SVGContainer>
  );

  return (
    <RootStyle
      direction={'row'}
      justifyContent={'space-between'}
      width={{
        xs: '100%',
        md: `calc(100% - ${isSidebarOpen ? OutletMargin.left.md : 0})`,
      }}
    >
      <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} gap={2}>
        <IconContainer onClick={onClickMenu} icon={<MenuIcon />} />
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={{ xs: 1.5, sm: '1rem' }}>
        <Stack direction={'row'} alignItems={'center'} gap={{ xs: 1, sm: '1rem' }}>
          <Badge variant={badgeVariant} badgeContent={user.notificationCount} color="primary">
            <Notifications />
          </Badge>
          <Badge variant={badgeVariant} badgeContent={user.inboxCount} color="primary">
            <Messages />
          </Badge>
          <Badge variant={badgeVariant} badgeContent={user.tasksCount} color="primary">
            <Tasks />
          </Badge>
        </Stack>
        <CustomDivider orientation="vertical" color={'grey.300'} width="2px" />
        <Stack direction={'row'} alignItems={'center'} gap={{ xs: 1, sm: '1rem' }}>
          <LanguageSelector />
          <ModeSelector />
          <ThemeSelector />
        </Stack>
        <CustomDivider orientation="vertical" color={'grey.300'} width="2px" />
        <Stack direction={'row'} alignItems={'center'} gap={{ xs: 1, sm: '1rem' }}>
          <Badge variant={badgeVariant} badgeContent={user.eventsCount} color="primary">
            <Events />
          </Badge>
          <Avatar
            sx={(th) => ({
              background: Layout.linearGradient(
                th.palette.primary.dark,
                th.palette.primary.main,
                th.palette.primary.light,
              ),
              cursor: 'pointer',
            })}
            variant="circular"
            src={user.photo}
            onClick={navigateToProfile}
          />
        </Stack>
      </Stack>
    </RootStyle>
  );
};

export default Navbar;
