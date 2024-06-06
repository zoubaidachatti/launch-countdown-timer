import { ColorPickerValueType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type ColorPickerInputProps = {
  label?: string;
  name: string;
  tooltip?: string;
  value: ColorPickerValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onChange: (value: ColorPickerValueType) => void;
};
