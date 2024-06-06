import { Avatar, Stack } from '@mui/material';
import { ActivityStatusStyle, RootStyle } from './MessageItem.style';
import { MessageItemProps } from './MessageItem.type';
import { TypographyOverflow } from '@/components';
import { useTranslation } from 'react-i18next';
import ReceivedCallIcon from '@/assets/icons/call_received.svg?react';

export const MessageItem = ({
  avatar,
  username,
  status,
  text,
  missedCall,
  callEnded,
  received,
}: MessageItemProps) => {
  const { t } = useTranslation();
  return (
    <RootStyle direction={'row'} spacing={0.5} alignItems={'center'} width={'100%'} padding={'4px'}>
      <Stack position={'relative'}>
        <Avatar
          variant="circular"
          src={avatar}
          alt={username}
          sx={{ width: 40, height: 40, backgroundColor: (th) => th.palette.grey[200] }}
        />
        <ActivityStatusStyle status={status} />
      </Stack>
      <Stack width={'calc(100% - 45px)'} direction={'row'} justifyContent={'space-between'}>
        <Stack direction={'column'} width={'calc(100% - 70px)'}>
          <TypographyOverflow fontWeight={600}>{username}</TypographyOverflow>
          <Stack
            direction={'row'}
            spacing={0.5}
            alignItems={'center'}
            sx={{
              svg: {
                width: 15,
                height: 15,
                fill: (th) => (missedCall ? th.palette.error.main : th.palette.grey[600]),
              },
            }}
          >
            {(missedCall || callEnded) && <ReceivedCallIcon />}
            <TypographyOverflow
              fontSize={'0.8rem'}
              color={missedCall ? 'error.main' : callEnded ? 'grey.600' : ''}
            >
              {t(
                text
                  ? text
                  : missedCall
                    ? 'message.missed_call'
                    : callEnded
                      ? 'message.call_ended'
                      : '',
              )}
            </TypographyOverflow>
          </Stack>
        </Stack>
        <Stack justifyContent={'flex-end'}>
          <TypographyOverflow fontSize={'0.65rem'} color="grey.600">
            {t(received)}
          </TypographyOverflow>
        </Stack>
      </Stack>
    </RootStyle>
  );
};
