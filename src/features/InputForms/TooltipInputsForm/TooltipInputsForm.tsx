import { GenericInput } from '@/components';
import { Grid, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { inputObjects } from '../InputForms.constants';

export const TooltipInputsForm = () => {
  const tooltipFormMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  return (
    <FormProvider {...tooltipFormMethods}>
      <Stack width={'100%'}>
        <Grid container justifyContent="space-between" spacing={'0.5rem'}>
          <Grid item xs={12} sm={6}>
            <GenericInput inputObject={inputObjects.passwordWithTooltip} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <GenericInput inputObject={inputObjects.birthdayWithTooltip} />
          </Grid>
        </Grid>
      </Stack>
    </FormProvider>
  );
};
