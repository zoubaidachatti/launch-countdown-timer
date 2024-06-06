import { CustomTable } from '@/components';
import { usePagination } from '@/hooks';
import { User } from '@/types/models';
import { generateRandomNumber, orderArrayOfObjectsBy } from '@/utils';
import { useEffect, useState } from 'react';
import { EmployeeTableRow } from './EmployeeTableRow';
import {
  EMPLOYEES_HEADER_LABELS,
  fakeEmployeesData,
  randomColors,
} from './EmployeesTable.constants';
import { EmployeesTableProps } from './EmployeesTable.type';

export const EmployeesTable = ({
  isLoading,
  striped,
  stripeColor,
  hover,
  coloredRows,
}: EmployeesTableProps) => {
  const { paginator, changeOrderBy } = usePagination();
  const [rows, setRows] = useState(fakeEmployeesData);
  const [selectedRowsIds, setSelectedRowsIds] = useState<number[]>([]);
  const isAllSelected = selectedRowsIds.length === rows.length && rows.length !== 0;

  const onSelectAllRows = () => {
    setSelectedRowsIds(isAllSelected ? [] : rows.map(({ id }) => id));
  };

  const onSelectRow = (id: number) => {
    if (selectedRowsIds.includes(id)) {
      setSelectedRowsIds((prev) => prev.filter((userId) => userId !== id));
      return;
    }
    setSelectedRowsIds((prev) => [...prev, id]);
  };

  const onDelete = (id: number) => {
    setRows((prev) => prev.filter((user) => user.id !== id));
  };

  useEffect(() => {
    setRows(
      (prev) => orderArrayOfObjectsBy(prev, [paginator.orderBy], [paginator.order]) as User[],
    );
  }, [paginator.order, paginator.orderBy]);

  return (
    <CustomTable
      headCells={EMPLOYEES_HEADER_LABELS}
      maxHeight={'100%'}
      minWidth={900}
      rowHeight={60}
      isData={!isLoading && Boolean(rows.length)}
      changeOrderBy={changeOrderBy}
      isAllSelected={isAllSelected}
      selectAllRows={onSelectAllRows}
      orderBy={paginator.orderBy}
      direction={paginator.order}
      noDataMessage="table.no_data_available"
      striped={striped}
      isLoading={isLoading}
      stripeColor={stripeColor}
      hoverEffect={hover}
    >
      {rows.map((user) => (
        <EmployeeTableRow
          key={user.id}
          data={user}
          isSelected={selectedRowsIds.includes(user.id)}
          onSelect={onSelectRow}
          onDelete={onDelete}
          backgroundColor={coloredRows ? randomColors[generateRandomNumber(0, 17)] : undefined}
        />
      ))}
    </CustomTable>
  );
};
