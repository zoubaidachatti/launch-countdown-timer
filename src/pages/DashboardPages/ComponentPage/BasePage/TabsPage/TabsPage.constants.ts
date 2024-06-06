import { TabsVariantEnum } from '@/config/enums';
import { TabType } from '@/types/interfaces';
import { generateUniqueIds } from '@/utils';

export const uniqueIds = generateUniqueIds(2);

export const tabsVariants = [
  {
    id: uniqueIds[0],
    label: 'tab.rounded_tabs',
    variant: TabsVariantEnum.Rounded,
  },
  {
    id: uniqueIds[1],
    label: 'tab.underlined_tabs',
    variant: TabsVariantEnum.Underlined,
  },
];

export const tabs: TabType[] = [
  {
    label: 'tab.item_1',
    value: 0,
  },
  {
    label: 'tab.item_2',
    value: 1,
  },
  {
    label: 'tab.item_3',
    value: 2,
  },
  {
    label: 'tab.disabled_tab',
    value: 3,
    disabled: true,
  },
];
