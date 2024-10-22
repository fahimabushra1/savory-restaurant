import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const {logOut, user}= useAuth();
  const [cart] = useCart();

  const handleLogout = async ()=>{
    await logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
    
        return (
       <div className="relative">
        <div className="navbar bg-black bg-opacity-10 fixed max-w-screen-xl z-10 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
              <li><Link to='/'>Home</Link></li>
              {/* <li><Link to='/about'>About</Link></li> */}
              {/* <li><Link to='/dashboard'>Dashboard</Link></li> */}
              <li><Link to='/register'>Sign Up</Link></li>
             {
              user?
              <>
              <span className="text-[#4c0519] font-bold">{user?.email}</span>
              <button onClick={handleLogout} className="btn">Log out</button>
              </>
              :
             <Link to= "/login">Login</Link>
             }
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">SAVORY RESTAURANT</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-white">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/order/salad'>order food</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/sign-up'>Sign Up</Link></li>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-lg bg-[#3c40c6] text-white font-bold indicator-item">{cart?.length}</span>
        </div>
      </div>
          </ul>
        </div>
        <div className="navbar-end font-bold text-white">
       {
         user?
         <>
         <span className="text-white mr-4">{user?.email}</span>
         <button onClick={handleLogout} className="mr-2 border-b-4 border-yellow-400 bg-slate-400 rounded-lg py-2 px-4">Log out</button>
         </>
         :
        <Link to= "/login" className="mx-4">Login</Link>
       }
       <div className="avatar placeholder">
  <div className="bg-[#3c40c6] text-neutral-content w-8  rounded-full">
    <span className="text-xs">UI</span>
  </div>
</div>
        </div>
      </div>
       </div>
    );
};

export default Navbar;