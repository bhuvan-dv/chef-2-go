import React, { useState } from 'react';
import { NavBar } from '../index';
import {Menu, Clear} from '@mui/icons-material';
const Home = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const handleIconClick = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <div>
      <div>

        <span onClick={handleIconClick} className="hover:cursor-pointer" style={{zIndex:1, position:'absolute', color:'pink', top:10, right:10,}}>
          {isNavBarOpen&&
            <Clear sx={{ fontSize:'3rem' }}/>
          }
          {!isNavBarOpen&&
            <Menu sx={{ fontSize:'3rem' }}/>
          }
        </span>
        
      </div>
      {/* Render NavBar based on the state */}
      {isNavBarOpen && <NavBar />}
      
    </div>
  );
};

export default Home;
