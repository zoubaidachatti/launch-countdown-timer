import { CustomCard, GenericInput } from '@/components';
import { Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { settings } from './NotificationSettings.constants';

export const NotificationSettings = () => {
  const { t } = useTranslation();
  const formMethods = useForm();

  return (
    <CustomCard contentSx={{ padding: '15px' }}>
      <Stack spacing={3} height={{ xs: undefined, sm: 360 }}>
        <Typography color={'grey.800'} variant="h5" fontWeight={600}>
          {t('profile.notification_settings')}
        </Typography>
        <FormProvider {...formMethods}>
          <Stack
            direction={'column'}
            spacing={1}
            alignItems={'flex-start'}
            height={'100%'}
            justifyContent={'space-between'}
          >
            {settings.map((setting) => (
              <GenericInput key={setting.fieldName} inputObject={{ ...setting }} />
            ))}
          </Stack>
        </FormProvider>
      </Stack>
    </CustomCard>
  );
};
