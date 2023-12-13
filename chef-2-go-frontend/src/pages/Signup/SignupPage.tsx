import React from 'react'
import { Signup } from "../../components/index";
import './SignupPage.css'
import signupPageImg from './resources/signup-page-image.png'
import Header from '../../components/Header/Header';
import SidebarNav from '../../components/SideBarNav/SidebarNav';

const SignupPage = () => {
  let [menuState, setMenuState] = React.useState(false);

  return (
    <div className="flex">
            <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
        <div className="left-container w-1/2">
            <img src="https://biancazapatka.com/wp-content/uploads/2020/07/tiramisu-dessert-easy-vegan.jpg" alt="chef-2-go Signup page" className="h-screen w-full" />
        </div>
        <div className="right-container w-1/2 bg-vanilla-cream">
            <Signup/>
        </div>
    </div>
  )
}

export default SignupPage
