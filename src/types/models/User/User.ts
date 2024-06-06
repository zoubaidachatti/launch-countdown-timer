export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  jobType: string;
  pet: string;
  joinedAt?: number;
  lastLogin?: number;
  country?: string;
  food?: string;
  education?: string;
  birthday?: number;
  languages?: string[];
  companies?: string[];
  organization?: string[];

  numberOfPosts?: number;
  numberOfFollowers?: number;
  numberOfFollowing?: number;

  notificationCount?: number;
  inboxCount?: number;
  eventsCount?: number;
  tasksCount?: number;
}
