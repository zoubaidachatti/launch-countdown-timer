import { User } from '@/types/models';

export type EmployeeTableRowProps = {
  data: User;
  isSelected?: boolean;
  backgroundColor?: string;
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
};
