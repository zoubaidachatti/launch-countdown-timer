import { TypographyOverflow } from '@/components';
import { ClickAwayListener, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TaskItem } from './TaskItem/TaskItem';
import { tasks } from './TasksList.constants';
import { StyledButton } from './TasksList.style';

export const TasksList = ({ onClickAway }: { onClickAway: () => void }) => {
  const { t } = useTranslation();

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Stack spacing={1} maxHeight={'80vh'} onClick={(e) => e.stopPropagation()}>
        <TypographyOverflow fontWeight={600} color={'primary.main'}>
          {t('task.tasks')}
        </TypographyOverflow>
        <Stack maxWidth={'100%'} direction={'row'} flexWrap={'wrap'} gap={0.5}>
          <StyledButton variant="contained" size="small">
            {t('common.all')}
          </StyledButton>
          <StyledButton variant="text" size="small">
            {t('common.todo')}
          </StyledButton>
          <StyledButton variant="text" size="small">
            {t('common.in_progress')}
          </StyledButton>
          <StyledButton variant="text" size="small">
            {t('common.completed')}
          </StyledButton>
        </Stack>
        <Stack spacing={0.75}>
          {tasks.map((task) => (
            <TaskItem {...task} key={task.id} />
          ))}
        </Stack>
        <StyledButton variant="text" size="small">
          {t('message.see_all')}
        </StyledButton>
      </Stack>
    </ClickAwayListener>
  );
};
