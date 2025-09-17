import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Authcontext } from './Authcontext';
import Loader from './Loader';
const Privateroute = ({children}) => {
     const {user,loader}=useContext(Authcontext)
    const location=useLocation()
    console.log(location)
    if(loader){
        return <Loader></Loader>
    }

    if(!user){
       return <Navigate to={`/login`} state={{from:location}}></Navigate>
    } 
    
    return (
        children
    );
};

export default Privateroute;