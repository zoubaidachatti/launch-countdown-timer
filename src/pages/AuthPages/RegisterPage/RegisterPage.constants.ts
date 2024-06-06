import { GlobalVariables } from '@/config/constants';
import { InputType } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

const FirstNameLabel = 'inputs.firstName';
const FirstNamePlaceholder = 'inputs.placeholder.firstName';

export const RegisterInputsConfig: Record<string, InputConfig> = {
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
  username: {
    label: 'inputs.username',
    placeholder: 'inputs.placeholder.username',
    fieldName: 'username',
    defaultValue: '',
    inputType: InputType.TEXT,
    config: {
      required: { message: 'inputs.errors.username_required', value: true },
      pattern: {
        value: GlobalVariables.regex.username,
        message: 'inputs.errors.username_invalid',
      },
    },
  },
  email: {
    label: 'inputs.email',
    inputType: InputType.TEXT,
    placeholder: 'inputs.placeholder.email',
    fieldName: 'email',
    config: {
      required: { value: true, message: 'inputs.errors.email_required' },
      pattern: {
        value: GlobalVariables.regex.email,
        message: 'inputs.errors.email_invalid',
      },
    },
  },
  password: {
    label: 'inputs.password',
    inputType: InputType.PASSWORD,
    placeholder: 'inputs.placeholder.password',
    fieldName: 'password',
    config: {
      required: { value: true, message: 'inputs.errors.password_required' },
      pattern: {
        value: GlobalVariables.regex.password,
        message: 'inputs.errors.password_invalid',
      },
    },
  },
  confirmPassword: {
    label: 'inputs.confirm_password',
    inputType: InputType.PASSWORD,
    placeholder: 'inputs.placeholder.confirm_password',
    fieldName: 'confirmPassword',
    config: {
      required: { value: true, message: 'inputs.errors.password_required' },
      pattern: {
        value: GlobalVariables.regex.password,
        message: 'inputs.errors.password_invalid',
      },
    },
  },
};
