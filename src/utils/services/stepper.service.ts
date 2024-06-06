import { StepType } from '@/types/interfaces';

export const updateStepper = (activeIndex: number, steps: StepType[]): StepType[] => {
  return steps.map((step, i) => {
    if (i === activeIndex) {
      return { ...step, active: true, completed: false, disabled: false };
    }
    if (i === activeIndex + 1) {
      return { ...step, active: false, completed: false, disabled: false };
    }
    if (i < activeIndex) {
      return { ...step, active: false, completed: true, disabled: false };
    }
    if (i > activeIndex) {
      return { ...step, active: false, completed: false, disabled: true };
    }

    return step;
  });
};

export const updateNonLinearStepper = (activeIndex: number, steps: StepType[]): StepType[] => {
  return steps.map((step, i) => {
    if (i === activeIndex) {
      return { ...step, active: true, completed: false, disabled: false };
    }
    return { ...step, active: false, completed: false, disabled: false };
  });
};
