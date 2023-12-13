import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, setIsLoogedIn } from '../../store/slice/user-slice';
import { AppState } from '../../store';

interface SidebarNavProps {
  menuState: boolean;
  setMenuState: (state: boolean) => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ menuState, setMenuState }) => {
  const sidebarMenu = useRef<HTMLDivElement>(null);
  const sidebarMenuOverlay = useRef<HTMLDivElement>(null);
  const menuLayer = useRef<HTMLDivElement>(null);
  const menuTimeline = useRef<gsap.core.Timeline | null>(null);
  // let [username, setUsername] = React.useState<string>('');
  const isLoggedin = useSelector((state: AppState) => state.users.isLoggedin);
  const user = useSelector((state: AppState) => state.users.currentUser);
  // const user = JSON.parse(localStorage.getItem('user')!);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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



  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(setIsLoogedIn(false));
    dispatch(setCurrentUser(null))
    navigate('/');

  };

  const handlenavigateProfile = async () => {
    try {
      const user = localStorage.getItem('user');
      console.log(`user: ${user}`);

      // const response = await axios.get(`http://localhost:5000/users/profile/${JSON.parse(user!)._id}`);
      // Handle the response data here
      // console.log(response.data);
      // navigate(`/profile/${response.data.username}`);
      navigate(`/profile/${JSON.parse(user!).username}`);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  const verifyUserLogin = () => {
    if(!isLoggedin){
      alert('Please log in to access this page');
    }

  };
  // const verifyUserLogin = () => {
  //   if (localStorage.getItem('token') === null) {
  //     alert('Please log in to access this page');
  //     navigate('/login');
  //   }
  //   console.log(`isLoggedin: ${isLoggedin}`);

  // };

  console.log(`isLoggedin: ${isLoggedin}`);

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
              {user &&
                <button className="menu-link" onClick={handlenavigateProfile}>
                  {user?.username}
                </button>
              }
              <Link className="menu-link" to='/about'>
                About
              </Link>
              <Link className="menu-link" onClick={verifyUserLogin} to={isLoggedin ? '/search/chefs' : '/login'}>
                Chefs
              </Link>
              <Link className="menu-link" onClick={verifyUserLogin} to={isLoggedin ? '/search/recipes' : '/login'}>
                Recipes
              </Link>
              {user ?
                <Link className="menu-link" to="/" onClick={handleLogout}>
                  Log Out
                </Link> :
                <Link className="menu-link" to="/login">
                  Log In
                </Link>
              }
              {!user &&
                <Link className="menu-link" to="/signup">
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
