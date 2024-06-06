import { InputType } from '@/config/enums';
import { TextAlignType, TextValueType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type TextInputProps = {
  label?: string;
  name: string;
  tooltip?: string;
  placeholder?: string;
  type: InputType;
  value: TextValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  textAlign?: TextAlignType;
  maxLength?: number;
  onChange: (value: TextValueType) => void;
};
