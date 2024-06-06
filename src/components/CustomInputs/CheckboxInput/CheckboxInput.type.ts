import { SizeType } from '@/types/interfaces';
import { ChangeEvent } from 'react';

export type CheckboxInputProps = {
  label: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  value: string | number;
  size?: SizeType;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
