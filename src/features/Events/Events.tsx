import CalendarIcon from '@/assets/icons/calendar_month.svg?react';
import { SVGContainer } from '@/components';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import { EventsList } from '.';

export const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip
      title={<EventsList onClickAway={() => setIsOpen(false)} />}
      placement="bottom-end"
      open={isOpen}
    >
      <SVGContainer isinverted={`${true}`} onClick={() => setIsOpen((prev) => !prev)}>
        <CalendarIcon />
      </SVGContainer>
    </Tooltip>
  );
};
