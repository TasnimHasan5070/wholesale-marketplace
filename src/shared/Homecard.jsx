import React, { useEffect, useState } from 'react';
import Displaycards from './Displaycards';
import { NavLink } from 'react-router';
const Homecard = () => {
    const [Product,setProduct]=useState([])
      useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
        //console.log(Product)
      },[Product])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10 lobstar text-orange-500'>Browse By Categories</h1>
        <div className='grid grid-cols-3 gap-5 mt-10 ml-24'>
            {
          Product.map((p)=><NavLink to={`/products/${p._id}`}><Displaycards categories={p}></Displaycards></NavLink>)
         }
        </div>
        </div>
    );
};

export default Homecard;