import { TaskStatus } from '@/config/enums';

export type TaskItemProps = {
  text: string;
  subtext: string;
  time: number;
  status: TaskStatus;
  statusText: string;
};
