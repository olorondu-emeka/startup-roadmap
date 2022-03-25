import { CompleteTaskDTO, Task } from "./roadmap.model";

export function completeTask(body: CompleteTaskDTO): Task {
  const { phaseId, taskId } = body;

  const task: Task = db.getTask(phaseId, taskId);
  task.is_completed = true;

  return task;
}
