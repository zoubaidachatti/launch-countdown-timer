import { SizeType, SwitchValueType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type SwitchInputProps = {
  label?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  value: SwitchValueType;
  size?: SizeType;
  error?: FieldError;
  tooltip?: string;
  onChange: (v: SwitchValueType) => void;
};
