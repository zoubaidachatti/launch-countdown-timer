import AppLogo from '@/assets/full.svg?react';
import { CustomDivider } from '@/components';
import { Backdrop, Stack, Typography, alpha, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { OutletMargin } from '../DashboardLayout.constants';
import { SidebarGroups } from './Sidebar.constants';
import { LogoContainer, RootStyle, StyledSidebarGroup } from './Sidebar.style';
import SidebarSection from './SidebarSection/SidebarSection';
import UserInfoBox from './UserInfoBox/UserInfoBox';

export const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      {isOpen && (
        <Backdrop
          sx={{ zIndex: 1001, visibility: { md: 'hidden', xs: isOpen ? 'visible' : 'hidden' } }}
          open={isOpen}
          onClick={onClose}
        />
      )}
      <RootStyle
        visibility={isOpen ? 'visible' : 'hidden'}
        minWidth={OutletMargin.left.md}
        maxWidth={OutletMargin.left.md}
        overflow={'hidden'}
        zIndex={isOpen ? 1002 : 0}
      >
        <Stack height={'100%'} spacing={1.5} justifyContent={'space-between'}>
          <LogoContainer
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            padding={'12px'}
          >
            <AppLogo />
          </LogoContainer>
          <StyledSidebarGroup spacing={2}>
            {SidebarGroups.map(({ label, sections }, groupIndex) => (
              <Stack key={`group${groupIndex}`} spacing={1} alignItems={'start'}>
                {label && (
                  <>
                    <Typography fontWeight={600} variant="body2">
                      {t(label)}
                    </Typography>
                    <CustomDivider
                      orientation="horizontal"
                      color={alpha(theme.palette.grey[100], 0.2)}
                      width="2px"
                    />
                  </>
                )}
                <Stack width="100%" spacing={1}>
                  {sections.map((groupSection, groupSectionIndex) => (
                    <SidebarSection
                      label={groupSection.label}
                      icon={groupSection.icon}
                      items={groupSection.items}
                      path={groupSection.path}
                      key={`group${groupIndex}${groupSectionIndex}`}
                    />
                  ))}
                </Stack>
              </Stack>
            ))}
          </StyledSidebarGroup>
          <Stack padding={'14px 12px'} justifyContent={'center'} width="100%" alignItems={'center'}>
            <UserInfoBox />
          </Stack>
        </Stack>
      </RootStyle>
    </>
  );
};
