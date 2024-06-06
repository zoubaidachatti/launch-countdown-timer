import {
  CheckboxGroup,
  ColorPickerInput,
  CustomFileUpload,
  DateInput,
  RadioGroup,
  RangeInput,
  SelectInput,
  SwitchInput,
  TextAreaInput,
  TextInput,
} from '@/components';
import { InputType } from '@/config/enums';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import { GenericInputProps } from './GenericInput.type';

export function GenericInput({
  inputObject,
  textAreaHeight,
  textAlign,
  itemsDirection,
}: GenericInputProps) {
  const { control } = useFormContext();
  const {
    inputType,
    fieldName,
    label,
    config,
    defaultValue,
    disabled,
    readOnly,
    multiple,
    options,
    disabledOptions,
    placeholder,
    tooltip,
    maxLength,
    size,
    acceptTypes,
    rangeConfig,
  } = inputObject;

  const rules = {
    ...config,
  };

  const generateInput = (
    field: ControllerRenderProps<FieldValues, string>,
    fieldState: ControllerFieldState,
  ) => {
    switch (inputType) {
      case InputType.DATE:
        return (
          <DateInput
            label={label}
            name={fieldName}
            type={inputType}
            value={field.value}
            tooltip={tooltip}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            textAlign={textAlign}
          />
        );
      case InputType.TEXT:
      case InputType.NUMBER:
      case InputType.PASSWORD:
      case InputType.PHONE:
        return (
          <TextInput
            label={label}
            name={fieldName}
            type={inputType}
            value={field.value}
            tooltip={tooltip}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            textAlign={textAlign}
            maxLength={maxLength}
          />
        );

      case InputType.TEXTAREA:
        return (
          <TextAreaInput
            label={label}
            name={fieldName}
            value={field.value}
            tooltip={tooltip}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            minHeight={textAreaHeight}
            textAlign={textAlign}
            maxLength={maxLength}
          />
        );
      case InputType.FILE:
        return (
          <CustomFileUpload
            label={label}
            name={fieldName}
            value={field.value}
            tooltip={tooltip}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            acceptTypes={acceptTypes}
            isMultiple={multiple}
            maxLength={maxLength}
          />
        );
      case InputType.SELECT:
        return (
          <SelectInput
            label={label}
            name={fieldName}
            placeholder={placeholder}
            value={field.value}
            tooltip={tooltip}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            isMultiple={multiple}
            options={options}
            disabledOptions={disabledOptions}
            textAlign={textAlign}
          />
        );
      case InputType.CHECKBOX:
        return (
          <CheckboxGroup
            label={label}
            name={fieldName}
            value={field.value}
            tooltip={tooltip}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            options={options}
            disabledOptions={disabledOptions}
            size={size}
            itemsDirection={itemsDirection}
          />
        );
      case InputType.RADIO:
        return (
          <RadioGroup
            label={label}
            name={fieldName}
            value={field.value}
            tooltip={tooltip}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            options={options}
            disabledOptions={disabledOptions}
            size={size}
            itemsDirection={itemsDirection}
          />
        );
      case InputType.RANGE:
        return (
          <RangeInput
            label={label}
            name={fieldName}
            value={field.value}
            tooltip={tooltip}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
            size={size}
            marks={rangeConfig?.marks}
            max={rangeConfig?.max}
            min={rangeConfig?.min}
            step={rangeConfig?.step}
            rangeTooltip={rangeConfig?.tooltip}
            showValue={rangeConfig?.showValue}
          />
        );
      case InputType.COLOR_PICKER:
        return (
          <ColorPickerInput
            label={label}
            name={fieldName}
            value={field.value}
            tooltip={tooltip}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
          />
        );
      case InputType.SWITCH:
        return (
          <SwitchInput
            label={label}
            size={size}
            name={fieldName}
            value={field.value}
            tooltip={tooltip}
            disabled={disabled}
            readOnly={readOnly}
            onChange={field.onChange}
            error={fieldState.error}
            required={Boolean(config?.required?.valueOf())}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Controller
      render={({ field, fieldState }) => <>{generateInput(field, fieldState)}</>}
      name={fieldName}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
}
