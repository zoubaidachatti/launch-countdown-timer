import { Button, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { checkboxInputObject, radioInputObject } from './CheckAndRadioPage.constants';
import { CustomCard, GenericInput } from '@/components';

export function CheckAndRadioPage() {
  const formMethods = useForm({ mode: 'onChange', shouldFocusError: true });
  const { t } = useTranslation();

  const submit = formMethods.handleSubmit(() => {});
  return (
    <FormProvider {...formMethods}>
      <CustomCard header={'inputs.check_and_radio_inputs'}>
        <Stack direction={'column'} gap={'1rem'}>
          <Typography variant="h5" fontWeight={600}>
            {t('inputs.first_example_direction_column')}
          </Typography>
          <Stack gap={'1rem'} direction={'row'} flexWrap={'wrap'}>
            <GenericInput inputObject={checkboxInputObject.checkboxSmall} />
            <GenericInput inputObject={checkboxInputObject.checkboxMedium} />
            <GenericInput inputObject={checkboxInputObject.checkboxLarge} />
          </Stack>
          <Stack gap={'1rem'} direction={'row'} flexWrap={'wrap'}>
            <GenericInput inputObject={radioInputObject.radioSmall} />
            <GenericInput inputObject={radioInputObject.radioMedium} />
            <GenericInput inputObject={radioInputObject.radioLarge} />
          </Stack>
          <Typography variant="h5" fontWeight={600}>
            {t('inputs.second_example_direction_row')}
          </Typography>
          <Stack gap={'1rem'} direction={'column'}>
            <GenericInput
              inputObject={{
                ...checkboxInputObject.checkboxSmall,
                fieldName: `${checkboxInputObject.checkboxSmall.fieldName}2`,
              }}
              itemsDirection="row"
            />
            <GenericInput
              inputObject={{
                ...checkboxInputObject.checkboxMedium,
                fieldName: `${checkboxInputObject.checkboxMedium.fieldName}2`,
              }}
              itemsDirection="row"
            />
            <GenericInput
              inputObject={{
                ...checkboxInputObject.checkboxLarge,
                fieldName: `${checkboxInputObject.checkboxLarge.fieldName}2`,
              }}
              itemsDirection="row"
            />
          </Stack>
          <Stack gap={'1rem'} direction={'column'}>
            <GenericInput
              inputObject={{
                ...radioInputObject.radioSmall,
                fieldName: `${radioInputObject.radioSmall.fieldName}2`,
              }}
              itemsDirection="row"
            />
            <GenericInput
              inputObject={{
                ...radioInputObject.radioMedium,
                fieldName: `${radioInputObject.radioMedium.fieldName}2`,
              }}
              itemsDirection="row"
            />
            <GenericInput
              inputObject={{
                ...radioInputObject.radioLarge,
                fieldName: `${radioInputObject.radioLarge.fieldName}2`,
              }}
              itemsDirection="row"
            />
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard header={'inputs.disabled_checkbox'}>
        <Stack gap={'1rem'} direction={'row'} flexWrap={'wrap'}>
          <Stack gap={'1rem'} direction={'row'} flexWrap={'wrap'}>
            <GenericInput inputObject={checkboxInputObject.disabledCheckbox} />
            <GenericInput inputObject={checkboxInputObject.disabledOptions} />
            <GenericInput inputObject={checkboxInputObject.readOnlyCheckbox} />
          </Stack>
          <Stack gap={'1rem'} direction={'row'} flexWrap={'wrap'}>
            <GenericInput inputObject={radioInputObject.disabledRadio} />
            <GenericInput inputObject={radioInputObject.disabledOptionsRadio} />
            <GenericInput inputObject={radioInputObject.readOnlyRadio} />
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard header={'inputs.checkbox_validation'}>
        <Stack gap={'1rem'} alignItems={'flex-start'}>
          <Stack gap={'1rem'} direction={'row'} flexWrap={'wrap'}>
            <GenericInput inputObject={checkboxInputObject.checkboxWithValidation} />
            <GenericInput inputObject={radioInputObject.radioWithValidation} />
          </Stack>
          <Button variant="contained" onClick={submit}>
            {t('common.submit')}
          </Button>
        </Stack>
      </CustomCard>
    </FormProvider>
  );
}

export default CheckAndRadioPage;
