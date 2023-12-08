import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface SidebarNavProps {
  menuState: boolean;
  setMenuState: (state: boolean) => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ menuState, setMenuState }) => {
  const sidebarMenu = useRef<HTMLDivElement>(null);
  const sidebarMenuOverlay = useRef<HTMLDivElement>(null);
  const menuLayer = useRef<HTMLDivElement>(null);
  const menuTimeline = useRef<gsap.core.Timeline | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay.current, menuLayer.current, sidebarMenu.current],
      {
        duration: 0,
        x: '100%',
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    if (menuTimeline.current) {
      menuState ? menuTimeline.current.play() : menuTimeline.current.reverse();
    }
  }, [menuState]);

  useEffect(() => {
    const unlisten = navigate('/');
    return unlisten;
  }, [navigate, setMenuState]);

  return (
    <>
      <div
        className="sidebarNavigationOverlay"
        ref={sidebarMenuOverlay}
        onClick={() => setMenuState(false)}
      ></div>
      <div className="menu-wrapper">
        <div className="menu-layer" ref={menuLayer}></div>
        <nav className="sidebarNavigation" ref={sidebarMenu}>
          <div className="sidebar-top">
            <div className="links-wrapper">
              <Link className="menu-link" to="/">
                Home
              </Link>
              <Link className="menu-link" to="/about">
                About
              </Link>
              <Link className="menu-link" to="/services">
                Chefs
              </Link>
              <Link className="menu-link" to="/gallery">
                Recipes
              </Link>
              <Link className="menu-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="sidebar-bottom">
            <ul className="extra-links">
              <li className="link-item">
                <div className="link-title">Email</div>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </li>
              <li className="link-item">
                <div className="link-title">Find Us</div>
                <span>57, Arch Road</span>
                <span>Middleton</span>
              </li>
              <li className="link-item">
                <div className="link-title">Social Media</div>
                <div className="social-media-links">
                  <a href="www.twitter.com" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="www.facebook.com" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="www.google.com" className="social-link">
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </li>
              <li className="link-item">
                <div className="link-title">Phone</div>
                <span>000-000-0000</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarNav;
