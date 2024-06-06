import { generateUniqueIds } from '@/utils';

export const uniqueIds = generateUniqueIds(18);

export const SpinnerColors = [
  { id: uniqueIds[0], color: 'primary', label: 'common.primary' },
  { id: uniqueIds[1], color: 'secondary', label: 'common.secondary' },
  { id: uniqueIds[2], color: 'error', label: 'common.error' },
  { id: uniqueIds[3], color: 'warning', label: 'common.warning' },
  { id: uniqueIds[4], color: 'info', label: 'common.info' },
  { id: uniqueIds[5], color: 'success', label: 'common.success' },
];

export const SpinnerSizes = [
  { id: uniqueIds[6], size: '1rem', label: 'spinner.one_rem' },
  { id: uniqueIds[7], size: '3rem', label: 'spinner.three_rem' },
  { id: uniqueIds[8], size: '4rem', label: 'spinner.four_rem' },
];

export const SpinnersVariants = [
  { id: uniqueIds[9], variant: 'indeterminate', label: 'spinner.indeterminate' },
  { id: uniqueIds[10], variant: 'determinate', label: 'spinner.determinate' },
];

export const DeterminateSpinnerValues = [
  {
    id: uniqueIds[11],
    value: 10,
    color: 'primary',
  },
  {
    id: uniqueIds[12],
    value: 25,
    color: 'secondary',
  },
  {
    id: uniqueIds[13],
    value: 50,
    color: 'error',
  },
  {
    id: uniqueIds[14],
    value: 75,
    color: 'warning',
  },
  {
    id: uniqueIds[15],
    value: 100,
    color: 'info',
  },
  {
    id: uniqueIds[16],
    color: 'success',
  },
];
