import ErrorIcon from '@/assets/icons/error.svg?react';
import InfoIcon from '@/assets/icons/info.svg?react';
import SuccessIcon from '@/assets/icons/task_done.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import { ColorsConfig } from '@/config/constants';
import { AlertVariants } from '@/types/interfaces';
import { AlertColor, Stack } from '@mui/material';
import { isUndefined } from 'lodash';
import { ReactNode } from 'react';

const SvgContainer = ({
  children,
  color,
  variant,
}: {
  children: ReactNode;
  color: AlertColor;
  variant?: AlertVariants;
}) => (
  <Stack
    sx={{
      svg: {
        width: 25,
        height: 25,
        fill: (theme) =>
          variant === 'filled'
            ? color === 'success'
              ? ColorsConfig.grey[900]
              : ColorsConfig.grey[50]
            : theme.palette[color].main,
      },
    }}
  >
    {children}
  </Stack>
);

export const generateAlertIcon = (
  severity: AlertColor,
  variant: AlertVariants,
  icon?: false | ReactNode,
) => {
  if (!isUndefined(icon)) {
    if (icon) {
      return (
        <SvgContainer color={severity} variant={variant}>
          {icon}
        </SvgContainer>
      );
    } else return false;
  }
  switch (severity) {
    case 'error':
      return (
        <SvgContainer color="error" variant={variant}>
          <ErrorIcon />
        </SvgContainer>
      );
    case 'info':
      return (
        <SvgContainer color="info" variant={variant}>
          <InfoIcon />
        </SvgContainer>
      );
    case 'success':
      return (
        <SvgContainer color="success" variant={variant}>
          <SuccessIcon />
        </SvgContainer>
      );
    case 'warning':
      return (
        <SvgContainer color="warning" variant={variant}>
          <WarningIcon />
        </SvgContainer>
      );
    default:
      return false;
  }
};
