import { HeadCell, OrderType } from '@/types/interfaces';

export interface TableListHeadProps {
  headCells: Array<HeadCell>;
  noAction?: boolean;
  isAllSelected?: boolean;
  orderBy?: string;
  direction?: OrderType;
  onRequestSort: (property: string) => void;
  onSelectAll?: () => void;
}
