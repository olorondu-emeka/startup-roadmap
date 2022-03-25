import * as db from "../db";

import { CompleteTaskDTO, Task } from "./roadmap.model";

/**
 * Marks a particular task as completed
 * @param body the DTO containing: phaseId and taskId
 * @returns the completed Task object
 */
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

/**
 * TODO:
 * 1. create db functions and its methods
 * 2. write testsetProgress feature
 * 3. setup Github Actions for test
 * 4. complete getProgress feature
 */
