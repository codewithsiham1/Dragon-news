import React, { use } from "react";
import { Link, NavLink } from "react-router";

import { Authcontext } from "../pages/Provider/Authprovider";
const Navbar = () => {
  const {user,logout}=use(Authcontext)
  const handlelogout=()=>{
    logout()
    .then(()=>{
alert('You logged out successfuly')
    })
    .catch((error)=>{
 console.log(error)
    })
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={user} alt="" />
        {
          user ? <button onClick={handlelogout} className="btn btn-primary px-10">Logout</button>:  <Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>
        }
      
      </div>
    </div>
  );
};

export default Navbar;
