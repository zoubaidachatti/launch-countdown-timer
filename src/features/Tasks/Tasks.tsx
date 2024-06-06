import TasksIcon from '@/assets/icons/format_list_bulleted.svg?react';
import { SVGContainer } from '@/components';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import { TasksList } from '.';

export const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip
      title={<TasksList onClickAway={() => setIsOpen(false)} />}
      placement="bottom"
      open={isOpen}
      arrow
    >
      <SVGContainer isinverted={`${true}`} onClick={() => setIsOpen((prev) => !prev)}>
        <TasksIcon />
      </SVGContainer>
    </Tooltip>
  );
};
