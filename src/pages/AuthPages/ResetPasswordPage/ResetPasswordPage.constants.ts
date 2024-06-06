import { GlobalVariables } from '@/config/constants';
import { InputType } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

export const FormInputsConfig: Record<string, InputConfig> = {
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
