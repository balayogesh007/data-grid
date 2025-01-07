import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GridData } from './components/Grid-Data/GridData';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GridData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
