export interface Task {
  id: number;
  name: string;
  is_completed: boolean;
}

export interface Phase {
  id: number;
  name: string;
  tasks: Task[];
  is_completed: boolean;
}

export interface CompleteTaskDTO {
  taskId: number;
  phaseId: number;
}
