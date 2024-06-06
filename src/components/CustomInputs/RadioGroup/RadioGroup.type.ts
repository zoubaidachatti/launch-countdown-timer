import { CheckboxValueType, RadioValueType, SelectOption, SizeType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type RadioGroupProps = {
  label?: string;
  name: string;
  tooltip?: string;
  options?: SelectOption[];
  disabledOptions?: CheckboxValueType;
  value: RadioValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  size?: SizeType;
  itemsDirection?: 'column' | 'row';
  onChange: (value: RadioValueType) => void;
};
