import { RangeValueType, SizeType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type RangeInputProps = {
  label?: string;
  name: string;
  tooltip?: string;
  value: RangeValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  max?: number;
  min?: number;
  step?: number | null;
  size?: SizeType;
  marks?: boolean | { value: number; label?: string }[];
  rangeTooltip?: 'auto' | 'on' | 'off';
  showValue?: boolean;
  onChange: (value: RangeValueType) => void;
};
