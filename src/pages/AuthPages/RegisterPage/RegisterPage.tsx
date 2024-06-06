import { GenericInput, Toast } from '@/components';
import { GlobalVariables, RouterPaths } from '@/config/constants';
import { Button, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterInputsConfig } from './RegisterPage.constants';
import { StyledLink } from './RegisterPage.style';

export function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const registerMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  const handleRegister = registerMethods.handleSubmit((values) => {
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
    <Stack
      height={'100vh'}
      justifyContent={{ md: 'center', xs: 'flex-start' }}
      alignItems={'center'}
    >
      <Stack spacing={2} margin={'4%'}>
        <Typography textAlign="center" fontWeight={700} variant="h1" color="primary.main">
          {t('auth.sign_up')}
        </Typography>
        <FormProvider {...registerMethods}>
          <Stack spacing={1} minWidth={{ sm: 400, xs: '70vw' }}>
            <Stack gap={1} direction={{ xs: 'column', sm: 'row' }}>
              <Stack width={{ xs: '100%', sm: '50%' }}>
                <GenericInput inputObject={RegisterInputsConfig.firstName} />
              </Stack>
              <Stack width={{ xs: '100%', sm: '50%' }}>
                <GenericInput inputObject={RegisterInputsConfig.lastName} />
              </Stack>
            </Stack>
            <GenericInput inputObject={RegisterInputsConfig.username} />
            <GenericInput inputObject={RegisterInputsConfig.email} />
            <GenericInput inputObject={RegisterInputsConfig.password} />
            <GenericInput inputObject={RegisterInputsConfig.confirmPassword} />
          </Stack>
        </FormProvider>
        <Button onClick={handleRegister} variant="contained">
          {t('common.validate')}
        </Button>
        <StyledLink variant="body2" textAlign={'center'}>
          <Trans
            i18nKey="auth.already_have_an_account"
            components={{ span: <Link to={RouterPaths.AuthPaths.loginPath} /> }}
          />
        </StyledLink>
      </Stack>
    </Stack>
  );
}

export default RegisterPage;
