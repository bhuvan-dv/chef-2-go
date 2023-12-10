import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { a } from 'react-spring';
import axios from 'axios';

interface SidebarNavProps {
  menuState: boolean;
  setMenuState: (state: boolean) => void;
  islogedin: boolean;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ menuState, setMenuState, islogedin }) => {
  const sidebarMenu = useRef<HTMLDivElement>(null);
  const sidebarMenuOverlay = useRef<HTMLDivElement>(null);
  const menuLayer = useRef<HTMLDivElement>(null);
  const menuTimeline = useRef<gsap.core.Timeline | null>(null);
  // let [username, setUsername] = React.useState<string>('');
  const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true);
  const user = localStorage.getItem('user');
      let username = JSON.parse(user!).username;

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


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const handlenavigateProfile = async () => {
    try {
      const user = localStorage.getItem('user');
      const response = await axios.post(`http://localhost:5000/users/${JSON.parse(user!).id}`);
      // Handle the response data here
      console.log(response.data);
      navigate(`/profile/${response.data.id}`);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  const verifyUserLogin = () => {
    if (localStorage.getItem('token') === null) {
      alert('Please log in to access this page');
      setIsLoggedin(false);
    }
    else{
      setIsLoggedin(true);
  }
  console.log(`isLoggedin: ${isLoggedin}`);
  
  };


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
              {isLoggedin && 
              <button className="menu-link" onClick={handlenavigateProfile}>
                {username}
              </button>
              }
              <Link className="menu-link" to="/">
                Home
              </Link>
              <Link className="menu-link" onClick={verifyUserLogin} to= {isLoggedin?'/about':'/login'}>
                About
              </Link>
              <Link className="menu-link" to="/services">
                Chefs
              </Link>
              <Link className="menu-link" to="/gallery">
                Recipes
              </Link>
              {isLoggedin ?
                <Link className="menu-link" to= "/" onClick={handleLogout}>
                  Log Out
                </Link> :
                <Link className="menu-link" to="/login">
                  Log In
                </Link>
              }
              {!isLoggedin &&
              <Link className="menu-link" to="/testpath">
                Sign Up
              </Link>}
            </div>
          </div>
          <div className="sidebar-bottom">
            <ul className="extra-links">
              <li className="link-item">
                <div className="link-title">Email</div>
                <a href="mailto:chef2go@gmail.com">chef2go@gmail.com</a>
              </li>
              <li className="link-item">
                <div className="link-title">Find Us</div>
                <span>Northeastern University</span>
                <span>Boston, MA</span>
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
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarNav;
