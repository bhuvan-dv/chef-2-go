import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/PageNotFound/NotFound";
import Login from "../components/authComponent/Login";
import Signup from "../components/authComponent/Signup";
import About from "../pages/About/About";
import LoginPage from "../pages/LogIn/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";
import PricingPage from "../pages/Premium/PricingPage";

let ChefRoutes = () => {
    let ChefTwoGoRoutes= useRoutes([
        {
            path: "/",
            element: <Home />,
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
            path:"premium",
            element:<PricingPage />
        }
    ]);

    return ChefTwoGoRoutes;
}

export default ChefRoutes;