import React, { useContext, useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { CiShoppingTag } from "react-icons/ci";
import { NavLink } from 'react-router';
import { Authcontext } from './Authcontext';
import userpic from '../assets/userpic.png'
const Navbar = () => {
  const [Product,setProduct]=useState([])
  useEffect(()=>{
    fetch('https://wholesale-platfrom-server.vercel.app/products')
    .then((res)=>res.json())
    .then((data)=>setProduct(data))
    //console.log(Product)
  },[])
  const {user,logout}=useContext(Authcontext)
  const handlelogout=()=>{
    logout()
    .then(console.log('logout successfully'))
  }
    return (
        <div>
            <div className="navbar bg-black border-b-5 border-0  border-yellow-700 mt-4">
  <div className="flex justify-between gap-60">
    <div className='flex gap-4 pl-10'>
      <div>
        <div className="dropdown dropdown-hover">
        <button tabIndex={0} className='btn btn-outline rounded-lg border border-orange-700  font-bold px-8 text-lg bg-orange-600 text-white'>All Catagories</button>
         <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm">
         {
          Product.map((p)=><li key={p._id} className='font-bold hover:bg-orange-400 hover:text-white'><NavLink to={`/products/${p._id}`} key={p._id}>{p.category}</NavLink></li>)
         }
         </ul>
        </div>
        </div>
      <p className="text-3xl font-bold text-orange-500">Ar<span className='text-3xl font-extrabold'>Nim</span></p>
    </div>
   
   <div className='flex gap-5'>
    <NavLink to={`/`}>
    <button className="tooltip tooltip-warning" data-tip="Home">
    <FaHome size={35} color='#f54a00' className='btn btn-ghost btn-circle'/>
    </button>
    </NavLink>

    <NavLink to={`/add`}>
    <button className="tooltip tooltip-warning " data-tip="Add Product">
    <TbShoppingBagPlus size={35} color='#f54a00' className='btn btn-ghost btn-circle'/>
    </button>
    </NavLink>

    <NavLink to={`/allproducts`}>
    <button className="tooltip tooltip-warning " data-tip="All Product">
    <RiShoppingBag3Fill size={35} color='#f54a00' className='btn btn-ghost btn-circle'/>
    </button>
    </NavLink>

    <NavLink to={`/myproduct`}>
    <button className='tooltip tooltip-warning' data-tip="My Product">
    <CiShoppingTag size={35} color='#f54a00' className='btn btn-ghost btn-circle'/>
    </button>
    </NavLink>

    <div className="dropdown dropdown-end">
      <NavLink to={`/Cart`}>
      <button className='tooltip tooltip-warning' data-tip="Cart">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator text-orange-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
        </div>
      </div>
      </button>
      </NavLink>
    </div>
    </div>

    <div className="flex justify-between gap-7">
      <div className="btn btn-ghost btn-circle avatar tooltip tooltip-warning" data-tip={user?user.displayName:''}>
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?user.photoURL:userpic}/>
        </div>
      </div>
      {
        user?<div className='ml-10'><NavLink onClick={handlelogout}><button className='btn btn-outline rounded-lg border-2 border-orange-700 text-orange-600 font-bold px-8 text-lg hover:bg-orange-600 hover:text-white'>LogOut</button></NavLink></div>:<div className='flex gap-4'>
      <NavLink to={`login`}><button className='btn btn-outline rounded-lg border-2 border-orange-700 text-orange-600 font-bold px-8 text-lg hover:bg-orange-600 hover:text-white'>LogIn</button></NavLink>
      <NavLink to={`registration`}><button className='btn btn-outline rounded-lg border-2 border-orange-700 text-orange-600 font-bold px-8 text-lg hover:bg-orange-600 hover:text-white'>Registration</button></NavLink>
    </div>
      }
      
   </div>
  </div>
</div>
 </div>       
    );
};

export default Navbar;