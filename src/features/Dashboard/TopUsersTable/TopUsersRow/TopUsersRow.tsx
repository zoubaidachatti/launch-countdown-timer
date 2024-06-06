import { CustomTableCell, CustomTableRow, TypographyOverflow } from '@/components';
import { GlobalVariables, Layout } from '@/config/constants';
import { formatDate, generatePassedTimeString } from '@/utils';
import { Avatar, Stack } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { USERS_HEADER_LABELS } from '../TopUsersTable.constants';
import { TopUsersRowProps } from './TopUsersRow.type';

export const TopUsersRow = ({ user }: TopUsersRowProps) => {
  const { t } = useTranslation();
  const { firstName, lastName, jobType, food, joinedAt, lastLogin, photo } = user;

  const lastLoginTime = useMemo(() => {
    return lastLogin
      ? generatePassedTimeString(
          lastLogin,
          t('lng'),
          GlobalVariables.dateFormats.DayMonthWithSlashFormat,
          true,
        )
      : 0;
  }, [lastLogin]);

  return (
    <CustomTableRow height={390 / 6}>
      <CustomTableCell cell={USERS_HEADER_LABELS[0]}>
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          paddingBlock={0.5}
          paddingInline={0.5}
        >
          <Avatar
            sx={(th) => ({
              background: Layout.linearGradient(
                th.palette.primary.dark,
                th.palette.primary.main,
                th.palette.primary.light,
              ),
            })}
            variant="circular"
            src={photo}
          />
        </Stack>
      </CustomTableCell>
      <CustomTableCell cell={USERS_HEADER_LABELS[1]}>
        <Stack alignItems={'flex-start'}>
          <TypographyOverflow
            width="100%"
            textAlign={'left'}
            fontWeight={600}
          >{`${firstName} ${lastName}`}</TypographyOverflow>
          {joinedAt && (
            <TypographyOverflow width="100%" textAlign={'left'}>
              {t('table.joined', {
                date: formatDate(joinedAt, GlobalVariables.dateFormats.DefaultFormat, t('lng')),
              })}
            </TypographyOverflow>
          )}
        </Stack>
      </CustomTableCell>
      <CustomTableCell cell={USERS_HEADER_LABELS[2]}>
        <TypographyOverflow variant="h6" textAlign={'center'}>
          {food}
        </TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={USERS_HEADER_LABELS[3]}>
        <TypographyOverflow variant="h6" textAlign={'center'}>
          {jobType}
        </TypographyOverflow>
      </CustomTableCell>
      <CustomTableCell cell={USERS_HEADER_LABELS[4]}>
        <Stack>
          <TypographyOverflow textAlign={'left'} variant="body2" color="grey.500">
            {t('table.last_login')}
          </TypographyOverflow>
          <TypographyOverflow fontWeight={600} textAlign={'left'}>
            {lastLoginTime}
          </TypographyOverflow>
        </Stack>
      </CustomTableCell>
    </CustomTableRow>
  );
};
