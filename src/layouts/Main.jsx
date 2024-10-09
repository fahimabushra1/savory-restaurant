import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes("login")
    return (
        <div>
         {noNavbarFooter || <Navbar/>}
         <Outlet/>
        {noNavbarFooter || <Footer/>}
        </div>
    );
};

export default Main;