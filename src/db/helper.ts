import { Phase, Task } from "../roadmap/roadmap.model";

export function createTasks(names: string[]): Task[] {
  return names.map((name, index) => {
    return {
      name,
      id: index + 1,
      is_completed: false
    };
  });
}

export function createPhase(id: number, name: string, tasks: Task[]): Phase {
  return {
    id,
    name,
    tasks,
    is_completed: false
  };
}
