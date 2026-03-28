import React, { use } from 'react';
import { Authcontext } from './Authprovider';
import { Navigate } from 'react-router';
import Loading from '../Loading';

const Privateroute = ({children}) => {
    const {user,loading}=use(Authcontext)
    if(loading){
        return <Loading></Loading>
    }
    console.log(user)
    if(user &&  user?.email){
return children;
    }
    return <Navigate to="/auth/login"></Navigate>
};

export default Privateroute;