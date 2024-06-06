import { GenericInput } from '@/components';
import { RouterPaths } from '@/config/constants';
import { Button, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { LoginInputsConfig } from './LoginPage.constants';
import { StyledLink } from './LoginPage.style';

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const loginMethods = useForm({ mode: 'onChange', shouldFocusError: true });

  const handleLogin = loginMethods.handleSubmit(() => {
    navigate(RouterPaths.DashboardPaths.homePath);
  });

  return (
    <Stack
      height={'100vh'}
      justifyContent={{ md: 'center', xs: 'flex-start' }}
      alignItems={'center'}
    >
      <Stack spacing={2} margin={'4%'}>
        <Stack spacing={1} alignItems={'center'}>
          <Typography textAlign="center" fontWeight={700} variant="h1" color="primary.main">
            {t('auth.welcome_back')}
          </Typography>
          <Typography textAlign="center" variant="h6">
            {t('auth.login_to_access_dashboard')}
          </Typography>
        </Stack>
        <FormProvider {...loginMethods}>
          <Stack spacing={1} minWidth={{ sm: 400, xs: undefined }}>
            <GenericInput inputObject={LoginInputsConfig.email} />
            <GenericInput inputObject={LoginInputsConfig.password} />
            <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'}>
              <GenericInput inputObject={LoginInputsConfig.rememberMe} />
              <StyledLink variant="body2">
                <Link to={RouterPaths.AuthPaths.forgetPasswordPath}>
                  {t('auth.forget_password')}
                </Link>
              </StyledLink>
            </Stack>
            <Button onClick={handleLogin} variant="contained">
              {t('auth.login')}
            </Button>
          </Stack>
        </FormProvider>
        <StyledLink variant="body2" textAlign={'center'}>
          <Trans
            i18nKey="auth.don_t_have_an_account"
            components={{ span: <Link to={RouterPaths.RegisterPaths.inscriptionPath} /> }}
          />
        </StyledLink>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
