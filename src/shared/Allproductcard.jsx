import axios from 'axios';
import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { Authcontext } from './Authcontext';
const Allproductcard = ({product,catagoryid,productid}) => {
     const {_id,image,name,minimum_selling_quantity,price,brand_name}=product
     console.log(product)
     const {user}=useContext(Authcontext)
     const handlecart=()=>{
      axios.post(`https://wholesale-platfrom-server.vercel.app/cart`,{...product,catagoryid:catagoryid,clientemail:user.email,quantity:minimum_selling_quantity})
      .then(data=>{
        console.log(data)
        if(data.data.insertedId==productid){
            Swal.fire({
                           title: "Added in Cart Successfully!",
                           icon: "success",
                           draggable: true
                          });
        }
      })
      .catch(error=>{
        console.log(error)
        if(error.status==500){
          Swal.fire({
                           title: "Already existed in Cart!",
                           icon: "error",
                           draggable: true
                          });
        }
      })
     }
    return (
        <div>
         <div className="card bg-base-100 w-96 shadow-sm mt-16 border-1 border-orange-400 hover:scale-105">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-full h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <div className='flex items-center gap-3'>
    <h2 className="card-title cardo font-extrabold bg-orange-500 px-3 py-1 text-white rounded-3xl text-xl">{name}</h2>
    <h1 className='font-bold lobstar text-lg text-yellow-700'>{price} $</h1>
    </div>
    <div className='flex items-center gap-20'>
      <h2 className='font-bold lobstar text-orange-600 text-2xl'>{brand_name}</h2>
     <p className='font-bold lobstar text-lg text-yellow-700'>Minimum Sell:<span className='text-orange-600'>{minimum_selling_quantity}</span></p> 
    </div>
    <div className="card-actions flex justify-between">
    <NavLink to={`/products/${catagoryid}/${productid}`}><button className="btn btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white lobstar text-lg">Update</button></NavLink>
    <NavLink to={`/detailproducts/${catagoryid}/${productid}`}><button className="btn btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white lobstar text-lg">Details</button></NavLink>
    <button onClick={handlecart} className="btn btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white lobstar text-lg">Add to Cart</button>
    </div>
  </div>
</div>     
        </div>
    );
};

export default Allproductcard;