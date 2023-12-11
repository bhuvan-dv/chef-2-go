import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useDispatch} from 'react-redux';
import { AppDispatch } from './store';

import ChefRoutes from './routes/ChefRoutes';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  return (
    <Router>
      <main>
        <ChefRoutes/>
      </main>
    </Router>
  );
}

export default App;
