import React from 'react'
import { Signup } from "../../components/index";
import './SignupPage.css'
import signupPageImg from './resources/signup-page-image.png'

const SignupPage = () => {
  return (
    <div className="flex">
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
