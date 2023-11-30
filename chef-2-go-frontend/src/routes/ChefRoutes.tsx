import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/PageNotFound/NotFound";


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
    ]);

    return ChefTwoGoRoutes;
}

export default ChefRoutes;