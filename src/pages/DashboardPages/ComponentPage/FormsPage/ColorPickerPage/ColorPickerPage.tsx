import { CustomCard, GenericInput } from '@/components';
import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { ColorsInputObject } from './ColorPickerPage.constants';

export function ColorPickerPage() {
  const formMethods = useForm({ shouldFocusError: true, mode: 'onChange' });
  return (
    <FormProvider {...formMethods}>
      <CustomCard>
        <Stack spacing={1}>
          <GenericInput inputObject={ColorsInputObject[0]} />
          <GenericInput inputObject={ColorsInputObject[1]} />
          <GenericInput inputObject={ColorsInputObject[2]} />
        </Stack>
      </CustomCard>
    </FormProvider>
  );
}

export default ColorPickerPage;
