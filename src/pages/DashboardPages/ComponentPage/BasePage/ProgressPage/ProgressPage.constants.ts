import { generateUniqueIds } from '@/utils';

const uniqueIds = generateUniqueIds(13);

export const progressColors = [
  { label: 'common.primary', color: 'primary', id: uniqueIds[0], value: 10 },
  { label: 'common.secondary', color: 'secondary', id: uniqueIds[1], value: 30 },
  { label: 'common.info', color: 'info', id: uniqueIds[2], value: 50 },
  { label: 'common.warning', color: 'warning', id: uniqueIds[3], value: 70 },
  { label: 'common.success', color: 'success', id: uniqueIds[4], value: 90 },
  { label: 'common.error', color: 'error', id: uniqueIds[5], value: 100 },
];

export const progressSizes = [
  { label: 'common.small', size: 'small', id: uniqueIds[6], value: 10 },
  { label: 'common.medium', size: 'medium', id: uniqueIds[7], value: 50 },
  { label: 'common.large', size: 'large', id: uniqueIds[8], value: 100 },
];

export const progressVariants = [
  { label: 'progress.determinate', variant: 'determinate', id: uniqueIds[9], value: 20 },
  { label: 'progress.indeterminate', variant: 'indeterminate', id: uniqueIds[10], value: 50 },
  { label: 'progress.buffer', variant: 'buffer', id: uniqueIds[11], value: 20, valueBuffer: 60 },
  { label: 'progress.query', variant: 'query', id: uniqueIds[12], value: 20 },
];
