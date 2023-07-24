import './App.css';
import React from 'react';
import Login from './auth/Login';
import PrivateRouter from './privatePage/PrivateRouter';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const { loggedIn } = useSelector((state : any) => state.auth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        {loggedIn && <Route path="/private" element={<PrivateRouter/>}/>}
      </Routes>
    </div>
  );
}

export default App;
