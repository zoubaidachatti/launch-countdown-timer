import NotificationIcon from '@/assets/icons/notifications.svg?react';
import { SVGContainer } from '@/components';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import { NotificationList } from '.';

export const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip
      title={<NotificationList onClickAway={() => setIsOpen(false)} />}
      placement="bottom"
      open={isOpen}
      arrow
    >
      <SVGContainer isinverted={`${true}`} onClick={() => setIsOpen((prev) => !prev)}>
        <NotificationIcon />
      </SVGContainer>
    </Tooltip>
  );
};
