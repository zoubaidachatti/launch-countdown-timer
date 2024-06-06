import { CustomCard, CustomTabs } from '@/components';
import { Stack, Typography } from '@mui/material';
import { tabs, tabsVariants } from './TabsPage.constants';
import { useTranslation } from 'react-i18next';

export function TabsPage() {
  const { t } = useTranslation();
  return (
    <CustomCard header="tab.basic_tabs">
      <Stack spacing={2} paddingBlock={3}>
        {tabsVariants.map((tabVariant) => (
          <Stack spacing={1} key={tabVariant.id}>
            <Typography variant="h4">{t(tabVariant.label)}</Typography>
            <CustomTabs tabs={tabs} variant={tabVariant.variant} />
          </Stack>
        ))}
      </Stack>
    </CustomCard>
  );
}

export default TabsPage;
