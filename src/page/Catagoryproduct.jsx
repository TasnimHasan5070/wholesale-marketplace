
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../shared/Card';
const Catagoryproduct = () => {
    const catagoryproducts=useLoaderData();
    const [show,setShow]=useState(false)
    const handleshow=()=>{
         setShow(!show)
    }
    return (
        <div>      
          {
            <h1 className='text-center text-3xl text-orange-500 lobstar mt-5'>{catagoryproducts?.category}</h1>
          }

          {
          (show)?
          <div className='grid grid-cols-3 gap-3 max-w-screen ml-20'>
            {
            catagoryproducts?.items?.map((p)=><Card key={p._id} catagoryid={catagoryproducts._id} productid={p._id} eachproduct={p}></Card>)
          }
          </div>:
          <div className='grid grid-cols-3 gap-3 max-w-screen ml-20'>{
            catagoryproducts?.items?.slice(0,6).map((p)=><Card key={p._id} catagoryid={catagoryproducts._id} productid={p._id} eachproduct={p}></Card>)
          }
          </div>
         }
         

          <div className='flex justify-center mt-10'>
            {
              (catagoryproducts?.items?.length>5)?<button onClick={handleshow} className='border-2 border-orange-600 font-extrabold rounded-2xl px-3 py-1 text-2xl lobstar hover:bg-orange-500 hover:text-white'>{(show)?<p>Show Less</p>:<p>Show More</p>}</button>:null
            }
          </div>

        </div>
    );
};

export default Catagoryproduct;