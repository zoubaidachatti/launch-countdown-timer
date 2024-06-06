import { CustomBreadcrumbs, CustomCard } from '@/components';
import { Stack, Typography } from '@mui/material';
import {
  BreadcrumbLinksWithIcons,
  BreadcrumbsLinks,
  breadcrumbsVariants,
} from './BreadcrumbsPage.constants';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '@/hooks';
import { MediaQueryEnum } from '@/config/enums';

export function BreadcrumbsPage() {
  const { t } = useTranslation();
  const isMediumScreen = useResponsive(MediaQueryEnum.UP, 'sm');

  return (
    <CustomCard header="breadcrumb.basic_breadcrumbs">
      <Stack spacing={3}>
        {breadcrumbsVariants.map(({ label, separator, variant, breadcrumbComponent, id }) => (
          <Stack key={id} spacing={2}>
            <Typography variant="h4">{t(label)}</Typography>
            <CustomBreadcrumbs
              separator={separator}
              variant={variant}
              links={BreadcrumbsLinks}
              breadcrumbComponent={breadcrumbComponent}
              maxItems={isMediumScreen ? undefined : 2}
            />
          </Stack>
        ))}

        <Stack spacing={2}>
          <Typography variant="h4">{t('breadcrumb.breadcrumbs_with_icons')}</Typography>
          <Stack spacing={1.5}>
            <CustomBreadcrumbs
              variant={breadcrumbsVariants[1].variant}
              links={BreadcrumbLinksWithIcons}
              maxItems={isMediumScreen ? undefined : 2}
            />
            <CustomBreadcrumbs
              variant={breadcrumbsVariants[3].variant}
              breadcrumbComponent={breadcrumbsVariants[3].breadcrumbComponent}
              links={BreadcrumbLinksWithIcons}
              maxItems={isMediumScreen ? undefined : 2}
            />
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h4">{`${t('breadcrumb.breadcrumbs_with_max_items')} (maxItems = 2)`}</Typography>
          <Stack spacing={1.5}>
            <CustomBreadcrumbs
              variant={breadcrumbsVariants[0].variant}
              links={BreadcrumbLinksWithIcons}
              maxItems={2}
            />
            <CustomBreadcrumbs
              variant={breadcrumbsVariants[3].variant}
              breadcrumbComponent={breadcrumbsVariants[3].breadcrumbComponent}
              links={BreadcrumbLinksWithIcons}
              maxItems={2}
            />
          </Stack>
        </Stack>
      </Stack>
    </CustomCard>
  );
}

export default BreadcrumbsPage;
