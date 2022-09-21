import { nanoid } from 'nanoid';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TaskTS } from '../models/Task';

function ListScreen() {
  const [tasks, setTasks] = useState<TaskTS[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);
  const handleNewTaskKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim().length != 0) {
      //validation to deny insert blank spaces
      setTasks((tasks) => [
        ...tasks,
        { id: nanoid(), label: newTaskLabel, isComplete: false },
      ]);
      setNewTaskLabel(''); //to clear the input
    }
  };

  const handleTaskCompleteChange =
    (handleTask: TaskTS) => (e: ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === handleTask.id)
            return { ...task, isComplete: e.target.checked };
          return task;
        })
      );
    };

  const handleTaskDeleteClick = (handledTask: TaskTS) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  console.log(tasks);

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            {task.label}
            <button onClick={handleTaskDeleteClick(task)}>delete</button>
          </div>
        ))}
      </div>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeypress}
      />
      <div>
        <button onClick={handleClearClick}>Clear Completed Tasks</button>
      </div>
    </div>
  );
}

export default ListScreen;
