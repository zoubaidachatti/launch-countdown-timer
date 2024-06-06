import { TypographyOverflow } from '@/components';
import { PaletteVariants } from '@/types/interfaces';
import { ClickAwayListener, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { EventItem } from './EventItem/EventItem';
import { events } from './EventsList.constants';
import { StyledButton } from './EventsList.style';

export const EventsList = ({ onClickAway }: { onClickAway: () => void }) => {
  const { t } = useTranslation();

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Stack spacing={1} maxHeight={'80vh'} onClick={(e) => e.stopPropagation()}>
        <TypographyOverflow fontWeight={600} color={'primary.main'}>
          {t('event.events')}
        </TypographyOverflow>
        <Stack spacing={0.75}>
          {events.map((event) => (
            <EventItem {...event} key={event.id} variant={event.variant as PaletteVariants} />
          ))}
        </Stack>
        <StyledButton variant="text" size="small">
          {t('message.see_all')}
        </StyledButton>
      </Stack>
    </ClickAwayListener>
  );
};
