import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Allproductcard from '../shared/Allproductcard';
import AllproductTable from '../shared/AllproductTable';
import Table from '../shared/Table';
const Allproduct = () => {
    const allproductsdata=useLoaderData()
    console.log(allproductsdata)
    const [show,setshow]=useState(false)
    const handleshow=()=>{
        setshow(!show)
         if(show){
        window.scrollTo({top:0,behavior:'smooth'})
    }
    }

    const [format,setformat]=useState(true)
    const handleformat=(value)=>{
           setformat(value)
    }

    return (
        <div>
       <div className='flex justify-between items-center mt-3'>
        <input type="range" min={0} max="100" value="40" className="range range-warning ml-20" />
       <h1 className='flex justify-center mr-52 lobstar text-orange-500 mt-5 text-3xl mb-5'>Choose Your Product</h1>
       <div className="dropdown">
       <div tabIndex={0} role="button" className="btn mr-20 border-2 border-orange-600 font-extrabold rounded-2xl px-5 py-1 text-2xl lobstar hover:bg-orange-500 hover:text-white">View Format</div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm border-1 border-orange-500">
      <li><button type='button' onClick={()=>{handleformat(true)}} className='lobstar text-orange-500 text-2xl hover:bg-orange-500 hover:text-white'>Card</button></li>
      <li><button type='button' onClick={()=>{handleformat(false)}} className='lobstar text-orange-500 text-2xl hover:bg-orange-500 hover:text-white'>Table</button></li>
      </ul>
      </div>
       </div>

      {(format)?<div>
       {(show)?
        <div className='grid grid-cols-3 gap-3 ml-20'>
            {
            allproductsdata.map((productcategory)=>productcategory.items.map((product)=><Allproductcard key={product._id} catagoryid={productcategory._id} productid={product._id} product={product}></Allproductcard>))
            }
        </div>:<div className='grid grid-cols-3 gap-3 ml-20'>
            {
            allproductsdata.map((productcategory)=>productcategory.items.slice(0,2).map((product)=><Allproductcard key={product._id} catagoryid={productcategory._id} productid={product._id} product={product}></Allproductcard>))
            }
        </div>
        }
        <div className='text-center mt-5'>
        <button onClick={handleshow} className='border-2 border-orange-600 font-extrabold rounded-2xl px-3 py-1 text-2xl lobstar hover:bg-orange-500 hover:text-white'>{(show)?<p>Show Less</p>:<p>Show More</p>}</button>
        </div>
        </div>:
       <div>
        {<AllproductTable allproductsdata={allproductsdata}></AllproductTable> }
        </div>
        }



       </div>    
    );
};

export default Allproduct;