import React, { Fragment, createContext } from "react";
// import { Navbar, Footer, CartModal } from "../partials";
// import LoginSignup from "../auth/LoginSignup";

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex-grow">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;