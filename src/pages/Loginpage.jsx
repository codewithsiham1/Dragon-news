import React, { use } from 'react';
import { Link } from 'react-router';
import { Authcontext } from './Provider/Authprovider';

const Loginpage = () => {
  const {signIn}=use(Authcontext)
  const handlelogin=(e)=>{
  e.preventDefault();
  const form=e.target;
  const email=form.email.value;
  const password=form.password.value;
  console.log({email,password})
  signIn(email,password)
  .then(result=>{
    const user=result.user
  })
  .catch((error)=>{
    const errorCode=error.code;
    const errorMessage=error.errorMessage;
    console.log(errorMessage);
    alert(errorCode,errorMessage)
  })
  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="hero bg-base-200 min-h-screen w-full">
                <h2 className='font-semibold text-2xl text-center'>Login your Account</h2>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlelogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link className='text-secondary' to="/auth/regester">Regester</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Loginpage;