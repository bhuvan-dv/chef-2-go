import React from 'react';
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import ChefRoutes from './routes/ChefRoutes';
import About from './pages/About/About';
function App() {
  return (
   <Router>
      <header>
        <Navbar/>
      </header>
      <main>
        {/* <ChefRoutes/> */}
        <About/>
      </main>
   </Router>
>>>>>>> main
  );
}

export default App;
