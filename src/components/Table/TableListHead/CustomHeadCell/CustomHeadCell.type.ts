import { HeadCell, OrderType } from '@/types/interfaces';

export interface CustomHeadCellProps {
  index: number;
  headCell: HeadCell;
  direction?: OrderType;
  isAllSelected?: boolean;
  onSortClick: (id: string, i: number) => void;
  onSelectAll?: () => void;
}
