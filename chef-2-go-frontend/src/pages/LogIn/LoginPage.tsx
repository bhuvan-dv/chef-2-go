import React from 'react'
import {Login} from '../../components/index';
import signinPageImg from './resources/log-in-page-img.png';
import signInImage from './resources/signin-page-image.png';
import './Login.css';



const LoginPage = () => {
  return (
    <div className="flex signin-page-container">
        <div className="right-container w-1/2 bg-vanilla-cream ">
            <Login/>
        </div>
        <div className="left-container w-1/2">
            {/* <img src={signInImage} alt="chef-2-go Signup page" className="h-screen w-full" /> */}
        </div>
    </div>
  )
}

export default LoginPage
