import { StepType, OrientationType } from '@/types/interfaces';
import { ReactNode } from 'react';

export type CustomStepperProps = {
  activeIndex?: number;
  steps: StepType[];
  orientation?: OrientationType;
  customConnector?: ReactNode;
  customStep?: (step: StepType) => ReactNode;
  onClickStep?: (index: number) => void;
};
