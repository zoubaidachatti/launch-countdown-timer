import ClockIcon from '@/assets/icons/schedule.svg?react';
import { TypographyOverflow } from '@/components';
import { ColorsConfig, GlobalVariables, Layout } from '@/config/constants';
import { formatDate } from '@/utils';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RootStyle, StatusStyle } from './TaskItem.style';
import { TaskItemProps } from './TaskItem.type';

export const TaskItem = ({ text, subtext, time, status, statusText }: TaskItemProps) => {
  const { t } = useTranslation();
  return (
    <RootStyle
      direction={'column'}
      spacing={0.5}
      alignItems={'flex-start'}
      width={'100%'}
      padding={'7px'}
    >
      <Stack direction={'column'}>
        <TypographyOverflow fontSize={'0.8rem'} color={'grey.600'}>
          {t(subtext)}
        </TypographyOverflow>
        <TypographyOverflow fontWeight={600}>{t(text)}</TypographyOverflow>
      </Stack>

      <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={0.5}
          sx={{
            svg: {
              width: 15,
              height: 15,
              fill: (th) => th.palette.grey[500],
            },
          }}
        >
          <ClockIcon />
          <TypographyOverflow fontSize={'0.8rem'} color={'grey.500'}>
            {formatDate(time, GlobalVariables.dateFormats.TimeFormat12Hour)}
          </TypographyOverflow>
        </Stack>
        <Stack bgcolor={ColorsConfig.grey[50]} borderRadius={`${Layout.borderRadius}px`}>
          <StatusStyle status={status}>
            <TypographyOverflow fontWeight={600} fontSize={'0.65rem'}>
              {t(statusText)}
            </TypographyOverflow>
          </StatusStyle>
        </Stack>
      </Stack>
    </RootStyle>
  );
};
