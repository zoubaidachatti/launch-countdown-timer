import { TableHead, TableRow } from '@mui/material';
import { TableListHeadProps } from './TableListHead.type';
import { CustomHeadCell } from '@/components';

export function TableListHead({
  headCells,
  noAction,
  isAllSelected,
  orderBy,
  direction,
  onRequestSort,
  onSelectAll,
}: Readonly<TableListHeadProps>) {
  const onSortClick = (id: string, i: number) => {
    if (headCells.length !== i + 1 || noAction) {
      onRequestSort(id);
    }
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, i) => (
          <CustomHeadCell
            key={headCell.id}
            onSortClick={onSortClick}
            headCell={headCell}
            index={i}
            onSelectAll={headCell.isSelect ? onSelectAll : undefined}
            isAllSelected={isAllSelected}
            direction={headCell.id === orderBy ? direction : undefined}
          />
        ))}
      </TableRow>
    </TableHead>
  );
}
