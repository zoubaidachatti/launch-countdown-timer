import { FileValueType } from '@/types/interfaces';
import { FieldError } from 'react-hook-form';

export type CustomFileUploadProps = {
  label?: string;
  name: string;
  tooltip?: string;
  value: FileValueType;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  acceptTypes?: string[];
  isMultiple?: boolean;
  maxLength?: number;
  onChange: (value: FileValueType) => void;
};
