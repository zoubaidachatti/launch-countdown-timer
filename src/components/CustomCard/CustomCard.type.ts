import { AlignmentType, ButtonVariants, PaletteVariants } from '@/types/interfaces';
import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

export type CustomCardProps = {
  header?: string | ReactNode;
  children: ReactNode;
  footer?: string | ReactNode;
  image?: string;
  cardActions?: CustomCardAction[];
  cardActionsPlacement?: AlignmentType;
  variant?: PaletteVariants;
  contentAlignment?: AlignmentType;
  contentSx?: SxProps;
  headerSx?: SxProps;
  imageSx?: SxProps;
  footerSx?: SxProps;
};

export type CustomCardAction = {
  label: string;
  action: () => void;
  color?: PaletteVariants;
  variant?: ButtonVariants;
};
