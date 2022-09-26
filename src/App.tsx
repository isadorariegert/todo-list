import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListScreen from './pages/ListScreen';
import FocusScreen from './pages/FocusScreen';
import { TaskTS } from './models/Task';
import styled from 'styled-components';
import { colors, GlobalStyle } from './styles';

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px;
  min-height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const TabButton = styled(NavLink)`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 120px;
  text-decoration: none;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.active {
    background-color: ${colors.primaryYellow};
    color: #000;
  }
`;

function App() {
  const [tasks, setTasks] = useState<TaskTS[]>([]);

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const tasksApi = { tasks, setTasks, updateTaskCompletion };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Nav>
            <TabButton to="/">List</TabButton>
            <TabButton to="/focus">Focus</TabButton>
          </Nav>
          <br />
          <Routes>
            <Route path="/" element={<ListScreen {...tasksApi} />}></Route>
            <Route
              path="/focus"
              element={<FocusScreen {...tasksApi} />}
            ></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
