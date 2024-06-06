import { CustomCard, TypographyOverflow } from '@/components';
import { GlobalVariables } from '@/config/constants';
import { useAppSelector } from '@/redux/hooks';
import { formatDate } from '@/utils';
import { Grid, Stack, Typography } from '@mui/material';
import { isArray } from 'lodash';
import { useTranslation } from 'react-i18next';

export const GeneralInformation = () => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.authReducer);

  const info = [
    { label: 'profile.education', value: user.education },
    { label: 'profile.languages', value: user.languages },
    { label: 'profile.department', value: user.jobType },
    { label: 'profile.work_history', value: user.companies },
    { label: 'profile.organization', value: user.organization },
    {
      label: 'profile.birthday',
      value: user.birthday
        ? formatDate(user.birthday, GlobalVariables.dateFormats.DefaultFormat)
        : '',
    },
  ];

  const InfoBox = ({ label, value }: { label: string; value?: string }) =>
    value && (
      <Stack
        borderRadius={'4px'}
        padding={2}
        width={'100%'}
        height={80}
        border={(th) => `1px solid ${th.palette.grey[200]}`}
      >
        <TypographyOverflow color={'grey.400'}>{t(label)}</TypographyOverflow>
        <TypographyOverflow title={value} fontWeight={600} color={'primary.main'}>
          {t(value)}
        </TypographyOverflow>
      </Stack>
    );

  return (
    <CustomCard contentSx={{ padding: '15px' }}>
      <Stack spacing={3} height={{ sm: 400, xs: undefined }}>
        <Stack spacing={2}>
          <Typography color={'grey.800'} variant="h5" fontWeight={600}>
            {t('profile.general_information')}
          </Typography>
          <Typography color="grey.400" fontSize={'0.75rem'}>
            {t('profile.general_information_description')}
          </Typography>
        </Stack>
        <Grid container>
          {info.map(({ label, value }, index) => (
            <Grid
              key={label}
              item
              xs={12}
              sm={6}
              paddingBottom={2}
              paddingRight={{ xs: 0, sm: index % 2 === 0 ? 1 : 0 }}
              paddingLeft={{ xs: 0, sm: index % 2 !== 0 ? 1 : 0 }}
            >
              <InfoBox
                label={label}
                value={isArray(value) ? value.map((v) => t(v)).join(', ') : value}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </CustomCard>
  );
};
