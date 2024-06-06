import { StepOwnProps } from '@mui/material';

export type StepType = StepOwnProps & {
  id: number;
  order: number;
  title?: string;
  caption?: string;
};
