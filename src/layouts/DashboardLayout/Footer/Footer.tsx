import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RootStyle } from './Footer.style';
import { getCurrentYear } from '@/utils';
import { useMemo } from 'react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = useMemo(() => getCurrentYear(), []);
  return (
    <RootStyle alignItems={'center'}>
      <Typography variant="body2">
        {t('dashboard.app_name')} &copy; {currentYear}
      </Typography>
    </RootStyle>
  );
};
