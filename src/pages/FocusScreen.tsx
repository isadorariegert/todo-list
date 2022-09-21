import React from 'react';
import { TasksProps } from '../models/Task';

type Props = TasksProps & {};

const FocusScreen: React.FC<Props> = ({ tasks }) => {
  const task = tasks[0];

  return task ? <div>{task.label}</div> : <div>no tasks</div>;
};

export default FocusScreen;
