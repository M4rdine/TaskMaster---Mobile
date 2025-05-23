export type TaskStatus = 'PENDING' | 'DONE';

export interface Task {
  id: string;
  title: string;
  dueDate: Date;
  createdAt: Date;
  status: TaskStatus;
  priority: string;
}
