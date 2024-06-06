import { ActivityStatus } from '@/config/enums';

export type MessageItemProps = {
  avatar: string;
  text?: string;
  username: string;
  received: string;
  status: ActivityStatus;
  missedCall?: boolean;
  callEnded?: boolean;
};
