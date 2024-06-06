import { TabsVariantEnum } from '@/config/enums';
import { TabType } from '@/types/interfaces';

export type CustomTabsProps = {
  tabs: TabType[];
  defaultTabValue?: number | string;
  variant?: TabsVariantEnum;
};
