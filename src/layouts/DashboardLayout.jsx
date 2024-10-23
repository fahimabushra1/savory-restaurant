import { NavLink, Outlet } from "react-router-dom";
import HelmetTitle from "../components/shared/HelmetTitle";
import { FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { FaAd, FaHome, FaSearch } from "react-icons/fa";

const DashboardLayout = () => {
    return (
        <>
         <HelmetTitle title={"dashboard"}/>
         {/* side bar */}
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu p-4">
                    <li className="capitalize text-white text-lg"><NavLink to={"/"}><FaHome className="text-lg text-white" />home</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"cart"}><FaCartShopping className="text-lg text-white" />my cart</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"reservation"} ><FaCalendar className="text-lg text-white" />reservation</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"review"} ><FaAd className="text-lg text-white" />add a review</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"my-booking"} ><FaList className="text-lg text-white" />my booking</NavLink></li>
                    <div className="divider"></div>
                    <li className="capitalize text-white text-lg"><NavLink to={"/"}><FaHome className="text-lg text-white" />home</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"/order/salad"}><FaSearch className="text-lg text-white" />menu</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
        </>
    );
};

export default DashboardLayout;