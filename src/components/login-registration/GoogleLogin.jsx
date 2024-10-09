
import googleIcon from "../../assets/images/googleIcon.jpg";
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
                <img className="w-4" src={googleIcon} alt="" />
                <p className="font-bold">Google</p>
            </div>
        </button>
    </div>
    );
};

export default GoogleLogin;