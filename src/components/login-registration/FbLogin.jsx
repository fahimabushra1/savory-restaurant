
import { FaFacebookF } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const FbLogin = () => {
    const {fbSignIn} = useAuth();
    const handleFbSignin=()=>{
        fbSignIn()
    }
    return (
        <div>
        <button onClick={handleFbSignin} className="btn w-full my-4 bg-white-500 text-blue-500">
            <div className="flex items-center gap-2">
               <FaFacebookF className="text-xl text-blue-500" />
                <p className="font-bold text-blue-500">Facebook</p>
            </div>
        </button>
    </div>
    );
};

export default FbLogin;