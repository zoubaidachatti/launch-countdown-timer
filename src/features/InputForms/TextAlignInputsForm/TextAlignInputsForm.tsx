import { GenericInput } from '@/components';
import { Grid, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { inputObjects } from '../InputForms.constants';

export const TextAlignInputsForm = () => {
  const textAlignFormMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  return (
    <FormProvider {...textAlignFormMethods}>
      <Stack width={'100%'}>
        <Grid item container xs={12} justifyContent="space-between" spacing={'0.5rem'}>
          <Grid item container xs={12} spacing={'0.5rem'}>
            <Grid item xs={12} sm={4}>
              <GenericInput
                inputObject={{
                  ...inputObjects.firstName,
                  fieldName: `${inputObjects.firstName.fieldName}1`,
                  placeholder: 'inputs.alignment.default',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GenericInput
                inputObject={{
                  ...inputObjects.lastName,
                  fieldName: `${inputObjects.lastName.fieldName}1`,
                  placeholder: 'inputs.alignment.left',
                }}
                textAlign="left"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GenericInput
                inputObject={{
                  ...inputObjects.phone,
                  fieldName: `${inputObjects.phone.fieldName}1`,
                  placeholder: 'inputs.alignment.right',
                }}
                textAlign="right"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <GenericInput
              inputObject={{
                ...inputObjects.description,
                fieldName: `${inputObjects.description.fieldName}1`,
                placeholder: 'inputs.alignment.center',
              }}
              textAlign="center"
            />
          </Grid>
        </Grid>
      </Stack>
    </FormProvider>
  );
};
