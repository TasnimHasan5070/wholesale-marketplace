import React, { useEffect, useState } from 'react';
import { app } from './firebase_config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { Authcontext } from './Authcontext';
const auth=getAuth(app)
const Authprovider = ({children}) => {
  const provider=new GoogleAuthProvider()
const [user,setuser]=useState(null)
const [loader,setloader]=useState(true);

      const signup=(email,password)=>{
           setloader(true)
           return  createUserWithEmailAndPassword(auth,email,password);
      }
 
      const signin=(email,password)=>{
           setloader(true)
           return signInWithEmailAndPassword(auth,email,password)
      }

     const signingoogle=()=>{
      return signInWithPopup(auth,provider)
     }

     const updateprofile=(userinfo)=>{
      return updateProfile(auth.currentUser,userinfo)
     }

     const logout=()=>{
          return signOut(auth);
     } 

      useEffect(()=>{
           const unsubscribe =onAuthStateChanged(auth,(currentuser)=>{
              if(currentuser){
                setuser(currentuser)
                console.log(currentuser)
                setloader(false)
              }
              
              else{
                setuser(null)
                setloader(false)
              }
             })
            return()=>{
               unsubscribe()
            }
      },[])

const authdata={
        signup,
        signin,
        signingoogle,
        user,
        updateprofile,
        logout,
        loader,
        setloader
      }


    return (
        <div>
          <Authcontext value={authdata}>{children}</Authcontext>  
        </div>
    );
};

export default Authprovider;