import './App.css';
import React from 'react';
import Login from './auth/Login';
import PrivateRouter from './privatePage/PrivateRouter';
import { Routes, Route } from "react-router-dom";
import LoginState from './auth/LoginState';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        {LoginState() && <Route path="/private" element={<PrivateRouter/>}/>}
      </Routes>
    </div>
  );
}

export default App;
