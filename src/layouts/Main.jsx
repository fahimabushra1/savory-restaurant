import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    const location = useLocation();
    const noNavbarFooterForLogin = location.pathname.includes("login");
    const noNavbarFooterForSignUp = location.pathname.includes("sign-up");
    return (
        <div>
         {noNavbarFooterForLogin || noNavbarFooterForSignUp || <Navbar/>}
         <Outlet/>
        {noNavbarFooterForLogin || noNavbarFooterForSignUp || <Footer/>}
        </div>
    );
};

export default Main;