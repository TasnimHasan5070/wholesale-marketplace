import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../shared/Authcontext';
import Cartproduct from '../shared/Cartproduct';
const Cart = () => {
    const [cart,setcart]=useState([])
    const {user}=useContext(Authcontext)
    useEffect(()=>{
      fetch('http://localhost:3000/cart')
      .then(res=>res.json())
      .then(data=>setcart(data))
    },[user])

    const filterdata=cart.filter(products=>products.clientemail==user?.email)
    console.log(filterdata)
    return (
        <div className='grid grid-cols-2 gap-5 w-[800px] ml-96 mt-10'>
           
           {
                filterdata.map((eachproduct)=><Cartproduct eachproduct={eachproduct} filterdata={filterdata}setcart={setcart} cart={cart}></Cartproduct>)
            }
        
        </div>
    );
};

export default Cart;