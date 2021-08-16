import { TaskStatus } from '../../tasks/task-status.enum';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
