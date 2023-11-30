import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import ChefRoutes from './routes/ChefRoutes';
function App() {
  return (
   <Router>
      <header>
        <Navbar/>
      </header>
      <main>
        <ChefRoutes/>
      </main>
   </Router>
  );
}

export default App;
