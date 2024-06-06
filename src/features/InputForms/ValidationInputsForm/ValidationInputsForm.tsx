import { GenericInput } from '@/components';
import { Button, Grid, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { inputObjects } from '../InputForms.constants';

export const ValidationInputsForm = () => {
  const { t } = useTranslation();
  const errorFormMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  const validate = errorFormMethods.handleSubmit(
    () => {},
    () => {},
  );

  return (
    <FormProvider {...errorFormMethods}>
      <Stack width={'100%'}>
        <Grid item container xs={12} justifyContent="space-between" spacing={'0.5rem'}>
          <Grid item container xs={12} sm={4.5} spacing={'0.5rem'}>
            <Grid item xs={12} sm={6}>
              <GenericInput
                inputObject={{
                  ...inputObjects.firstName,
                  fieldName: `${inputObjects.firstName.fieldName}2`,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GenericInput
                inputObject={{
                  ...inputObjects.lastName,
                  fieldName: `${inputObjects.lastName.fieldName}2`,
                }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={7.5} spacing={'0.5rem'}>
            <Grid item xs={12} sm={5}>
              <GenericInput
                inputObject={{
                  ...inputObjects.email,
                  fieldName: `${inputObjects.email.fieldName}2`,
                }}
              />
            </Grid>
            <Grid item xs={5} sm={2}>
              <GenericInput
                inputObject={{
                  ...inputObjects.age,
                  fieldName: `${inputObjects.age.fieldName}2`,
                }}
                textAlign="center"
              />
            </Grid>
            <Grid item xs={7} sm={5}>
              <GenericInput
                inputObject={{
                  ...inputObjects.birthday,
                  fieldName: `${inputObjects.birthday.fieldName}2`,
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4.5}>
            <GenericInput
              inputObject={{
                ...inputObjects.password,
                fieldName: `${inputObjects.password.fieldName}2`,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <GenericInput
              inputObject={{
                ...inputObjects.description,
                fieldName: `${inputObjects.description.fieldName}2`,
              }}
            />
          </Grid>
        </Grid>
        <Stack marginTop={1} alignItems={'center'}>
          <Button color="primary" variant="contained" onClick={validate}>
            {t('common.submit')}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};
