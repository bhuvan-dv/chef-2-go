import React, { useRef, useEffect, useState } from 'react';
import './NavBar.css';
import { initializeNavBarAnimation } from './NavBarAnimation';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type NavBarProps = {
  navbarState: boolean;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { navbarState } = props;
  const navBarMenu = useRef<HTMLDivElement>(null);
  const leftNavBar = useRef<HTMLDivElement>(null);
  const rightNavBar = useRef<HTMLDivElement>(null);
  const navBarTimeline = useRef<gsap.core.Timeline | null>(null);

  const { t } = useTranslation('common');

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
            {t('left.navbar.contact')}
          </a>
          <a href="/">{t('left.navbar.faqs')}</a>
        </div>
        <div className="left-navrbar__items flex justify-around w-1/2 text-2xl font-style self-center">
          <a href="/">{t('left.navbar.instagram')}</a>
          <a href="/">{t('left.navbar.terms')}</a>
        </div>
        <div className="left-navrbar__items w-full lg:w-1/2 flex flex-col text-xs font-style self-center">
          <p>
            {t('left.navbar.text')}
          </p>
        </div>
      </div>
      <div ref={rightNavBar} className="right-navbar w-full lg:w-1/2 h-1/2 self-center flex flex-col justify-between gap-4 text-4xl font-Nova-Square ">
        <div className="right-navbar-items font-style self-center hover:border-b-4">
          <Link to={'/premium'}>{t('right.navbar.mission')}</Link>
        </div>
        <div className="right-navbar-items self-center hover:border-b-4">
          <Link to={'/'}>{t('right.navbar.chefs')}</Link>
        </div>
        <div className="right-navbar-items self-center hover:border-b-4">
          <Link to={'/'}>{t('right.navbar.recipes')}</Link>
        </div>
        <div className="right-navbar-items self-center hover:border-b-4">
          <Link to={'/'}>{t('right.navbar.shop')}</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
