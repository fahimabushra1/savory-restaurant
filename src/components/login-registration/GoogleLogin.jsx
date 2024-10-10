import { FaGooglePlusG } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
    const {googleSignIn} = useAuth();
    const handleGoogleSignIn=()=>{
        googleSignIn().then((data)=>{
if(data?.user?.email){
    const userInfo = {
        email:data?.user?.email,
        name:data?.user?.displayName
    }
    console.log(userInfo)
    fetch('http://localhost:5000/user',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
            body: JSON.stringify(userInfo),
    })
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem('token', data?.token)
    })
}
        })
    }
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