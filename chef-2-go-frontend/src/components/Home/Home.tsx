import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { NavBar } from '../index';
import { Menu, Clear } from '@mui/icons-material';

const Home = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <div>
      <div>
        <span
          onClick={() => setIsNavBarOpen(!isNavBarOpen)}
          className="hover:cursor-pointer"
          style={{ zIndex: 1, position: 'absolute', color: 'pink', top: 10, right: 10 }}
        >
          {isNavBarOpen ? <Clear sx={{ fontSize: '3rem' }} /> : <Menu sx={{ fontSize: '3rem' }} />}
        </span>
      </div>

      {/* Render NavBar based on the state */}
      {/* {isNavBarOpen &&  */}
      <NavBar navbarState={isNavBarOpen}/>
      {/* } */}
    </div>
  );
};

export default Home;
