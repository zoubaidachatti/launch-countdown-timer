import { GlobalVariables } from '@/config/constants';
import { InputType } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

export const FormInputsConfig: Record<string, InputConfig> = {
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
};
