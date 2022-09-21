import React from 'react';
import { TasksProps } from '../models/Task';

type Props = TasksProps & {};

const FocusScreen: React.FC<Props> = ({ tasks, updateTaskCompletion }) => {
  const task = tasks.filter((task) => !task.isComplete)[0];

  const handleMarkCompleted = () => {
    updateTaskCompletion(task.id, true);
  };

  return task ? (
    <div>
      <div>{task.label}</div>
      <button onClick={handleMarkCompleted}>mark completed</button>
    </div>
  ) : (
    <div>no incomplete tasks. Yay!</div>
  );
};

export default FocusScreen;
