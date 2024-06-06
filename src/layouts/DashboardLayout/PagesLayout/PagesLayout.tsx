import { CustomBreadcrumbs, TypographyOverflow } from '@/components';
import { Layout } from '@/config/constants';
import { BreadcrumbsVariants, MediaQueryEnum } from '@/config/enums';
import { useResponsive } from '@/hooks';
import { BreadcrumbLink } from '@/types/interfaces';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { generateBreadcrumbsRoutes } from './PagesLayout.helper';

export const PagesLayout = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const breadcrumbsRoutes: BreadcrumbLink[] = generateBreadcrumbsRoutes(pathname);
  const title = breadcrumbsRoutes[breadcrumbsRoutes.length - 1].label;

  const isMediumScreen = useResponsive(MediaQueryEnum.UP, 'sm');

  return (
    <Stack spacing={Layout.pageSpacing}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        spacing={1.5}
      >
        <TypographyOverflow color={'primary.main'} variant="h4" fontWeight={600}>
          {t(title)}
        </TypographyOverflow>
        <CustomBreadcrumbs
          maxItems={isMediumScreen ? undefined : 2}
          links={breadcrumbsRoutes}
          variant={BreadcrumbsVariants.Categories}
        />
      </Stack>
      <Stack spacing={2}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default PagesLayout;
