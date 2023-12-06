import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import NotFound from "../pages/PageNotFound/NotFound";
import Login from "../components/authComponent/Login";
import Signup from "../components/authComponent/Signup";
import About from "../pages/About/About";
import LoginPage from "../pages/LogIn/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";
import PricingPage from "../pages/Premium/PricingPage";
import IconDrop from "../components/IconsDrop/IconDrop";
import RecipeHome from "../pages/Recipe/RecipeHome";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import ChefPage from "../pages/Chef/ChefPage";
import RecipeSearch from "../pages/RecipeSearch/RecipeSearch";
let ChefRoutes = (topChefs:any,topRecipes:any) => {
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
        },
        {
            path:"premium",
            element:<PricingPage />
        },
        {
            path:"recipe",
            element: <RecipeHome />
        },
        {
            path:"Footer",
            element: <Footer />
        },
        {
            path:"chef",
            element:<ChefPage chefs={topChefs}/>
        },
        {
            path:"searchrecipe",
            element:<RecipeSearch Recipes={topRecipes} />
        }


    ]);

    return ChefTwoGoRoutes;
}

export default ChefRoutes;