import { PaletteVariants } from '@/types/interfaces';

export type EventItemProps = {
  day: number;
  month: number;
  title: string;
  subtitle: string;
  location: string;
  variant: PaletteVariants;
};
