import { FaGooglePlusG } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(data=>{
            console.log(data.user)
    const userInfo = {
        email:data?.user?.email,
        name:data?.user?.displayName
    }
    axiosPublic.post('/users', userInfo)
    .then(res => {
        console.log(res.data);
        navigate('/')
    })})}
    return (
        <div>
        <button onClick={handleGoogleSignIn} className="btn w-full bg-white-500 text-blue-500">
            <div className="flex items-center gap-2">
            <FaGooglePlusG className="text-xl text-red-500" />
                <p className="font-bold text-red-500">Google</p>
            </div>
        </button>
    </div>
    );
};

export default GoogleLogin;