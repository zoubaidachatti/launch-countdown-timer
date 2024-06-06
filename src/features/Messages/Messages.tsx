import InboxIcon from '@/assets/icons/inbox.svg?react';
import { SVGContainer } from '@/components';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import { MessagesList } from './MessagesList/MessagesList';

export const Messages = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip
      title={<MessagesList onClickAway={() => setIsOpen(false)} />}
      placement="bottom"
      open={isOpen}
      arrow
    >
      <SVGContainer isinverted={`${true}`} onClick={() => setIsOpen((prev) => !prev)}>
        <InboxIcon />
      </SVGContainer>
    </Tooltip>
  );
};
