import { InputConfig, TextAlignType } from '@/types/interfaces';

export type GenericInputProps = {
  inputObject: InputConfig;
  textAreaHeight?: number;
  textAlign?: TextAlignType;
  itemsDirection?: 'column' | 'row';
};
