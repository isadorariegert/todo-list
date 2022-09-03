import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListScreen from './pages/ListScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListScreen />}></Route>
        <Route path='/focus'></Route>
      </Routes>
    </Router>
  );
}

export default App;
