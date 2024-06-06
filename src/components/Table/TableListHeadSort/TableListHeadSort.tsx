import { OrderType } from '@/types/interfaces';
import { SortIconStyle } from './TableListHeadSort.style';

export function TableListHeadSort({ direction }: { direction?: OrderType }) {
  return <SortIconStyle direction={direction} />;
}
