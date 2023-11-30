import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/PageNotFound/NotFound";
import Login from "../components/authComponent/Login";
import Signup from "../components/authComponent/Signup";

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
            path: "login",
            element: <Login />,
        },
        {
            path: "signup",
            element: <Signup />,
        },
    ]);

    return ChefTwoGoRoutes;
}

export default ChefRoutes;