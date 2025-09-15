import React from 'react';
import { NavLink } from 'react-router';

const Card = ({catagoryid,productid}) => {
    return (
        <div>
          <div className="card bg-base-100 w-96 shadow-sm mt-6">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions flex justify-between gap-20">
    <NavLink to={`/products/${catagoryid}/${productid}`}><button className="btn btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white">Update</button></NavLink>
      <button className="btn btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white">Add to Cart</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Card;