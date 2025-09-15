import React from 'react';
import { NavLink } from 'react-router';

const Card = ({catagoryid,productid,eachproduct}) => {
  console.log(eachproduct)
  const {_id,image,name,main_quantity,minimum_selling_quantity,price,brand_name,product_content,rating,short_description}=eachproduct
    return (
        <div>
          <div className="card bg-base-100 w-96 shadow-sm mt-6 border-1 border-orange-400 hover:scale-105">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-full h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <div className='flex gap-3 items-center'>
    <h2 className="card-title cardo font-extrabold bg-orange-500 px-3 py-1 text-white rounded-3xl text-xl">{name}</h2>
    <h1 className='font-bold lobstar text-lg text-yellow-700'>{price} $</h1>
    </div>
    <div className='flex items-center gap-20'>
      <h2 className='font-bold lobstar text-orange-600 text-2xl'>{brand_name}</h2>
     <p className='font-bold lobstar text-lg text-yellow-700'>Minimum Sell:<span className='text-orange-600'>{minimum_selling_quantity}</span></p> 
    </div>
    <div className="card-actions flex justify-between gap-20">
    <NavLink to={`/products/${catagoryid}/${productid}`}><button className="btn btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white lobstar text-lg">Update</button></NavLink>
      <button className="btn btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white">Add to Cart</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Card;