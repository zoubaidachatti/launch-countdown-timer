import { GenericInput, Toast } from '@/components';
import { GlobalVariables, RouterPaths } from '@/config/constants';
import { Button, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FormInputsConfig } from './ResetPasswordPage.constants';

export function ResetPasswordPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  const handleSubmit = formMethods.handleSubmit((values) => {
    const { password, confirmPassword } = values;
    if (password === confirmPassword) {
      navigate(RouterPaths.AuthPaths.loginPath);
    } else {
      toast(
        (toastObject) => (
          <Toast
            message="inputs.errors.your_passwords_do_not_match"
            variant={'standard'}
            type={'error'}
            onClose={() => toast.dismiss(toastObject.id)}
          />
        ),
        {
          position: 'top-center',
          duration: GlobalVariables.alerts.defaultDuration,
        },
      );
    }
  });
  return (
    <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Stack spacing={2} margin={'4%'} maxWidth={400}>
        <Stack spacing={1} alignItems={'center'}>
          <Typography textAlign="center" fontWeight={700} variant="h1" color="primary.main">
            {t('auth.create_new_password')}
          </Typography>
          <Typography textAlign="center" variant="h6">
            {t('auth.create_new_password_description')}
          </Typography>
        </Stack>
        <FormProvider {...formMethods}>
          <Stack spacing={1} minWidth={{ sm: 400, xs: undefined }}>
            <GenericInput inputObject={FormInputsConfig.password} />
            <GenericInput inputObject={FormInputsConfig.confirmPassword} />
          </Stack>
        </FormProvider>
        <Button onClick={handleSubmit} variant="contained">
          {t('auth.reset_password')}
        </Button>
      </Stack>
    </Stack>
  );
}

export default ResetPasswordPage;
