import React from 'react';
import { NavLink } from 'react-router';
const Table = ({catagoryid,productid,product}) => {
  const {_id,image,name,minimum_selling_quantity,price,brand_name,short_description}=product
    return (  
          <tr className='text-lg font-bold text-orange-600 cardo hover:bg-orange-100'>
        <td>
          <div className="flex items-center gap-8">
            <div className="avatar">
              <div className="mask mask-squircle h-20 w-20">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td className='font-bold'>
          {short_description}
        </td>
        <td className='lobstar'>
          {name}
        </td>
        <td className='font-bold'>{brand_name}</td>
        <td className='lobstar'>{price} $</td>
        <td className='font-bold'>{minimum_selling_quantity}</td>
        <td className='grid grid-cols-1 gap-1'>
        <NavLink to={`/products/${catagoryid}/${productid}`}><button className="btn btn-sm btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white lobstar text-sm">Update</button></NavLink>
        <NavLink to={`/detailproducts/${catagoryid}/${productid}`}><button className="btn btn-sm btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white lobstar text-sm">Details</button></NavLink>
        <button className="btn btn-sm btn-outline rounded-2xl border-orange-500 px-5 font-bold border-2 hover:bg-orange-400 hover:text-white lobstar text-sm">Add to Cart</button>
        </td>
      </tr>  
        
    );
};

export default Table;