import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import NotFound from "../pages/PageNotFound/NotFound";
import Login from "../components/authComponent/Login";
import Signup from "../components/authComponent/Signup";
import About from "../pages/About/About";
import LoginPage from "../pages/LogIn/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";
import IconDrop from "../components/IconsDrop/IconDrop";
import { NavBar } from "../components/index";

let ChefRoutes = () => {
    let ChefTwoGoRoutes= useRoutes([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "signup",
            element: <SignupPage />,
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"exp-icon",
            element: <IconDrop/>
        }
    ]);

    return ChefTwoGoRoutes;
}

export default ChefRoutes;