import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListScreen from './pages/ListScreen';
import FocusScreen from './pages/FocusScreen';
import { TaskTS } from './models/Task';

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
    <Router>
      <nav>
        <NavLink to="/">List</NavLink> - <NavLink to="/focus">Focus</NavLink>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<ListScreen {...tasksApi} />}></Route>
        <Route path="/focus" element={<FocusScreen {...tasksApi} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
