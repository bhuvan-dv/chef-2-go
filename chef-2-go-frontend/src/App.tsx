import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


import ChefRoutes from './routes/ChefRoutes';

function App() {
  return (
    <Router>
      <main>
        <ChefRoutes/>
      </main>
    </Router>
  );
}

export default App;
