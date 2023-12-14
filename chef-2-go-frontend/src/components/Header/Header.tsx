import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';
import Confetti from 'react-confetti'

interface HeaderProps {
  menuState: boolean;
  setMenuState: (state: boolean) => void;
}

const Header: FC<HeaderProps> = ({ menuState, setMenuState }) => {
  const [playAnimation, setPlayAnimation] = React.useState(false);
  
  return (
    <header className="site-header">
      <div className="brand-icon" onMouseEnter={() => setPlayAnimation(true)} onMouseLeave={() => setPlayAnimation(false)}>
        <Link to="/">
          <div className="icon">
            {/* <i className="fab fa-react"></i> */}
            <Loader />
            {playAnimation &&
            <Confetti
              width={200}
              height={50}
            />
            }
          </div>
          <span className="text-3xl" style={{fontFamily:"Morion"}}>CHEF2GO</span>
        </Link>
      </div>
      <div>
        <button
          className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
          onClick={() => setMenuState(!menuState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;