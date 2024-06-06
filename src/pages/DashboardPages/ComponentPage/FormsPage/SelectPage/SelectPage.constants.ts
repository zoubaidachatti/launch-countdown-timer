import { GlobalVariables } from '@/config/constants';
import { InputType } from '@/config/enums';
import { InputConfig, SelectOption } from '@/types/interfaces';
import { generateRandomString } from '@/utils';

const nameOptions = [
  { label: 'John Doe', value: 1 },
  { label: 'Viktória Wilfrið', value: 2 },
  { label: 'Irma Olamilekan', value: 3 },
  { label: 'Archelaos Criseida', value: 4 },
  { label: 'Niina Reena', value: 5 },
  { label: 'Aldéric Zopyros', value: 6 },
  { label: 'Piloqutinnguaq Maachah', value: 7 },
  { label: 'Dana Iovianus', value: 8 },
];

const ageOptions = [
  { label: 'inputs.between_one_and_ten', value: 1 },
  { label: 'inputs.between_eleven_and_twenty', value: 2 },
  { label: 'inputs.more_than_twenty', value: 3 },
];
const userOptions = [
  {
    label: 'John Doe',
    value: 1,
    image: `${GlobalVariables.imageURL}${generateRandomString()}`,
  },
  {
    label: 'Aage Wulfstan',
    value: 2,
    image: `${GlobalVariables.imageURL}${generateRandomString()}`,
  },
  {
    label: 'Irma Olamilekan',
    value: 3,
    image: `${GlobalVariables.imageURL}${generateRandomString()}`,
  },
];

const ageLabel = 'inputs.placeholder.select_age';
const namePlaceholder = 'inputs.placeholder.select_name';

export const selectInputObject: Record<string, InputConfig> = {
  names: {
    fieldName: 'names',
    inputType: InputType.SELECT,
    placeholder: namePlaceholder,
    label: 'inputs.names',
    options: nameOptions,
  },
  validationNames: {
    fieldName: 'names',
    inputType: InputType.SELECT,
    placeholder: namePlaceholder,
    label: 'inputs.names',
    options: nameOptions,
    multiple: true,
    config: {
      required: { value: true, message: 'inputs.errors.must_select_names' },
      validate: {
        validateNumberOfSelectedOptions: (values?: SelectOption[]) =>
          (values && values?.length >= 2) || 'inputs.errors.more_than_one_options',
      },
    },
  },
  disabledNames: {
    fieldName: 'disabledNames',
    inputType: InputType.SELECT,
    placeholder: namePlaceholder,
    label: 'inputs.disabled_select',
    options: nameOptions,
    disabled: true,
  },
  disabledOptionsNames: {
    fieldName: 'disabledOptionsNames',
    inputType: InputType.SELECT,
    placeholder: namePlaceholder,
    label: 'inputs.disabled_options',
    options: nameOptions,
    disabledOptions: [2, 3, 7],
  },
  ages: {
    fieldName: 'ages',
    inputType: InputType.SELECT,
    placeholder: ageLabel,
    label: 'inputs.age',
    options: ageOptions,
  },
  requiredAge: {
    fieldName: 'requiredAge',
    inputType: InputType.SELECT,
    placeholder: ageLabel,
    label: 'inputs.age',
    options: ageOptions,
    config: {
      required: { value: true, message: 'inputs.errors.age_required' },
    },
  },
  readOnlyAges: {
    fieldName: 'readOnlyAges',
    inputType: InputType.SELECT,
    placeholder: ageLabel,
    label: 'inputs.read_only_select',
    options: ageOptions,
    readOnly: true,
    defaultValue: { label: 'inputs.between_one_and_ten', value: 1 },
  },
  users: {
    fieldName: 'users',
    inputType: InputType.SELECT,
    placeholder: 'inputs.placeholder.select_user',
    label: 'inputs.user',
    options: userOptions,
  },
  multipleUsers: {
    fieldName: 'multipleUsers',
    inputType: InputType.SELECT,
    placeholder: 'inputs.placeholder.select_users',
    label: 'inputs.users',
    options: userOptions,
    tooltip: 'inputs.tooltip.select_more_than_one_option',
    multiple: true,
  },
  multipleUsersReadOnly: {
    fieldName: 'multipleUsersReadOnly',
    inputType: InputType.SELECT,
    placeholder: 'inputs.placeholder.select_users',
    label: 'inputs.users',
    tooltip: 'inputs.tooltip.read_only_select',
    options: userOptions,
    multiple: true,
    readOnly: true,
    defaultValue: [
      {
        label: 'John Doe',
        value: 1,
        image: `${GlobalVariables.imageURL}${generateRandomString()}`,
      },
      {
        label: 'Aage Wulfstan',
        value: 2,
        image: `${GlobalVariables.imageURL}${generateRandomString()}`,
      },
    ],
  },
};
