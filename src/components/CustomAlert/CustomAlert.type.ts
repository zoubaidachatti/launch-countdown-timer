import { AlertVariants } from '@/types/interfaces';
import { AlertColor } from '@mui/material';
import { ReactNode } from 'react';

export type CustomAlertProps = {
  title?: string;
  variant?: AlertVariants;
  severity?: AlertColor;
  color?: AlertColor;
  children: ReactNode;
  action?: ReactNode;
  icon?: false | ReactNode;
  onClose?: () => void;
};
