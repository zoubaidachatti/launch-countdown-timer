import { TaskStatus } from '@/config/enums';
import { generateRandomNumber } from '@/utils';

export const tasks = [
  {
    id: 500,
    text: 'task.task_example_1',
    subtext: 'task.design',
    time: generateRandomNumber(896104375, 1274795575),
    status: TaskStatus.todo,
    statusText: 'common.todo',
  },
  {
    id: 504,
    text: 'task.task_example_3',
    subtext: 'task.coding',
    time: generateRandomNumber(896104375, 1274795575),
    status: TaskStatus.inProgress,
    statusText: 'common.in_progress',
  },
  {
    id: 508,
    text: 'task.task_example_4',
    subtext: 'task.meeting',
    time: generateRandomNumber(896104375, 1274795575),
    status: TaskStatus.done,
    statusText: 'common.completed',
  },
];
