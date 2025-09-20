import React, { useContext } from 'react';
import { Authcontext } from '../shared/Authcontext';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
    const {signin}=useContext(Authcontext)
          const location=useLocation()
          console.log(location);
          const navigate=useNavigate()
         const handlelogin=(e)=>{
          e.preventDefault()
         const email=e.target.email.value
         const pass=e.target.password.value 
        // console.log(email,pass)
         e.target.reset()
         signin(email,pass)
         .then(res=>{
            navigate(`${location.state?location.state?.from?.pathname:'/'}`)
           // console.log(res.user)
        })
        .catch((error)=>Swal(`${error.message}`, "you have to provide correct info!", "error"))
    }
    return (
        <div>
             <h1 className='font-bold text-orange-600 text-4xl mt-20 lobstar text-center'>Welcome Back</h1>
          <form onSubmit={handlelogin}>
          <div className='max-w-[780px] ml-96 mt-10 gap-10 '>
         <input type="email"  name='email' placeholder="Email" className="input mb-10 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg"/>
         <input type="password"  name='password' placeholder="Password" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg"/>
        </div>
        <div className='text-center mt-10'><button type='submit' className='btn btn-outline border-orange-500 border-2 font-bold text-lg lobstar hover:text-white hover:bg-orange-500 px-10 py-1 rounded-xl'>Submit</button></div>
        </form>
        </div>
    );
};

export default Login;