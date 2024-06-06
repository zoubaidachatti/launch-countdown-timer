import { AlignmentType, TextAlignType } from '@/types/interfaces';
import { ReactNode } from 'react';

export type CardContentProps = {
  title: string;
  content: string | ReactNode;
  alignItems?: AlignmentType;
  textAlign?: TextAlignType;
};
