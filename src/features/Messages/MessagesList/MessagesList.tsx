import { TypographyOverflow } from '@/components';
import { useAppSelector } from '@/redux/hooks';
import { ClickAwayListener, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MessageItem } from '..';
import { messages } from './MessageList.constants';
import { StyledButton } from './MessagesList.style';

export const MessagesList = ({ onClickAway }: { onClickAway: () => void }) => {
  const { t } = useTranslation();
  const inboxCount = useAppSelector((state) => state.authReducer.inboxCount);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Stack spacing={1} maxHeight={'80vh'} onClick={(e) => e.stopPropagation()}>
        <TypographyOverflow fontWeight={600} color={'primary.main'}>
          {t('message.messages_n', { n: inboxCount })}
        </TypographyOverflow>
        <Stack spacing={0.75}>
          {messages.map((message) => (
            <MessageItem {...message} key={message.id} />
          ))}
        </Stack>
        <StyledButton variant="text" size="small">
          {t('message.see_all')}
        </StyledButton>
      </Stack>
    </ClickAwayListener>
  );
};
