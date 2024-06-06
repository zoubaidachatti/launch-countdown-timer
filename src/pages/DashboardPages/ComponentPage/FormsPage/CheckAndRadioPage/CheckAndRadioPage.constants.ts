import { InputType } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

const options = [
  { value: 1, label: 'inputs.option_1' },
  { value: 2, label: 'inputs.option_2' },
];

const animals = [
  { value: 1, label: 'common.cat' },
  { value: 2, label: 'common.dog' },
  { value: 3, label: 'common.rabbit' },
  { value: 4, label: 'common.frog' },
];

const fruits = [
  { value: 1, label: 'common.apple' },
  { value: 2, label: 'common.banana' },
  { value: 3, label: 'common.cherry' },
  { value: 4, label: 'common.avocados' },
];

const sports = [
  { value: 1, label: 'common.baseball' },
  { value: 2, label: 'common.tennis' },
  { value: 3, label: 'common.swimming' },
  { value: 4, label: 'common.cycling' },
];

const flowers = [
  { value: 1, label: 'common.blossom' },
  { value: 2, label: 'common.rose' },
  { value: 3, label: 'common.tulip' },
  { value: 4, label: 'common.lavender' },
];

export const checkboxInputObject: Record<string, InputConfig> = {
  checkboxSmall: {
    fieldName: 'checkboxSmall',
    inputType: InputType.CHECKBOX,
    label: 'inputs.checkbox_small',
    options: options,
    size: 'small',
  },
  checkboxMedium: {
    fieldName: 'checkboxMedium',
    inputType: InputType.CHECKBOX,
    label: 'inputs.checkbox_medium',
    options: options,
    size: 'medium',
  },
  checkboxLarge: {
    fieldName: 'checkboxLarge',
    inputType: InputType.CHECKBOX,
    label: 'inputs.checkbox_large',
    options: options,
    size: 'large',
  },
  disabledCheckbox: {
    fieldName: 'disabledCheckbox',
    inputType: InputType.CHECKBOX,
    label: 'common.animals',
    options: animals,
    size: 'small',
    disabled: true,
    tooltip: 'inputs.tooltip.pick_a_pet',
  },
  disabledOptions: {
    fieldName: 'disabledOptions',
    inputType: InputType.CHECKBOX,
    label: 'common.animals',
    options: animals,
    size: 'small',
    disabledOptions: [4],
    tooltip: 'inputs.tooltip.pick_a_pet_but_not_the_frog',
  },
  readOnlyCheckbox: {
    fieldName: 'readOnlyCheckbox',
    inputType: InputType.CHECKBOX,
    label: 'common.fruits',
    options: fruits,
    size: 'small',
    readOnly: true,
    tooltip: 'inputs.tooltip.read_only_checkbox',
    defaultValue: [2, 4],
  },
  checkboxWithValidation: {
    fieldName: 'checkboxWithValidation',
    inputType: InputType.CHECKBOX,
    label: 'common.fruits',
    options: fruits,
    size: 'medium',
    config: {
      required: { value: true, message: 'inputs.errors.select_fruit' },
    },
  },
};

export const radioInputObject: Record<string, InputConfig> = {
  radioSmall: {
    fieldName: 'radioSmall',
    inputType: InputType.RADIO,
    label: 'inputs.radio_small',
    options: options,
    size: 'small',
  },
  radioMedium: {
    fieldName: 'radioMedium',
    inputType: InputType.RADIO,
    label: 'inputs.radio_medium',
    options: options,
    size: 'medium',
  },
  radioLarge: {
    fieldName: 'radioLarge',
    inputType: InputType.RADIO,
    label: 'inputs.radio_large',
    options: options,
    size: 'large',
  },
  disabledRadio: {
    fieldName: 'disabledRadio',
    inputType: InputType.RADIO,
    label: 'common.flowers',
    options: flowers,
    size: 'small',
    disabled: true,
    tooltip: 'inputs.tooltip.pick_your_favorite',
  },
  disabledOptionsRadio: {
    fieldName: 'disabledOptionsRadio',
    inputType: InputType.RADIO,
    label: 'common.flowers',
    options: flowers,
    size: 'small',
    disabledOptions: [2],
    tooltip: 'inputs.tooltip.pick_a_flower_but_not_the_rose',
  },
  readOnlyRadio: {
    fieldName: 'readOnlyRadio',
    inputType: InputType.RADIO,
    label: 'common.sports',
    options: sports,
    size: 'small',
    readOnly: true,
    tooltip: 'inputs.tooltip.read_only_radio',
    defaultValue: 4,
  },
  radioWithValidation: {
    fieldName: 'radioWithValidation',
    inputType: InputType.RADIO,
    label: 'common.sports',
    options: sports,
    size: 'medium',
    config: {
      required: { value: true, message: 'inputs.errors.select_a_sport' },
    },
  },
};
