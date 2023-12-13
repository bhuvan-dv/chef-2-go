import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';
interface HeaderProps {
  menuState: boolean;
  setMenuState: (state: boolean) => void;
}

const Header: FC<HeaderProps> = ({ menuState, setMenuState }) => {
  return (
    <header className="site-header">
      <div className="brand-icon">
        <Link to="/">
          <div className="icon">
            {/* <i className="fab fa-react"></i> */}
            <Loader/>
          </div>
          <span className="text-3xl">CHEF2GO</span>
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