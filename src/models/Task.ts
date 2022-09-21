export interface TaskTS {
  label: string;
  id: string;
  isComplete: boolean;
}

export interface TasksProps {
  tasks: TaskTS[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTS[]>>;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
}
