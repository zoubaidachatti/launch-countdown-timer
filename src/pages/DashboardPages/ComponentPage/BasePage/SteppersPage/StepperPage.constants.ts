import i18nInstance from '@/locales/i18nInstance';
import { StepType } from '@/types/interfaces';

const stepperTitle = 'stepper.step_n';

export const STEPPER: StepType[] = [
  {
    id: 478,
    order: 1,
    active: true,
    title: i18nInstance.t(stepperTitle, { n: 1 }),
    caption: 'stepper.cart',
  },
  {
    id: 566,
    order: 2,
    title: i18nInstance.t(stepperTitle, { n: 2 }),
    caption: 'stepper.delivery_address',
  },
  {
    id: 965,
    order: 3,
    title: i18nInstance.t(stepperTitle, { n: 3 }),
    caption: 'stepper.payment',
    disabled: true,
  },
  {
    id: 550,
    order: 4,
    title: i18nInstance.t(stepperTitle, { n: 4 }),
    caption: 'stepper.preview',
    disabled: true,
  },
  {
    id: 689,
    order: 5,
    title: i18nInstance.t(stepperTitle, { n: 5 }),
    caption: 'stepper.finish_order',
    disabled: true,
  },
];

export const SIMPLE_STEPPER: StepType[] = STEPPER.map(({ id, order, disabled, active }) => ({
  id,
  order,
  disabled,
  active,
}));

export const STEPPER_WITH_TITLE: StepType[] = STEPPER.map(
  ({ id, title, order, disabled, active }) => ({
    id,
    title,
    order,
    disabled,
    active,
  }),
);

export const NON_LINEAR_STEPPER: StepType[] = STEPPER.map((step) => ({ ...step, disabled: false }));
