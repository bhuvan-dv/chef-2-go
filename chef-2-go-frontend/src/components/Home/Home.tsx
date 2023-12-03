import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { NavBar } from '../index';
import { Menu, Clear } from '@mui/icons-material';

const Home = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  // const handleIconClick = () => {
  //   const navBar = document.getElementById('navbar');

  //   if (isNavBarOpen) {
  //     gsap.to(navBar, { duration: 0.5, height: 0, ease: 'power2.inOut' });
  //   } else {
  //     gsap.to(navBar, { duration: 0.5, height: 'auto', ease: 'power2.inOut' });
  //   }

  //   setIsNavBarOpen(!isNavBarOpen);
  // };

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
      <NavBar navbarState={isNavBarOpen} setNavBarState={setIsNavBarOpen}/>
      {/* } */}
    </div>
  );
};

export default Home;
