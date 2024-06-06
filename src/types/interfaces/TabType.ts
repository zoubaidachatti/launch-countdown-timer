import { ReactNode } from 'react';

export type TabType = {
  label: string | ReactNode;
  value: number | string;
  disabled?: boolean;
  onClick?: () => void;
};
