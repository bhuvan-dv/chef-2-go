import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        // main div
        <div className="navbar-main-container flex justify-between">
            {/* lefft div */}
            <div className="left-navbar w-1/2 h-1/2 self-center flex flex-col justify-between items-start font-left-navbar-link  ">
                <div className="left-navrbar__items flex justify-around w-1/2 text-3xl font-Nova-Square self-center">
                    {/* contact */}
                    <a href="/" className="hover:border">Contact</a>
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
            <div className="right-navbar w-1/2 h-1/2 self-center flex flex-col justify-between gap-10 text-6xl  font-Nova-Square">
                <div className="right-navbar-items font-Nova-Square self-center hover:border-b-4">
                    <a href='/'>
                        Mission
                    </a>
                </div>
                <div className="right-navbar-items self-center">
                    <a href='/'>Chefs</a>
                </div>
                <div className="right-navbar-items self-center">
                    <a href='/'>Recipes</a>
                </div>
                <div className="right-navbar-items self-center">
                    <a href='/'>Shop</a>
                </div>
            </div>
            {/* right div */}
        </div>
    )
}

export default NavBar
