import { NavLink, Outlet } from "react-router-dom";
import HelmetTitle from "../components/shared/HelmetTitle";
import { FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { FaAd, FaBook, FaEnvelope, FaHome, FaSearch, FaUsers } from "react-icons/fa";
import useCart from "../hooks/useCart";

const DashboardLayout = () => {
    const [cart] = useCart();
    const isAdmin = true;
    return (
        <>
         <HelmetTitle title={"dashboard"}/>
         {/* side bar */}
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu p-4">
                    {
                        isAdmin ? 
                        <>
   <li className="capitalize text-white text-lg"><NavLink to={"/dashboard/adminhome"}><FaHome className="text-lg text-white" />admin home</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"additems"}><FaSearch className="text-lg text-white" />add items</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"manageitems"}><FaList className="text-lg text-white" />manage items</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"managebooking"}><FaBook className="text-lg text-white" />manage booking</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"allusers"}><FaUsers className="text-lg text-white" />all users</NavLink></li>
                        </>
                        :
                        <>
                         <li className="capitalize text-white text-lg"><NavLink to={"/"}><FaHome className="text-lg text-white" />home</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"cart"}><FaCartShopping className="text-lg text-white" />my cart({cart.length})</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"reservation"} ><FaCalendar className="text-lg text-white" />reservation</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"review"} ><FaAd className="text-lg text-white" />add a review</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"my-booking"} ><FaList className="text-lg text-white" />my booking</NavLink></li>
                    <li className="capitalize text-white text-lg"><NavLink to={"my-booking"} ><FaEnvelope className="text-lg text-white" />contact</NavLink></li>
                        </>
                    }
                         <div className="divider divider-neutral"></div>
                 
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