import { HeadCell } from '@/types/interfaces';
import { ReactNode } from 'react';

export type CustomTableCellProps = {
  cell?: HeadCell;
  clickable?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};
