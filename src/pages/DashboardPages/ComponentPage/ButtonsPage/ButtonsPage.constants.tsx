import ErrorIcon from '@/assets/icons/error.svg?react';
import HeartIcon from '@/assets/icons/favorite.svg?react';
import InfoIcon from '@/assets/icons/info.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
import TaskDoneIcon from '@/assets/icons/task_done.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import { generateUniqueIds } from '@/utils';

export const uniqueIds = generateUniqueIds(19);

export const buttons = [
  { label: 'common.primary', color: 'primary', id: uniqueIds[0], icon: <HeartIcon /> },
  { label: 'common.secondary', color: 'secondary', id: uniqueIds[1], icon: <StarIcon /> },
  { label: 'common.info', color: 'info', id: uniqueIds[2], icon: <InfoIcon /> },
  { label: 'common.success', color: 'success', id: uniqueIds[3], icon: <TaskDoneIcon /> },
  { label: 'common.warning', color: 'warning', id: uniqueIds[4], icon: <WarningIcon /> },
  { label: 'common.error', color: 'error', id: uniqueIds[5], icon: <ErrorIcon /> },
];

export const buttonVariants = [
  { id: uniqueIds[6], variant: 'outlined' },
  { id: uniqueIds[7], variant: 'contained' },
  { id: uniqueIds[8], variant: 'text' },
];

export const buttonTypes = [
  { id: uniqueIds[9], label: 'common.normal' },
  { id: uniqueIds[10], label: 'common.disabled', disabled: true },
];

export const buttonSizes = [
  { id: uniqueIds[11], label: 'common.small', size: 'small' },
  { id: uniqueIds[12], label: 'common.medium', size: 'medium' },
  { id: uniqueIds[13], label: 'common.large', size: 'large' },
];

export const buttonGroups = [
  { id: uniqueIds[14], label: 'button.contained_buttons_group', variant: 'outlined' },
  { id: uniqueIds[15], label: 'button.outlined_buttons_group', variant: 'contained' },
  { id: uniqueIds[16], label: 'button.text_buttons_group', variant: 'text' },
];

export const buttonGroupOrientations = [
  { id: uniqueIds[17], label: 'common.horizontal', orientation: 'horizontal' },
  { id: uniqueIds[18], label: 'common.vertical', orientation: 'vertical' },
];
