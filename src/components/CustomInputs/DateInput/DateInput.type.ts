import { InputType } from '@/config/enums';
import { DateValueType, TextAlignType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type DateInputProps = {
  label?: string;
  name: string;
  tooltip?: string;
  placeholder?: string;
  type: InputType;
  value: DateValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  textAlign?: TextAlignType;
  onChange: (value: DateValueType) => void;
};
