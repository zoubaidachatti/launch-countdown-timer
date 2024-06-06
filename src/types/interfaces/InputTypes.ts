import { InputType, SwitchEnum } from '@/config/enums';
import { Dayjs } from 'dayjs';
import { RegisterOptions } from 'react-hook-form';
import { SizeType } from './SizeType';

export interface SelectOption {
  label: string;
  value: string | number;
  image?: string;
}

export type TextValueType = string | number | undefined;
export type ColorPickerValueType = string | undefined;
export type DateValueType = Dayjs | null | undefined;
export type FileValueType = File | Array<File> | null | undefined;
export type SelectValueType = Array<SelectOption> | SelectOption | undefined;
export type CheckboxValueType = Array<string | number> | undefined;
export type RadioValueType = string | number;
export type RangeValueType = number | Array<number> | undefined;
export type SwitchValueType = SwitchEnum | undefined;

export type InputValueType =
  | TextValueType
  | ColorPickerValueType
  | DateValueType
  | FileValueType
  | SelectValueType
  | CheckboxValueType
  | RadioValueType
  | RangeValueType;

export type InputConfig = {
  label?: string;
  placeholder?: string;
  fieldName: string;
  tooltip?: string;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: InputValueType;
  inputType: InputType;
  options?: Array<SelectOption>;
  disabledOptions?: CheckboxValueType;
  config?: RegisterOptions;
  maxLength?: number;
  size?: SizeType;
  acceptTypes?: string[];
  multiple?: boolean; // for files & select
  rangeConfig?: {
    max?: number;
    min?: number;
    step?: number | null;
    marks?: boolean | { value: number; label?: string }[];
    tooltip?: 'auto' | 'on' | 'off';
    showValue?: boolean;
  };
};

export type OptionType<T = unknown> = {
  label: string;
  value: T;
};

export type TextAlignType = 'left' | 'center' | 'right';
