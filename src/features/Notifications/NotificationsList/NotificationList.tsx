import { TypographyOverflow } from '@/components';
import { ClickAwayListener, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NotificationItem } from '..';
import { notifications } from './NotificationList.constants';
import { StyledButton } from './NotificationList.style';

export const NotificationList = ({ onClickAway }: { onClickAway: () => void }) => {
  const { t } = useTranslation();
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Stack spacing={1} onClick={(e) => e.stopPropagation()}>
        <TypographyOverflow fontWeight={600} color={'primary.main'}>
          {t('notification.notifications')}
        </TypographyOverflow>
        <Stack maxWidth={'100%'} direction={'row'} flexWrap={'wrap'} gap={0.5}>
          <StyledButton variant="contained" size="small">
            {t('common.all')}
          </StyledButton>
          <StyledButton variant="text" size="small">
            {t('common.tags_and_mentions')}
          </StyledButton>
          <StyledButton variant="text" size="small">
            {t('common.comments')}
          </StyledButton>
          <StyledButton variant="text" size="small">
            {t('common.followers')}
          </StyledButton>
        </Stack>
        <Stack spacing={1} overflow={'auto'}>
          {notifications.map((notification) => (
            <Stack key={notification.day} spacing={0.75}>
              <TypographyOverflow fontWeight={600} color={'primary.main'}>
                {t(notification.day)}
              </TypographyOverflow>
              {notification.list.map((item) => (
                <NotificationItem key={item.id} {...item} />
              ))}
            </Stack>
          ))}
        </Stack>
        <StyledButton variant="text" size="small">
          {t('message.see_all')}
        </StyledButton>
      </Stack>
    </ClickAwayListener>
  );
};
