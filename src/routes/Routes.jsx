import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import OurMenu from "../pages/OurMenu";
import OrderFood from "../pages/OrderFood";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/login",
          element:<Login/>,
        },
        {
          path:"/sign-up",
          element:<SignUp/>,
        },
        {
          path:"/menu",
          element:<OurMenu/>,
        },
        // {
        //   path:"/order",
        //   element:<OrderFood/>,
        // },
        {
          path:"/order/:category",
          element:<OrderFood/>,
        },
      ]
    },
  ]);