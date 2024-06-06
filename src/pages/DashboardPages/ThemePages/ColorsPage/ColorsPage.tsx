import { CustomCard } from '@/components';
import { ColorItem } from '@/features';
import { Stack, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { colorsLists } from './ColorsPage.constants';

const SPACE_EVENLY = 'space-evenly';

export const ColorsPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const colors = useMemo(() => colorsLists(theme), [theme]);

  return (
    <CustomCard header={'colors.theme_colors'}>
      <Stack
        columnGap={4}
        rowGap={2.5}
        flexWrap={'wrap'}
        direction={'row'}
        alignItems={SPACE_EVENLY}
        justifyContent={SPACE_EVENLY}
      >
        {colors.map(({ id, label, data }, colorsIndex) => (
          <Stack key={id} spacing={1} alignItems={SPACE_EVENLY} justifyContent={SPACE_EVENLY}>
            <Typography variant="h3" fontWeight={600}>
              {t(label)}
            </Typography>
            <Stack
              gap={2.5}
              flexWrap={'wrap'}
              direction={'row'}
              alignItems={colorsIndex === colors.length - 2 ? 'center' : SPACE_EVENLY}
              justifyContent={colorsIndex === colors.length - 2 ? 'center' : SPACE_EVENLY}
            >
              {data.map(({ id: itemId, hex, rgb, label: colorLabel, isDark }) => (
                <ColorItem key={itemId} hex={hex} rgb={rgb} label={colorLabel} isDark={isDark} />
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </CustomCard>
  );
};

export default ColorsPage;
