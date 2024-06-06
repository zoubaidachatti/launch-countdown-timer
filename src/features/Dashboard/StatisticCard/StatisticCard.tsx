import { TypographyOverflow } from '@/components';
import { ColorsConfig, GlobalVariables } from '@/config/constants';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IconContainer, RootStyle } from './StatisticCard.style';
import { StatisticCardProps } from './StatisticCard.type';
import IncreaseIcon from '@/assets/icons/arrow_warm_up.svg?react';
import DecreaseIcon from '@/assets/icons/arrow_cool_down.svg?react';

export const StatisticCard = ({ icon, label, KPIs, selected, onClick }: StatisticCardProps) => {
  const { t } = useTranslation();
  const textColor = selected ? ColorsConfig.grey[100] : ColorsConfig.grey[500];
  return (
    <RootStyle
      direction={'column'}
      justifyContent={'space-between'}
      isselected={`${selected}`}
      onClick={onClick}
      spacing={1}
    >
      <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <IconContainer isselected={`${selected}`}>{icon}</IconContainer>
        <TypographyOverflow fontWeight={600} color={textColor}>
          {t(label)}
        </TypographyOverflow>
      </Stack>
      <Stack direction={'column'} spacing={1}>
        <TypographyOverflow fontWeight={600} color={textColor} variant="h4">
          {KPIs.amount}
        </TypographyOverflow>
        <Stack spacing={1} direction={'row'}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            sx={{
              svg: {
                fill: (th) => (KPIs.isNegative ? th.palette.error.main : th.palette.success.main),
                width: 15,
                height: 15,
              },
            }}
          >
            {KPIs.isNegative ? <DecreaseIcon /> : <IncreaseIcon />}
            <TypographyOverflow
              variant="body2"
              fontWeight={600}
              color={KPIs.isNegative ? 'error.main' : 'success.main'}
            >
              {`${KPIs.percentage}${GlobalVariables.percentage}`}
            </TypographyOverflow>
          </Stack>

          <TypographyOverflow variant="body2" fontWeight={600} color={textColor}>
            {t('dashboard.this_week', { amount: KPIs.week })}
          </TypographyOverflow>
        </Stack>
      </Stack>
    </RootStyle>
  );
};
