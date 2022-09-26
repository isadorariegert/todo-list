import { nanoid } from 'nanoid';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import IconButton from '../components/IconButton';
import Spacer from '../components/Spacer';
import TextButton from '../components/TextButton';
import DeleteIcon from '../icons/DeleteIcon';
import { TasksProps, TaskTS } from '../models/Task';

const Container = styled.div`
  display: flex;
  flex: 0 1 460px;
  flex-direction: column;
  align-items: stretch;
  min-width: 460px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 45px 25px;
  min-height: 60vh;
`;

const ListItem = styled.label`
  display: flex;
  align-items: center;
  padding: 4px 0;
  font-size: 18px;
`;

const DeleteButton = styled(IconButton)`
  visibility: hidden;

  ${ListItem}:hover & {
    visibility: visible;
  }
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 15px;
  padding: 20px 24px;
  color: #fff;
  font-size: 16px;
`;

type Props = TasksProps & {};

const ListScreen: React.FC<Props> = ({
  tasks,
  setTasks,
  updateTaskCompletion,
}) => {
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

  const handleTaskCompleteChange = (task: TaskTS) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    updateTaskCompletion(task.id, e.target.checked);
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
      <Container>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={handleTaskCompleteChange(task)}
              />
              <Spacer width={24} />
              {task.label}
              <Spacer flex={1} />
              <DeleteButton onClick={handleTaskDeleteClick(task)}>
                <DeleteIcon />
              </DeleteButton>
            </ListItem>
          ))}
        </List>
        <Spacer height={30} />
        <Input
          placeholder="Add a Task"
          value={newTaskLabel}
          onChange={handleNewTaskLabelChange}
          onKeyPress={handleNewTaskKeypress}
        />
        <Spacer height={45} />
        <TextButton onClick={handleClearClick}>
          Clear Completed Tasks
        </TextButton>
      </Container>
    </div>
  );
};

export default ListScreen;
