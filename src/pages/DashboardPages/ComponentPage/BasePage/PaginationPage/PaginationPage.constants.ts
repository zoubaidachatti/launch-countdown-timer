import { generateUniqueIds } from '@/utils';
import UndoIcon from '@/assets/icons/undo.svg?react';
import RedoIcon from '@/assets/icons/redo.svg?react';

const uniqueIds = generateUniqueIds(15);

export const TotalRows = 600;

export const paginationVariants = [
  { id: uniqueIds[0], label: 'common.outlined', variant: 'outlined' },
  { id: uniqueIds[1], label: 'common.text', variant: 'text' },
];

export const paginationShapes = [
  { id: uniqueIds[2], label: 'common.rounded', shape: 'rounded' },
  { id: uniqueIds[3], label: 'common.circle', shape: 'circular' },
];

export const paginationColors = [
  { id: uniqueIds[4], label: 'common.primary', color: 'primary' },
  { id: uniqueIds[5], label: 'common.secondary', color: 'secondary' },
];

export const paginationSizes = [
  { id: uniqueIds[6], label: 'common.small', size: 'small' },
  { id: uniqueIds[7], label: 'common.medium', size: 'medium' },
  { id: uniqueIds[8], label: 'common.large', size: 'large' },
];

export const paginationButtons = [
  {
    id: uniqueIds[9],
    label: 'pagination.hide_next_and_back_buttons',
    hideNextButton: true,
    hidePrevButton: true,
  },
  {
    id: uniqueIds[10],
    label: 'pagination.show_first_and_last_buttons',
    showFirstButton: true,
    showLastButton: true,
  },
  {
    id: uniqueIds[11],
    label: 'pagination.custom_navigation_buttons',
    CustomBackIcon: UndoIcon,
    CustomNextIcon: RedoIcon,
  },
];
