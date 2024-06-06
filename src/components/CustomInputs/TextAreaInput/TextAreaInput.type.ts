import { TextAlignType, TextValueType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type TextAreaInputProps = {
  label?: string;
  name: string;
  tooltip?: string;
  placeholder?: string;
  value: TextValueType;
  error?: FieldError;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  minHeight?: number;
  textAlign?: TextAlignType;
  maxLength?: number;
  onChange: (value: TextValueType) => void;
};
