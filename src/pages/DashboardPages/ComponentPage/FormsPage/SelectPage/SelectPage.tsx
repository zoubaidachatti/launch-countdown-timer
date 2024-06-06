import { CustomCard, GenericInput } from '@/components';
import { Button, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { selectInputObject } from './SelectPage.constants';

export function SelectPage() {
  const { t } = useTranslation();
  const formMethods = useForm({ shouldFocusError: true, mode: 'onChange' });
  const validationFormMethods = useForm({ shouldFocusError: true, mode: 'onChange' });

  const submit = validationFormMethods.handleSubmit(() => {});

  return (
    <>
      <FormProvider {...formMethods}>
        <CustomCard header="inputs.select_inputs">
          <Stack direction={'row'} flexWrap={'wrap'} gap={'0.5rem'}>
            <Stack width={200}>
              <GenericInput inputObject={selectInputObject.names} />
            </Stack>
            <Stack width={200}>
              <GenericInput inputObject={selectInputObject.ages} />
            </Stack>
            <Stack width={200}>
              <GenericInput inputObject={selectInputObject.users} textAlign="center" />
            </Stack>
          </Stack>
        </CustomCard>
        {/* readonly & disabled*/}
        <CustomCard header="inputs.disabled_and_read_only_select">
          <Stack direction={'row'} flexWrap={'wrap'} gap={'0.5rem'}>
            <Stack width={200}>
              <GenericInput inputObject={selectInputObject.disabledNames} />
            </Stack>
            <Stack width={200}>
              <GenericInput inputObject={selectInputObject.readOnlyAges} />
            </Stack>
            <Stack width={200}>
              <GenericInput inputObject={selectInputObject.disabledOptionsNames} />
            </Stack>
          </Stack>
        </CustomCard>
        {/* multiple select */}
        <CustomCard header="inputs.multiple_select">
          <Stack direction={'row'} flexWrap={'wrap'} gap={'0.5rem'}>
            <Stack width={300}>
              <GenericInput inputObject={selectInputObject.multipleUsers} />
            </Stack>
            <Stack width={300}>
              <GenericInput inputObject={selectInputObject.multipleUsersReadOnly} />
            </Stack>
          </Stack>
        </CustomCard>
      </FormProvider>
      {/* validation */}
      <FormProvider {...validationFormMethods}>
        <CustomCard header="inputs.validation">
          <Stack spacing={'0.5rem'} alignItems={'flex-start'}>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'0.5rem'} width={'100%'}>
              <Stack width={300}>
                <GenericInput inputObject={selectInputObject.requiredAge} />
              </Stack>
              <Stack width={300}>
                <GenericInput inputObject={selectInputObject.validationNames} />
              </Stack>
            </Stack>
            <Button variant="contained" onClick={submit}>
              {t('common.submit')}
            </Button>
          </Stack>
        </CustomCard>
      </FormProvider>
    </>
  );
}

export default SelectPage;
