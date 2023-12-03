import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import ChefRoutes from './routes/ChefRoutes';
import About from './pages/About/About';
function App() {
  return (
   <Router>
      <main>
        <ChefRoutes/>
        {/* <About/> */}
      </main>
   </Router>
  );
}

export default App;
