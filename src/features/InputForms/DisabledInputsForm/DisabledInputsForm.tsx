import { GenericInput } from '@/components';
import { Grid, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { inputObjects } from '../InputForms.constants';

export const DisabledInputsForm = () => {
  const disabledFormMethods = useForm({ mode: 'onChange', shouldFocusError: true });
  return (
    <FormProvider {...disabledFormMethods}>
      <Stack width={'100%'}>
        <Grid container justifyContent="space-between" spacing={'0.5rem'}>
          <Grid item xs={12} sm={3}>
            <GenericInput inputObject={inputObjects.firstNameDisabled} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <GenericInput inputObject={inputObjects.lastNameReadOnly} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <GenericInput inputObject={inputObjects.birthdayDisabled} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <GenericInput inputObject={inputObjects.birthdayReadOnly} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <GenericInput inputObject={inputObjects.descriptionDisabled} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <GenericInput inputObject={inputObjects.descriptionReadOnly} />
          </Grid>
        </Grid>
      </Stack>
    </FormProvider>
  );
};
