import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const {signIn, user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user?.email)
  const from = location?.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[])
  
  const handleLogin =(e)=>{
 e.preventDefault();
 const form = e.target;
 const email = form.email.value;
 const password = form.password.value;
 console.log(email, password)
  }

  const handleValidateCaptcha = (e)=>{
    const validateCaptcha = e.target.value;
    console.log(validateCaptcha)
    if(validateCaptcha){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }

  useEffect(()=>{
    if(user){
      navigate(from,{replace:true})
    }
  },[user,navigate,from])

    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="password" name="captcha" placeholder="type captcha" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary">Login</button>
        </div>
        <div>
          <p>
            New here?<Link to='/sign-up'className="text-red-500"> Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;