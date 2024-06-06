import { AreaChart, TypographyOverflow } from '@/components';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { KPICardProps } from './KPICard.type';
import { ColorsConfig } from '@/config/constants';

const KPICard = ({ data, area, xDataKey, label }: KPICardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Stack>
        <TypographyOverflow color={ColorsConfig.grey[500]} fontWeight={700}>
          {t(label)}
        </TypographyOverflow>
      </Stack>
      <Stack
        position={'absolute'}
        bottom={-20}
        left={-20}
        height={'calc(100% + 10px)'}
        width={'calc(100% + 46px)'}
      >
        <AreaChart
          data={data}
          areas={[area]}
          xAxis={{ dataKey: xDataKey, hide: true }}
          yAxis={{ hide: true }}
        />
      </Stack>
    </>
  );
};

export default KPICard;
