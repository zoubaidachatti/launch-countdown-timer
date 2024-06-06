import { generateUniqueIds } from '@/utils';

const uniqueIds = generateUniqueIds(13);

export const badgeColors = [
  { label: 'common.primary', color: 'primary', id: uniqueIds[0], count: 52 },
  { label: 'common.secondary', color: 'secondary', id: uniqueIds[1], count: 74 },
  { label: 'common.info', color: 'info', id: uniqueIds[2], count: 66 },
  { label: 'common.warning', color: 'warning', id: uniqueIds[3], count: 25 },
  { label: 'common.success', color: 'success', id: uniqueIds[4], count: 3 },
  { label: 'common.error', color: 'error', id: uniqueIds[5], count: 2 },
];
export const badgeVariants = [
  { label: 'badge.standard', variant: 'standard', id: uniqueIds[6], count: 60 },
  { label: 'badge.dot', variant: 'dot', id: uniqueIds[7], count: 80 },
];

export const badgeAlignments: {
  label: string;
  vertical: 'top' | 'bottom';
  horizontal: 'right' | 'left';
  id: number;
  count: number;
}[] = [
  { label: 'badge.top_right', vertical: 'top', horizontal: 'right', id: uniqueIds[8], count: 60 },
  { label: 'badge.top_left', vertical: 'top', horizontal: 'left', id: uniqueIds[9], count: 68 },
  {
    label: 'badge.bottom_left',
    vertical: 'bottom',
    horizontal: 'left',
    id: uniqueIds[10],
    count: 63,
  },
  {
    label: 'badge.bottom_right',
    vertical: 'bottom',
    horizontal: 'right',
    id: uniqueIds[11],
    count: 23,
  },
];
