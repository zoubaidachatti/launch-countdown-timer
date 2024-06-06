import TrashIcon from '@/assets/icons/delete.svg?react';
import { CustomTableCell, CustomTableRow, TableCheckBox, TypographyOverflow } from '@/components';
import { Button } from '@mui/material';
import { EMPLOYEES_HEADER_LABELS } from '../EmployeesTable.constants';
import { EmployeeTableRowProps } from './EmployeeTableRow.type';
import { useMemo } from 'react';

export const EmployeeTableRow = ({
  data,
  isSelected,
  backgroundColor,
  onSelect,
  onDelete,
}: EmployeeTableRowProps) => {
  const { id, firstName, lastName, email, jobType, pet } = data;

  const bgcolor = useMemo(() => backgroundColor, []);
  return (
    <CustomTableRow height={60} backgroundColor={bgcolor}>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[0]}>
        <TableCheckBox checked={isSelected} onChange={() => onSelect(id)} />
      </CustomTableCell>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[1]}>
        <TypographyOverflow title={`${id}`} fontWeight={700} color={'grey.800'}>
          {`#${id}`}
        </TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[2]}>
        <TypographyOverflow title={firstName}>{firstName}</TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[3]}>
        <TypographyOverflow title={lastName}>{lastName}</TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[4]}>
        <TypographyOverflow title={email}>{email}</TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[5]}>
        <TypographyOverflow title={jobType}>{jobType}</TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[6]}>
        <TypographyOverflow title={pet}>{pet}</TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={EMPLOYEES_HEADER_LABELS[7]}>
        <Button onClick={() => onDelete(id)} color="error" variant="text" sx={{ minWidth: 35 }}>
          <TrashIcon />
        </Button>
      </CustomTableCell>
    </CustomTableRow>
  );
};
