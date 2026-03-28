import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.config';
export const Authcontext=createContext()
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)
    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
setuser(currentUser)
setloading(false)
  })
  return()=>{
unsubscribe();
  }
    },[])
    const authData={
        user,setuser,createuser,logout,signIn,loading,setloading
    }
    return <Authcontext.Provider value={authData}>{children}</Authcontext.Provider>
};

export default Authprovider;