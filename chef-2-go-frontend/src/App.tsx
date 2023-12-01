import React from 'react';
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
  );
}

export default App;
