import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../shared/Authcontext';
import Card from '../shared/Card';
import Allproductcard from '../shared/Allproductcard';
const Myproduct = () => {
    const [products,setproducts]=useState([])
    const {user}=useContext(Authcontext)
    console.log(user?.email)
    useEffect(()=>{
        if(!user) 
            return;
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            //const filterdata=data.flatMap((catagory)=>catagory.items.filter(item=>(item.email===user.email)))
            const filterdata=data.map((cat)=>cat.items.filter((item)=>item.email==user.email).map((item)=>({...item,catagoryid:cat._id,productid:item._id}))).flat()
            setproducts(filterdata)
            })
         },[user])
         console.log(products)
    return (
        <div>
            {
            (products.length==0)?<div><h1 className='text-center font-bold text-orange-500 text-3xl mt-10 lobstar'>You Have not Added Any Products Yet</h1></div>:<div><h1 className='text-center font-bold text-orange-500 text-3xl mt-10 lobstar'>Your Added Products</h1></div>  
            }
        <div className='grid grid-cols-3 ml-10'>
           {
             (products.length>0)&&(products.map(product=>< Allproductcard product={product} productid={product.productid} catagoryid={product.catagoryid}></Allproductcard>))
           } 
        </div>
        </div>
    );
};

export default Myproduct;