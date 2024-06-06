import { TableBodySkeletonProps } from './TableBodySkeleton.type';
import { TableRowSkeleton } from './TableRowSkeleton';

export function TableBodySkeleton({ headCells, rowHeight }: Readonly<TableBodySkeletonProps>) {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <TableRowSkeleton rowHeight={rowHeight} key={index} cells={headCells} />
      ))}
    </>
  );
}
