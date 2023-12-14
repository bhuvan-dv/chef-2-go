import * as React from 'react';
import {ReactElement} from "react";
import {Home} from '../../components/index';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './styles.css';
import SidebarNav from '../../components/SideBarNav/SidebarNav';

const HomePage: React.FC = (): ReactElement => {

  let [menuState, setMenuState] = React.useState(false);
    document.title = "Home";
    return (
        <>
        {/* import header and sidenavbar */}
      <Header menuState={menuState} setMenuState={setMenuState} />
      <SidebarNav menuState={menuState} setMenuState={setMenuState} />
        <Home/>
        <Footer/>
        </>
    )
}

export default HomePage;