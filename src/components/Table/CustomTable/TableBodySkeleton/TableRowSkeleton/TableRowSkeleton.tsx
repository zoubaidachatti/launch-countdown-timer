import { CustomTableCell } from '@/components';
import { GlobalVariables } from '@/config/constants';
import { HeadCell } from '@/types/interfaces';
import { Skeleton, Stack, TableRow } from '@mui/material';
import { TableRowSkeletonProps } from './TableRowSkeleton.type';

export function TableRowSkeleton({ cells, rowHeight }: Readonly<TableRowSkeletonProps>) {
  const renderSkeleton = (cell: HeadCell, isFirst?: boolean) => {
    switch (true) {
      case cell.isSelect:
        return (
          <Stack width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Skeleton width={18} height={31} sx={{ marginInline: '0.5rem' }} />
          </Stack>
        );
      case cell.isAvatar:
        return (
          <Stack
            width={'100%'}
            height={'100%'}
            alignItems={'center'}
            direction="row"
            spacing={2}
            paddingLeft={isFirst ? 3 : 0}
          >
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton height={35} width={'60%'} />
          </Stack>
        );
      default:
        return <Skeleton width={'80%'} height={35} sx={{ marginInline: '0.5rem' }} />;
    }
  };

  return (
    <TableRow sx={{ height: rowHeight }}>
      {cells.map((cell, index) => (
        <CustomTableCell key={cell.id} cell={cell}>
          {renderSkeleton(cell, index === GlobalVariables.noDataLength)}
        </CustomTableCell>
      ))}
    </TableRow>
  );
}
