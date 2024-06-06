import { HeadCell, OrderType } from '@/types/interfaces';
import { ReactNode } from 'react';

export type CustomTableProps = {
  haveNextPage?: boolean;
  error?: string;
  headCells: Array<HeadCell>;
  children: ReactNode;
  isData?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  noAction?: boolean;
  noDataMessage?: string;
  isAllSelected?: boolean;
  height?: number | string;
  maxHeight?: number | string;
  minWidth?: number | string;
  rowHeight?: number;
  orderBy?: string;
  direction?: OrderType;
  hideHeader?: boolean;
  striped?: boolean;
  stripeColor?: string;
  hoverEffect?: boolean;
  changeOrderBy?: (orderBy: string) => void;
  selectAllRows?: () => void;
};
