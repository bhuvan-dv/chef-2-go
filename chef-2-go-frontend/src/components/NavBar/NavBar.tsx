import React, { useRef, useEffect, useState } from 'react'
import './NavBar.css'
import gsap from 'gsap';
import { initializeNavBarAnimation } from './NavBarAnimation';

type NavBarProps = {
    navbarState : boolean
}

const NavBar = (props: NavBarProps) => {
    // GSAP learning
    const {navbarState} = props;
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
    // expirement
    
    return (
        // main div
        <div ref={navBarMenu} className="navbar-main-container flex justify-between">
            {/* lefft div */}
            <div ref={leftNavBar} className="left-navbar w-1/2 h-1/2 self-center flex flex-col justify-between items-start font-left-navbar-link  ">
                <div className="left-navrbar__items flex justify-around w-1/2 text-3xl font-Nova-Square self-center">
                    {/* contact */}
                    <a href="/" className="">Contact</a>
                    {/* FAQ */}
                    <a href="/">FAQs</a>
                </div>
                <div className="left-navrbar__items flex justify-around w-1/2 text-3xl font-Nova-Square self-center">
                    {/* Instagram */}
                    <a href="/">Instagram</a>
                    {/* Terms */}
                    <a href="/">Terms</a>
                </div>
                <div className="left-navrbar__items w-1/2  flex pl-10 text-xs font-Nova-Square self-center">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae provident velit necessitatibus nemo. Cumque nam quisquam eos reprehenderit a sapiente quaerat eligendi libero alias laborum amet iusto tenetur aut eaque quas, neque molestias, non, quam nobis quo labore? Quam doloremque impedit doloribus ipsum libero cupiditate fugit odit debitis laboriosam corrupti.</p>
                </div>
            </div>
            <div ref={rightNavBar}  className="right-navbar w-1/2 h-1/2 self-center flex flex-col justify-between gap-10 text-6xl  font-Nova-Square ">
                <div className="right-navbar-items font-Nova-Square self-center hover:border-b-4">
                    <a href='/'>
                        Mission
                    </a>
                </div>
                <div className="right-navbar-items self-center hover:border-b-4">
                    <a href='/'>Chefs</a>
                </div>
                <div className="right-navbar-items self-center hover:border-b-4">
                    <a href='/'>Recipes</a>
                </div>
                <div className="right-navbar-items self-center hover:border-b-4">
                    <a href='/'>Shop</a>
                </div>
            </div>
            {/* right div */}
        </div>
    )
}

export default NavBar
