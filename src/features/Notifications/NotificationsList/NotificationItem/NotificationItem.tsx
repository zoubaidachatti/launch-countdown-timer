import { Avatar, Stack } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { RootStyle, StyledSpan } from './NotificationItem.style';
import { NotificationItemProps } from './NotificationItem.type';
import { TypographyOverflow } from '@/components';

export function NotificationItem({ avatar, username, text, received }: NotificationItemProps) {
  const { t } = useTranslation();
  return (
    <RootStyle direction={'row'} spacing={0.5} alignItems={'center'} width={'100%'} padding={'4px'}>
      <Avatar
        variant="rounded"
        src={avatar}
        alt={username}
        sx={{ width: 40, height: 40, backgroundColor: (th) => th.palette.grey[200] }}
      />
      <Stack width={'calc(100% - 60px)'}>
        <TypographyOverflow fontSize={'0.65rem'}>
          <Trans
            i18nKey={text}
            values={{ username }}
            components={{
              span: <StyledSpan />,
            }}
          />
          <StyledSpan title={t(received)} color="grey.600">{` ${t(received)}`}</StyledSpan>
        </TypographyOverflow>
      </Stack>
    </RootStyle>
  );
}

export default NotificationItem;
