import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NoDataFoundProps } from './NoDataFound.type';

export const NoDataFound = ({ message, minHeight }: NoDataFoundProps) => {
  const { t } = useTranslation();
  return (
    <Stack minHeight={minHeight} justifyContent={'center'} alignItems={'center'}>
      <Typography p={0} textAlign={'center'} color={'grey.400'}>
        {t(message ?? 'common.no_results')}
      </Typography>
    </Stack>
  );
};
