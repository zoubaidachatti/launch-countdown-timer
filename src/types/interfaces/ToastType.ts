import { ReactNode } from 'react';
import { PaletteVariants } from './Theme';

export type ToastVariants = 'standard' | 'filled' | 'outlined';

export interface ToastType {
  id?: number;
  title?: string;
  message: string;
  type?: PaletteVariants;
  variant?: ToastVariants;
  onClick?: () => void;
  onClose?: () => void;
  customContent?: (props: ToastType) => ReactNode;
}
