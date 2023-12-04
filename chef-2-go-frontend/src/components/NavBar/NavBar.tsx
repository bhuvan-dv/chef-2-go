import React, { useRef, useEffect } from 'react';
import './NavBar.css';
import { initializeNavBarAnimation } from './NavBarAnimation';
import { Link } from 'react-router-dom';

type NavBarProps = {
  navbarState: boolean;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { navbarState } = props;
  const navBarMenu = useRef<HTMLDivElement>(null);
  const leftNavBar = useRef<HTMLDivElement>(null);
  const rightNavBar = useRef<HTMLDivElement>(null);
  const navBarTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    navBarTimeline.current = initializeNavBarAnimation(navBarMenu.current!, leftNavBar.current!, rightNavBar.current!);
  }, []);
  useEffect(() => {
    navbarState ? navBarTimeline.current?.play() : navBarTimeline.current?.reverse();
  }, [navbarState]);

  return (
    <div ref={navBarMenu} className="navbar-main-container flex justify-between">
      <div ref={leftNavBar} className="left-navbar w-1/2 h-1/2 self-center flex flex-col justify-between items-start font-left-navbar-link">
        <div className="left-navrbar__items flex justify-around w-1/2 text-2xl font-style self-center">
          <a href="/" className="">
            Contact
          </a>
          <a href="/">FAQs</a>
        </div>
        <div className="left-navrbar__items flex justify-around w-1/2 text-2xl font-style self-center">
          <a href="/">Instagram</a>
          <a href="/">Terms</a>
        </div>
        <div className="left-navrbar__items w-1/2 flex pl-5 text-xs font-style self-center">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae provident velit necessitatibus nemo. Cumque nam
            quisquam eos reprehenderit a sapiente quaerat eligendi libero alias laborum amet iusto tenetur aut eaque quas,
            neque molestias, non, quam nobis quo labore? Quam doloremque impedit doloribus ipsum libero cupiditate fugit odit
            debitis laboriosam corrupti.
          </p>
        </div>
      </div>
      <div ref={rightNavBar} className="right-navbar w-1/2 h-1/2 self-center flex flex-col justify-between gap-4 text-4xl font-Nova-Square ">
        <div className="right-navbar-items font-style self-center hover:border-b-4">
          <Link to={'/premium'}>Mission</Link>
        </div>
        <div className="right-navbar-items self-center hover:border-b-4">
          <Link to={'/'}>Chefs</Link>
        </div>
        <div className="right-navbar-items self-center hover:border-b-4">
          <Link to={'/'}>Recipes</Link>
        </div>
        <div className="right-navbar-items self-center hover:border-b-4">
          <Link to={'/'}>Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
