import { GenericInput } from '@/components';
import { Grid, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { inputObjects } from '../InputForms.constants';

export const BasicInputsForm = () => {
  const basicFormMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  return (
    <FormProvider {...basicFormMethods}>
      <Stack width={'100%'}>
        <Grid item container xs={12} justifyContent="space-between" spacing={'0.5rem'}>
          <Grid item container xs={12} sm={4.5} spacing={'0.5rem'}>
            <Grid item xs={12} sm={6}>
              <GenericInput inputObject={inputObjects.firstName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GenericInput inputObject={inputObjects.lastName} />
            </Grid>
          </Grid>

          <Grid item container xs={12} sm={7.5} spacing={'0.5rem'}>
            <Grid item xs={12} sm={5}>
              <GenericInput inputObject={inputObjects.email} />
            </Grid>
            <Grid item xs={5} sm={2}>
              <GenericInput inputObject={inputObjects.age} textAlign="center" />
            </Grid>
            <Grid item xs={7} sm={5}>
              <GenericInput inputObject={inputObjects.birthday} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4.5}>
            <GenericInput inputObject={inputObjects.password} />
          </Grid>
          <Grid item xs={12} sm={7.5}>
            <GenericInput inputObject={inputObjects.phone} />
          </Grid>
          <Grid item xs={12}>
            <GenericInput inputObject={inputObjects.description} />
          </Grid>
        </Grid>
      </Stack>
    </FormProvider>
  );
};
