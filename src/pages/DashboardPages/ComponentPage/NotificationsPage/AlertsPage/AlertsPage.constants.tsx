import FavoriteIcon from '@/assets/icons/favorite.svg?react';
import i18nInstance from '@/locales/i18nInstance';
import { generateUniqueIds } from '@/utils';
import { Button } from '@mui/material';

export const uniqueIds = generateUniqueIds(11);

export const AlertSeverities = [
  {
    id: uniqueIds[0],
    severity: 'success',
  },
  {
    id: uniqueIds[1],
    severity: 'info',
  },
  {
    id: uniqueIds[2],
    severity: 'warning',
  },
  {
    id: uniqueIds[3],
    severity: 'error',
  },
];

export const AlertsVariants = [
  { id: uniqueIds[4], label: 'alert.standard', variant: 'standard' },
  { id: uniqueIds[5], label: 'alert.filled', variant: 'filled' },
  { id: uniqueIds[6], label: 'alert.outlined', variant: 'outlined' },
];

export const alerts = [
  { title: 'alert.success_alert', content: 'alert.success_alert_content' },
  { title: 'alert.info_alert', content: 'alert.info_alert_content' },
  { title: 'alert.warning_alert', content: 'alert.warning_alert_content' },
  { title: 'alert.error_alert', content: 'alert.error_alert_content' },
];

export const alertIcons = [
  { id: uniqueIds[7], label: 'alert.alert_with_no_icon', icon: false },
  { id: uniqueIds[8], label: 'alert.alert_with_custom_icon', icon: <FavoriteIcon /> },
];

export const alertActions = [
  { id: uniqueIds[9], onClose: () => {} },
  {
    id: uniqueIds[10],
    action: (
      <Button color="inherit" size="small">
        {i18nInstance.t('alert.undo')}
      </Button>
    ),
  },
];
