import { useTranslation } from 'react-i18next';
import { RootStyle } from './EventItem.style';
import { EventItemProps } from './EventItem.type';
import LocationIcon from '@/assets/icons/location_on.svg?react';
import { Stack, alpha } from '@mui/material';
import { TypographyOverflow } from '@/components';
import { ColorsConfig, GlobalVariables, Layout } from '@/config/constants';
import { formatDate } from '@/utils';

export const EventItem = ({ day, month, title, subtitle, location, variant }: EventItemProps) => {
  const { t } = useTranslation();
  return (
    <RootStyle
      direction={'row'}
      spacing={0.75}
      alignItems={'center'}
      width={'100%'}
      padding={'7px'}
      height={80}
    >
      <Stack
        width={60}
        height={'100%'}
        bgcolor={ColorsConfig.grey[50]}
        borderRadius={`${Layout.borderRadius}px`}
      >
        <Stack
          width={'100%'}
          height={'100%'}
          borderRadius={`${Layout.borderRadius}px`}
          bgcolor={(th) => alpha(th.palette[variant].main, 0.2)}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <TypographyOverflow color={ColorsConfig.grey[700]} fontWeight={600} variant="h3">
            {formatDate(day, GlobalVariables.dateFormats.Day)}
          </TypographyOverflow>
          <TypographyOverflow color={ColorsConfig.grey[700]} fontWeight={600} variant="h4">
            {formatDate(month, GlobalVariables.dateFormats.Month, t('lng'))}
          </TypographyOverflow>
        </Stack>
      </Stack>
      <Stack width={'calc(100% - 70px)'}>
        <TypographyOverflow fontWeight={600}>{t(title)}</TypographyOverflow>
        <TypographyOverflow color={'grey.500'} fontSize={'0.8rem'}>
          {t(subtitle)}
        </TypographyOverflow>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={0.5}
          sx={{
            svg: {
              width: 15,
              height: 15,
              fill: (th) => th.palette.grey[400],
            },
          }}
        >
          <LocationIcon />
          <TypographyOverflow fontSize={'0.8rem'} color={'grey.400'}>
            {location}
          </TypographyOverflow>
        </Stack>
      </Stack>
    </RootStyle>
  );
};
