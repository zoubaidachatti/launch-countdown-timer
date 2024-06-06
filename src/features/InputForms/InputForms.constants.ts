import { GlobalVariables } from '@/config/constants';
import { InputType } from '@/config/enums';
import i18nInstance from '@/locales/i18nInstance';
import { InputConfig } from '@/types/interfaces';
import { getDate, getTimeStamp } from '@/utils';

const BirthdayLabel = 'inputs.birthday';
const FirstNameLabel = 'inputs.firstName';
const FirstNamePlaceholder = 'inputs.placeholder.firstName';
const DescriptionInput = 'inputs.description';

export const inputObjects: Record<string, InputConfig> = {
  firstName: {
    label: FirstNameLabel,
    placeholder: FirstNamePlaceholder,
    fieldName: 'firstName',
    defaultValue: '',
    inputType: InputType.TEXT,
    config: {
      required: { message: 'inputs.errors.firstName_required', value: true },
      pattern: {
        value: GlobalVariables.regex.name,
        message: 'inputs.errors.firstName_invalid',
      },
    },
  },
  firstNameDisabled: {
    label: FirstNameLabel,
    placeholder: 'inputs.placeholder.firstName_disabled',
    fieldName: 'firstNameDisabled',
    defaultValue: '',
    inputType: InputType.TEXT,
    disabled: true,
  },
  lastName: {
    label: 'inputs.lastName',
    placeholder: 'inputs.placeholder.lastName',
    fieldName: 'lastName',
    defaultValue: '',
    inputType: InputType.TEXT,
    config: {
      required: { message: 'inputs.errors.lastName_required', value: true },
      pattern: {
        value: GlobalVariables.regex.name,
        message: 'inputs.errors.lastName_invalid',
      },
    },
  },
  password: {
    label: 'inputs.password',
    placeholder: 'inputs.placeholder.password',
    fieldName: 'password',
    defaultValue: '',
    inputType: InputType.PASSWORD,
    config: {
      required: { message: 'inputs.errors.password_required', value: true },
      pattern: {
        value: GlobalVariables.regex.password,
        message: 'inputs.errors.password_invalid',
      },
    },
  },
  passwordWithTooltip: {
    label: 'inputs.password',
    placeholder: 'inputs.placeholder.password',
    fieldName: 'passwordWithTooltip',
    defaultValue: '',
    inputType: InputType.PASSWORD,
    tooltip: 'inputs.tooltip.password',
  },
  lastNameReadOnly: {
    label: 'inputs.lastName',
    placeholder: 'inputs.placeholder.lastName',
    fieldName: 'lastNameDisabled',
    defaultValue: i18nInstance.t('inputs.readOnlyInput'),
    inputType: InputType.TEXT,
    readOnly: true,
  },
  description: {
    inputType: InputType.TEXTAREA,
    label: DescriptionInput,
    placeholder: 'inputs.placeholder.description',
    fieldName: 'description',
    defaultValue: '',
    config: {
      required: { message: 'inputs.errors.description_required', value: true },
    },
  },
  descriptionDisabled: {
    inputType: InputType.TEXTAREA,
    label: DescriptionInput,
    placeholder: 'inputs.placeholder.description_disabled',
    fieldName: 'descriptionDisabled',
    defaultValue: '',
    disabled: true,
  },
  descriptionReadOnly: {
    inputType: InputType.TEXTAREA,
    label: DescriptionInput,
    fieldName: 'descriptionReadOnly',
    defaultValue: i18nInstance.t('inputs.readOnlyDescription'),
    readOnly: true,
  },
  email: {
    label: 'inputs.email',
    placeholder: 'inputs.placeholder.email',
    fieldName: 'email',
    defaultValue: '',
    inputType: InputType.TEXT,
    config: {
      pattern: {
        value: GlobalVariables.regex.email,
        message: 'inputs.errors.email_invalid',
      },
      required: { message: 'inputs.errors.email_required', value: true },
    },
  },
  age: {
    label: 'inputs.age',
    placeholder: 'inputs.placeholder.age',
    fieldName: 'age',
    defaultValue: '',
    inputType: InputType.NUMBER,
    config: {
      min: { message: 'inputs.errors.age_too_young', value: 10 },
      max: { message: 'inputs.errors.age_too_old', value: 100 },
      pattern: {
        value: GlobalVariables.regex.age,
        message: 'inputs.errors.age_invalid',
      },
      required: { message: 'inputs.errors.age_required', value: true },
    },
  },
  phone: {
    label: 'inputs.phone',
    placeholder: 'inputs.placeholder.phone',
    fieldName: 'phone',
    defaultValue: '',
    inputType: InputType.PHONE,
    config: {
      pattern: {
        value: GlobalVariables.regex.phone,
        message: 'inputs.errors.phone_invalid',
      },
      required: { message: 'inputs.errors.phone_required', value: true },
    },
  },
  birthday: {
    label: BirthdayLabel,
    placeholder: GlobalVariables.dateFormats.DefaultFormat,
    fieldName: 'birthday',
    defaultValue: '',
    inputType: InputType.DATE,
    config: {
      validate: (value) => value < getTimeStamp() || 'inputs.errors.date_future',
      required: { message: 'inputs.errors.birthday_required', value: true },
    },
  },
  birthdayReadOnly: {
    label: BirthdayLabel,
    placeholder: GlobalVariables.dateFormats.DefaultFormat,
    fieldName: 'birthdayReadOnly',
    defaultValue: getDate(),
    inputType: InputType.DATE,
    readOnly: true,
  },
  birthdayWithTooltip: {
    label: BirthdayLabel,
    placeholder: GlobalVariables.dateFormats.DefaultFormat,
    fieldName: 'birthdayWithTooltip',
    defaultValue: '',
    inputType: InputType.DATE,
    tooltip: 'inputs.tooltip.birthday',
  },
  birthdayDisabled: {
    label: BirthdayLabel,
    placeholder: GlobalVariables.dateFormats.DefaultFormat,
    fieldName: 'birthdayDisabled',
    defaultValue: '',
    inputType: InputType.DATE,
    disabled: true,
  },
};
