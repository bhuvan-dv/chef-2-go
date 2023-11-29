import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
}

export default App;
