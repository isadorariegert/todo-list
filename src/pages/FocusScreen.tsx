import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { TasksProps } from '../models/Task';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Task = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

type Props = TasksProps & {};

const FocusScreen: React.FC<Props> = ({ tasks, updateTaskCompletion }) => {
  const task = tasks.filter((task) => !task.isComplete)[0];

  const handleMarkCompleted = () => {
    updateTaskCompletion(task.id, true);
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>mark completed</Button>
    </Container>
  ) : (
    <Task>No incomplete tasks. Yay!</Task>
  );
};

export default FocusScreen;
