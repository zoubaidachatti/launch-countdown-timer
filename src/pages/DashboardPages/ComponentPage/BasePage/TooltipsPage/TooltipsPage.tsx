import { CustomCard } from '@/components';
import { TooltipPlacements } from '@/types/interfaces';
import { Button, Stack, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tooltipVariants, tooltipsPlacements } from './TooltipsPage.constant';

export function TooltipsPage() {
  const { t } = useTranslation();
  return (
    <CustomCard header="tooltip.basic_tooltip">
      <Stack spacing={2}>
        {tooltipVariants.map((tooltip) => (
          <Stack key={tooltip.id} spacing={1.5}>
            <Typography variant="h4">{t(tooltip.label)}</Typography>
            <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
              {tooltipsPlacements.map((tooltipPlacement) => (
                <Tooltip
                  key={tooltipPlacement.id + tooltip.id}
                  arrow={tooltip.arrow}
                  placement={tooltipPlacement.placement as TooltipPlacements}
                  title={
                    <Stack p={0.5} spacing={1}>
                      <Typography variant="h4">{t(`${tooltipPlacement.content}_title`)}</Typography>
                      <Typography variant="body2">{t(tooltipPlacement.content)}</Typography>
                    </Stack>
                  }
                >
                  <Button variant="contained">{t(tooltipPlacement.label)}</Button>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </CustomCard>
  );
}

export default TooltipsPage;
