import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import OurMenu from "../pages/OurMenu";
import OrderFood from "../pages/OrderFood";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Cart from "../pages/dashboard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/AllUsers";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement: <ErrorPage/>,
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
    {
      path: "",
      element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:"dashboard",
          element:<Dashboard/>,
        },
        {
          path:"cart",
          element:<Cart/>,
        },
        // admin user
       { 
        path:"allusers",
        element:<AllUsers/>,
      },
      ]
    },
  ]);