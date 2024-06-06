import { Alert, AlertTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { generateAlertIcon } from './CustomAlert.helpers';
import { CustomAlertProps } from './CustomAlert.type';

export function CustomAlert({
  title,
  variant,
  children,
  severity,
  color,
  action,
  icon,
  onClose,
}: CustomAlertProps) {
  const { t } = useTranslation();
  return (
    <Alert
      variant={variant}
      icon={generateAlertIcon(color ?? severity ?? 'success', variant ?? 'standard', icon)}
      severity={severity}
      color={color}
      onClose={onClose}
      action={action}
    >
      {title && <AlertTitle>{t(title)}</AlertTitle>}
      {children}
    </Alert>
  );
}

export default CustomAlert;
