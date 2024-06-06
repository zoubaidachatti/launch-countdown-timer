import { InputType } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

const customMarks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

export const RangeInputs: InputConfig[] = [
  { fieldName: 'range2', label: 'inputs.small_range', inputType: InputType.RANGE, size: 'small' },
  {
    fieldName: 'range1',
    label: 'inputs.medium_range',
    tooltip: 'inputs.tooltip.default_size',
    size: 'medium',
    inputType: InputType.RANGE,
  },
  { fieldName: 'range3', label: 'inputs.large_range', inputType: InputType.RANGE, size: 'large' },
  {
    fieldName: 'range4',
    label: 'inputs.discrete_range',
    inputType: InputType.RANGE,
    tooltip: 'inputs.tooltip.steps_10',
    rangeConfig: {
      marks: true,
      step: 10,
      min: 0,
      max: 90,
    },
  },
  {
    fieldName: 'range5',
    label: 'inputs.small_steps',
    inputType: InputType.RANGE,
    tooltip: 'inputs.tooltip.steps_2',
    rangeConfig: {
      marks: true,
      step: 2,
      min: 0,
      max: 90,
    },
  },
  {
    fieldName: 'range6',
    label: 'inputs.custom_marks',
    inputType: InputType.RANGE,
    rangeConfig: {
      marks: customMarks,
      step: 10,
      min: 0,
      max: 150,
    },
  },
  {
    fieldName: 'range7',
    label: 'inputs.restricted_values',
    inputType: InputType.RANGE,
    rangeConfig: {
      marks: customMarks,
      step: null,
      min: 0,
      max: 150,
    },
  },
  {
    fieldName: 'range8',
    label: 'inputs.range',
    inputType: InputType.RANGE,
    defaultValue: [20, 60],
  },
  {
    fieldName: 'range9',
    label: 'inputs.range',
    inputType: InputType.RANGE,
    rangeConfig: {
      marks: customMarks,
      step: null,
      min: 0,
      max: 150,
    },
    defaultValue: [20, 60],
  },
  {
    fieldName: 'range10',
    label: 'inputs.disabled_slider',
    inputType: InputType.RANGE,
    disabled: true,
    defaultValue: [20, 60],
  },
  {
    fieldName: 'range11',
    label: 'inputs.disabled_slider',
    inputType: InputType.RANGE,
    disabled: true,
  },
  {
    fieldName: 'range12',
    label: 'inputs.readonly_slider',
    inputType: InputType.RANGE,
    readOnly: true,
    defaultValue: [20, 60],
    rangeConfig: {
      max: 90,
    },
  },
  {
    fieldName: 'range13',
    label: 'inputs.readonly_slider',
    inputType: InputType.RANGE,
    readOnly: true,
    defaultValue: 50,
    rangeConfig: {
      max: 90,
    },
  },
  {
    fieldName: 'range14',
    label: 'inputs.small_range_with_value',
    inputType: InputType.RANGE,
    size: 'small',
    rangeConfig: {
      showValue: true,
    },
  },
  {
    fieldName: 'range15',
    label: 'inputs.medium_range_with_value',
    size: 'medium',
    inputType: InputType.RANGE,
    rangeConfig: {
      showValue: true,
    },
  },
  {
    fieldName: 'range16',
    label: 'inputs.large_range_with_value',
    inputType: InputType.RANGE,
    size: 'large',
    rangeConfig: {
      showValue: true,
    },
  },
];
