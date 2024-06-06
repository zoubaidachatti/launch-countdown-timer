import { GenericInput, Toast } from '@/components';
import { Button, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormInputsConfig } from './ForgetPasswordPage.constants';
import toast from 'react-hot-toast';
import { GlobalVariables } from '@/config/constants';

export function ForgetPasswordPage() {
  const { t } = useTranslation();
  const formMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  const handleSubmit = formMethods.handleSubmit(() => {
    toast(
      (toastObject) => (
        <Toast
          message="common.check_your_email"
          variant={'standard'}
          type={'info'}
          onClose={() => toast.dismiss(toastObject.id)}
        />
      ),
      {
        position: 'top-center',
        duration: GlobalVariables.alerts.defaultDuration,
      },
    );
  });
  return (
    <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Stack spacing={2} margin={'4%'} maxWidth={400}>
        <Stack spacing={1} alignItems={'center'}>
          <Typography textAlign="center" fontWeight={700} variant="h1" color="primary.main">
            {t('auth.reset_your_password')}
          </Typography>
          <Typography textAlign="center" variant="h6">
            {t('auth.provide_email_description')}
          </Typography>
        </Stack>
        <FormProvider {...formMethods}>
          <Stack spacing={2} minWidth={{ sm: 400, xs: undefined }}>
            <GenericInput inputObject={FormInputsConfig.email} />
            <Typography textAlign="center" variant="body2">
              {t('auth.reset_password_description')}
            </Typography>
            <Button onClick={handleSubmit} variant="contained">
              {t('auth.reset_password')}
            </Button>
          </Stack>
        </FormProvider>
      </Stack>
    </Stack>
  );
}

export default ForgetPasswordPage;
