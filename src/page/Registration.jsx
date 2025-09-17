import React, { useContext } from 'react';
import { Authcontext } from '../shared/Authcontext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Registration = () => {
    const navigate=useNavigate()
    const {signup,updateprofile}=useContext(Authcontext)
    const handleregistration=(e)=>{
           e.preventDefault()
           const name=e.target.name.value 
                const photo=e.target.photo.value 
                 const email=e.target.email.value 
                 const pass=e.target.pass.value 
                // console.log(name,email,pass,photo)
                 e.target.reset()
                 signup(email,pass)
                 .then((res)=>{
                    console.log(res.user)
                    //const userinfo=res.user
                    updateprofile({   
                        displayName:name,photoURL:photo
                    })
                    console.log(res.user)
                    Swal.fire({
                      title: "Successfully Created Your Account",
                      icon: "success",
                      draggable: true
                       });
                      navigate('/')
                })
            
            .catch(err=>console.log(err))
        }


    return (
        <div>
        <h1 className='font-bold text-orange-600 text-4xl mt-20 lobstar text-center'>Create Your Account</h1>
        <form onSubmit={handleregistration}>
        <div className='grid grid-cols-2 max-w-[780px] ml-96 mt-10 gap-5 '>
        <input type="text"  name='name' placeholder="username" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg"/>
        <input type="text"  name='photo' placeholder="photourl" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg"/>
        <input type="text"  name='email' placeholder="your email" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg"/>
        <input type="text"  name='pass' placeholder="password" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg"/>
        </div>
         <div className='text-center mt-10'><button type='submit' className='btn btn-outline border-orange-500 border-2 font-bold text-lg lobstar hover:text-white hover:bg-orange-500 px-10 py-1 rounded-xl'>Submit</button></div>
        </form>
        </div>
    );
};

export default Registration;