import DropDownIcon from '@/assets/icons/arrow_drop_down.svg?react';
import { InputContainer, InputLabel } from '@/components';
import { TypographyOverflow } from '@/components/Typography/TypographyOverflow/TypographyOverflow';
import { Avatar, Select, Stack } from '@mui/material';
import { isArray } from 'lodash';
import { StyledMenuItem, StyledPlaceholder } from './SelectInput.style';
import { SelectInputProps } from './SelectInput.type';
import useSelectInput from './useSelectInput';

export function SelectInput({
  label,
  name,
  placeholder,
  tooltip,
  value,
  disabled,
  error,
  readOnly,
  required,
  isMultiple,
  textAlign,
  options,
  disabledOptions,
  onChange,
}: SelectInputProps) {
  const { renderValue, t, isOptionSelected, onSelect } = useSelectInput({
    value,
    isMultiple,
    onChange,
  });

  const onRenderValue = (selected: string | string[]) => {
    if (!selected || !selected?.length) {
      return (
        <StyledPlaceholder textAlign={textAlign}>
          {t(placeholder ?? 'common.select')}
        </StyledPlaceholder>
      );
    } else {
      if (isArray(selected)) {
        return selected.join(', ');
      }
      return selected;
    }
  };

  return (
    <InputContainer>
      <InputLabel
        errorMsg={error?.message}
        label={label}
        tooltip={tooltip}
        name={name}
        required={required}
      />
      <Select
        inputProps={{
          id: name,
        }}
        MenuProps={{
          disableScrollLock: true,
        }}
        sx={{
          textAlign,
        }}
        IconComponent={(props) => <DropDownIcon {...props} />}
        placeholder={t(placeholder ?? 'common.select')}
        name={name}
        multiple={isMultiple}
        labelId={name}
        id={name}
        value={renderValue}
        onChange={(changeValue) => {
          onSelect(changeValue.target.value);
        }}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        error={!!error}
        displayEmpty
        renderValue={onRenderValue}
      >
        {options?.map((option) => {
          const isSelected = isOptionSelected(option);
          return (
            <StyledMenuItem
              aria-selected={isSelected}
              selected={isSelected}
              isselected={`${isSelected}`}
              value={JSON.stringify(option)}
              key={option.value}
              disabled={disabledOptions?.includes(option.value)}
            >
              <Stack spacing={'0.5rem'} direction={'row'} alignItems={'center'} width={'100%'}>
                {option.image && <Avatar variant="circular" src={option.image} />}
                <TypographyOverflow>{t(option.label)}</TypographyOverflow>
              </Stack>
            </StyledMenuItem>
          );
        })}
      </Select>
    </InputContainer>
  );
}
