import { Phase, Task } from "roadmap/roadmap.model";

import { assemble } from "./helper";
import { roadmap } from "./data";

const db = assemble(roadmap);

export function completeTask(phaseId: number, taskId: number): Task {
  const phase = db[phaseId - 1];
  const task = phase.tasks[taskId - 1];
  task.is_completed = true;

  // mark phase as completed if the completed task is the last task in the phase
  if (taskId === phase.tasks.length) {
    phase.is_completed = true;
  }

  return task;
}

export function countPhaseTasks(phaseId: number): number {
  const phase = db[phaseId - 1];
  return phase.tasks.length;
}

export function getTask(phaseId: number, taskId: number): Task {
  const phase = db[phaseId - 1];
  const task = phase.tasks[taskId - 1];

  return task;
}

export function getProgress(): Phase[] {
  return db;
}
