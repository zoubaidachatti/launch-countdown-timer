import { ReactNode } from 'react';

export type CustomModalProps = {
  open: boolean;
  title?: string;
  children: ReactNode;
  handleClose?: () => void;
};
