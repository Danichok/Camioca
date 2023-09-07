import React from 'react';
import './App.css';
import Panel from './pages/Panel/Panel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
            <Routes>
                <Route path='/panel/*' element={
                    <Panel />
                } />
                <Route path='/' element={
                    <Panel />
                } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
