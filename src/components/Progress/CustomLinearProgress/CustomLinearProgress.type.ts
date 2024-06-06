import { SizeType } from '@/types/interfaces';
import { LinearProgressProps, SxProps } from '@mui/material';

export type CustomLinearProgressProps = {
  labeled?: boolean;
  labelSx?: SxProps;
  size?: SizeType;
} & LinearProgressProps;
