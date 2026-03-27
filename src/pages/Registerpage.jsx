import React from 'react';
import { Link } from 'react-router';
import { Authcontext } from './Provider/Authprovider';
import { use } from 'react';

const Registerpage = () => {
  const {createuser,setuser}=use(Authcontext)
    const handleregester=(e)=>{
        e.preventDefault();
        console.log(e.target);
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
        console.log({name,email,photo,password})
          createuser(email,password)
          .then(result=>{
            const user=result.user;
            setuser(user)
          })
          .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            alert(errorMessage)
          })
    }
    return (
        <div className='flex justify-center items-center'>
        <div className="hero bg-base-200 min-h-screen ">
<div className="hero-content flex-col lg:flex-col">
<h2 className='font-semibold text-2xl text-center'>Regester your Account</h2>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleregester} className="card-body">
    <fieldset className="fieldset">
        {/* name */}
        <label className="label">Name</label>
        <input name='name' type="text" className="input" placeholder="Name" />
        {/* email */}
      <label className="label">Email</label>
      <input name='email' type="email" className="input" placeholder="Email" />
      {/* photo */}
      <label className="label">Photo URL</label>
      <input name='photo' type="text" className="input" placeholder="Photo URL" />
      {/* password */}
      <label className="label">Password</label>
      <input name='password' type="password" className="input" placeholder="Password" />
      <div><a className="link link-hover">Forgot password?</a></div>
      <button type='submit' className="btn btn-neutral mt-4">Regester</button>
      <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
    </fieldset>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default Registerpage;