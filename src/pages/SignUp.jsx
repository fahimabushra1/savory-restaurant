import { Link, useLocation, useNavigate} from "react-router-dom";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import { useEffect} from "react";
import useAuth from "../hooks/useAuth";
import FbLogin from "../components/login-registration/FbLogin";
import HelmetTitle from "../components/shared/HelmetTitle";
// import useAxiosPublic from "../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () =>{
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const {user, createUser, updateUserProfile}= useAuth();
  console.log(user)
 const navigate = useNavigate();
  const location = useLocation();
//   const axiosPublic = useAxiosPublic();

  const from = location?.state?.from?.pathname || '/'

const onSubmit= data=>{
  console.log(data);
  createUser(data.email, data.password)
  .then(res=>{
    const loggedUser = res.user;
    console.log(loggedUser);
    updateUserProfile(data.name, data.photoURL, data.phoneNumber)
    .then(()=>{
      console.log("user profile info updated")
    })
    .catch(error =>console.log(error))
    reset();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "successfully sign up",
      showConfirmButton: false,
      timer: 1500
    });
  })}

  useEffect(()=>{
    if(user){
      navigate(from,{replace:true})
    }
  },[user,navigate,from])

    return(
      <div>
          <HelmetTitle title={"sign-up"}/>
      <div className="hero min-h-screen bg-base-200">
<div className="hero-content">
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-500 mt-16">
 <form onSubmit={handleSubmit(onSubmit)} className="card-body">
  <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input type="text"  {...register("name", { required: true })} name="name" placeholder="your name" className="input input-bordered" required />
     </div>
     {errors.name && <span>This field is required</span>}
  <div className="form-control">
     <label className="label">
       <span className="label-text">PhotoURL</span>
     </label>
     <input type="text"  {...register("photoURL", { required: true })} name="photoURL" placeholder="your photoURL" className="input input-bordered" required />
     </div>
     {errors.photoURL && <span>This field is required</span>}
  <div className="form-control">
     <label className="label">
       <span className="label-text">Phone Number</span>
     </label>
     <input type="number"  {...register("phoneNumber", { required: true })} name="phoneNumber" placeholder="your phoneNumber" className="input input-bordered" required />
     </div>
     {errors.phoneNumber && <span>This field is required</span>}
     <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
   </div>
   {errors.email && <span>This field is required</span>}
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" required />
     </div>
     {errors.password && <span>This field is required</span>}
     {errors.password?.type === 'minLength' && <p className="text-red-500">password must be 6 characters</p>}
     <div className="form-control">
     <label className="label">
       <span className="label-text">Confirm Password</span>
     </label>
     <input type="password" {...register("confirmPassword", { required: true, minLength: 6, maxLength: 20  })} name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
     </div>
     {errors.confirmPassword && <span>This field is required</span>}
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   <div className="form-control mt-6">
     <button className="btn btn-primary"><Link to='/'>Sign Up</Link></button>
   </div>
   <div className="mt-6">
     <GoogleLogin/>
     <FbLogin/>
   </div>
   <div>
     <p>
       Already have an account?<Link to='/login'className="text-red-500" > Login</Link>
     </p>
   </div>
 </form>
</div>
</div>
</div> 
   </div>
    );
};

export default SignUp;