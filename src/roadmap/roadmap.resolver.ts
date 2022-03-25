import { CompleteTaskDTO, Task } from "./roadmap.model";

export function completeTask(body: CompleteTaskDTO): Task {
  const { phaseId, taskId } = body;

  // edge case for the very first task in the roadmap
  if (taskId === 1 && phaseId === 1) {
    const completedTask = db.completeTask(phaseId, taskId);
    return completedTask;
  }

  const resolvedPhaseId = taskId === 1 ? phaseId - 1 : phaseId;
  const resolvedTaskId = taskId === 1 ? db.countPhaseTasks(resolvedPhaseId) : taskId - 1;

  const previousTask = db.getTask(resolvedPhaseId, resolvedTaskId);

  if (!previousTask.is_completed) {
    throw new Error("Previous task is still pending");
  }

  const completedTask = db.completeTask(phaseId, taskId);
  return completedTask;
}
