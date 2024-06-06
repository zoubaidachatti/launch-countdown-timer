import { ColorsConfig } from '@/config/constants';
import { InputType } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

export const ColorsInputObject: InputConfig[] = [
  {
    label: 'inputs.color_picker',
    fieldName: 'colorPicker1',
    inputType: InputType.COLOR_PICKER,
  },
  {
    label: 'inputs.color_picker_disabled',
    fieldName: 'colorPicker2',
    inputType: InputType.COLOR_PICKER,
    disabled: true,
  },
  {
    label: 'inputs.color_picker_readonly',
    fieldName: 'colorPicker3',
    inputType: InputType.COLOR_PICKER,
    readOnly: true,
    defaultValue: ColorsConfig.primary.light,
  },
];
