import { SelectOption, SelectValueType, TextAlignType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type SelectInputProps = {
  label?: string;
  name: string;
  tooltip?: string;
  placeholder?: string;
  options?: SelectOption[];
  disabledOptions?: (string | number)[];
  value: SelectValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  isMultiple?: boolean;
  required?: boolean;
  textAlign?: TextAlignType;
  onChange: (value: SelectValueType) => void;
};
