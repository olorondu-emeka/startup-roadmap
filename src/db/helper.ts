import { Phase, Task } from "../roadmap/roadmap.model";

import { RawPhase } from "./data";

/**
 * Creates a Task object from an array of task names
 * @param names an array of task names
 * @returns an array of Task objects
 */
export function createTasks(names: string[]): Task[] {
  return names.map((name, index) => {
    return {
      name,
      id: index + 1,
      is_completed: false
    };
  });
}

/**
 * Creates a Phase object given an id, name and array of Task objects
 * @param id intended phase id
 * @param name name/title of the phase
 * @param tasks an array of Task objects
 * @returns
 */
export function createPhase(id: number, name: string, tasks: Task[]): Phase {
  return {
    id,
    name,
    tasks,
    is_completed: false
  };
}

/**
 * Creates an array of phase objects, which in this case is our data set
 * @param roadmap an array of RawPhase (i.e a partially processed Phase object)
 * @returns
 */
export function assemble(roadmap: RawPhase[]): Phase[] {
  const phases: Phase[] = [];

  roadmap.forEach((item, index) => {
    const tasks = createTasks(item.tasks);
    phases.push(createPhase(index + 1, item.title, tasks));
  });

  return phases;
}
