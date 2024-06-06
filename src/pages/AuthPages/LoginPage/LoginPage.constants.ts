import { GlobalVariables } from '@/config/constants';
import { InputType } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

export const LoginInputsConfig: Record<string, InputConfig> = {
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
      required: { value: true, message: 'inputs.errors.email_required' },
      pattern: {
        value: GlobalVariables.regex.password,
        message: 'inputs.errors.password_invalid',
      },
    },
  },
  rememberMe: {
    inputType: InputType.CHECKBOX,
    fieldName: 'rememberMe',
    size: 'medium',
    options: [{ value: 1, label: 'auth.remember_me' }],
  },
};
