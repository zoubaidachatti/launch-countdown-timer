import { CustomCard, GenericInput } from '@/components';
import { Button, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FileInputsConfig } from './FileInputPage.constants';

export function FileInputPage() {
  const { t } = useTranslation();
  const formMethods = useForm({ shouldFocusError: true, mode: 'onChange' });
  const secondFormMethods = useForm({ shouldFocusError: true, mode: 'onChange' });
  const multipleFormMethods = useForm({ shouldFocusError: true, mode: 'onChange' });

  const validate = secondFormMethods.handleSubmit(() => {});
  return (
    <>
      <FormProvider {...formMethods}>
        <CustomCard header={'inputs.file_input'}>
          <Stack gap={'0.5rem'} direction={'row'} flexWrap={'wrap'}>
            <Stack spacing={'0.5rem'}>
              <Typography variant="h6">{t('common.example_index', { index: 1 })}</Typography>
              <Stack width={200}>
                <GenericInput inputObject={FileInputsConfig.fileInput} />
              </Stack>
            </Stack>
            <Stack spacing={'0.5rem'}>
              <Typography variant="h6">{t('common.example_index', { index: 2 })}</Typography>
              <Stack width={200}>
                <GenericInput inputObject={FileInputsConfig.document} />
              </Stack>
            </Stack>
          </Stack>
        </CustomCard>
        <CustomCard header={'inputs.file_input_disabled_and_read_only'}>
          <Stack gap={'0.5rem'} direction={'row'} flexWrap={'wrap'}>
            <Stack width={200}>
              <GenericInput inputObject={FileInputsConfig.fileInputDisabled} />
            </Stack>
            <Stack width={200}>
              <GenericInput inputObject={FileInputsConfig.fileInputReadOnly} />
            </Stack>
            <Stack width={200}>
              <GenericInput inputObject={FileInputsConfig.fileInputReadOnlyWithDefaultValue} />
            </Stack>
          </Stack>
        </CustomCard>
      </FormProvider>
      <FormProvider {...secondFormMethods}>
        <CustomCard header={'inputs.restricted_file_inputs'}>
          <Stack spacing={'0.5rem'} direction={'column'}>
            <Stack gap={'0.5rem'} direction={'row'} flexWrap={'wrap'}>
              <Stack width={200}>
                <GenericInput inputObject={FileInputsConfig.fileInputRequired} />
              </Stack>
              <Stack width={200}>
                <GenericInput inputObject={FileInputsConfig.fileInputRestricted} />
              </Stack>
            </Stack>
            <Stack alignItems={'flex-start'}>
              <Button variant="contained" color="primary" onClick={validate}>
                {t('common.submit')}
              </Button>
            </Stack>
          </Stack>
        </CustomCard>
      </FormProvider>
      {/* file with multiple select */}
      <FormProvider {...multipleFormMethods}>
        <CustomCard header={'inputs.file_with_multiple_select'}>
          <Stack spacing={'0.5rem'}>
            <GenericInput inputObject={FileInputsConfig.multipleFiles} />
            <GenericInput inputObject={FileInputsConfig.multipleFilesDisabled} />
            <GenericInput inputObject={FileInputsConfig.multipleFilesReadOnly} />
            <GenericInput inputObject={FileInputsConfig.multipleFilesReadOnlyWithDefaultValue} />
            <GenericInput inputObject={FileInputsConfig.multipleFilesWithValidation} />
          </Stack>
        </CustomCard>
      </FormProvider>
    </>
  );
}

export default FileInputPage;
