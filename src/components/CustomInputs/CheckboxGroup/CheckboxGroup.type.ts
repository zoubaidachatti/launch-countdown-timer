import { CheckboxValueType, SelectOption, SizeType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type CheckboxGroupProps = {
  label?: string;
  name: string;
  tooltip?: string;
  options?: SelectOption[];
  disabledOptions?: CheckboxValueType;
  value: CheckboxValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  size?: SizeType;
  itemsDirection?: 'column' | 'row';
  onChange: (value: CheckboxValueType) => void;
};
