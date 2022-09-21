import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListScreen from './pages/ListScreen';
import FocusScreen from './pages/FocusScreen';
import { TaskTS } from './models/Task';

function App() {
  const [tasks, setTasks] = useState<TaskTS[]>([]);
  const tasksProps = { tasks, setTasks };

  return (
    <Router>
      <nav>
        <NavLink to="/">List</NavLink> - <NavLink to="/focus">Focus</NavLink>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<ListScreen {...tasksProps} />}></Route>
        <Route path="/focus" element={<FocusScreen {...tasksProps} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
