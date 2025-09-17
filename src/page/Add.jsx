import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
const Add = () => {
    const [category,setcategory]=useState('')
    const [imageurl,setimageurl]=useState('')
    const handlecatagory=(inputvalue)=>{
         setcategory(inputvalue)
    }
    const handleimage=()=>{
        document.getElementById('fileInput').click()
    }
    const handlefile=async (e)=>{
         const file=e.target.files[0]
         if(file){
          const formData = new FormData();
          formData.append("image", file); 
    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=e4bafa5db0d0e87665ce7de41e198043`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const hostedUrl = res.data.data.url;
     setimageurl(hostedUrl);

    } 
    catch (error) {
      console.log("Upload failed", error);
    }
  };
         }

    const handleadd=(e)=>{
       e.preventDefault()
      const form=e.target
      const formdata=Object.fromEntries(new FormData(form).entries())
      console.log(formdata)
      axios.post(`http://localhost:3000/products`,formdata)
      .then(data=>{
        console.log(data)
        if(data.data.modifiedCount==1){
                Swal.fire({
                title: "Update Successfully!",
                icon: "success",
                draggable: true
               });
              }
       })
      .catch((error)=>console.log(error))
    }
    return (
        <div>
              <h1 className='text-center text-4xl text-orange-500 font-bold lobstar mt-10'>Join our Marketplace</h1>
          <form onSubmit={handleadd}>
         <div className='grid grid-cols-2 max-w-[780px] ml-96 mt-10 gap-5 '>
         <input type="text"  name='name' placeholder="Accessories Name" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg"/>
         <input type="text"  name='brand_name' placeholder="Brand Name" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" />
         <input type="number" min={30}  name='main_quantity' placeholder="Stock Product" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" />
         <input type="number" min={10}  name='minimum_selling_quantity' placeholder="Minmum Sell" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" />
         <input type="number"  placeholder="rate product(1-5)" name='rating' className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" />
         <input type="text"  name='price' placeholder="price" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" />
         <input type="email"  name='email' placeholder="email" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" />
         <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="input"><input value={category} type="text" readOnly name='category' placeholder="Choose Your Category" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" /></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-96 p-2 shadow-sm">
        <li><button onClick={()=>handlecatagory('Electronics & Gadgets')} type='button'>Electronics & Gadgets</button></li>
        <li><button onClick={()=>handlecatagory('Home & Kitchen Appliances')} type='button'>Home & Kitchen Appliances</button></li>
        <li><button onClick={()=>handlecatagory('Fashion & Apparel')} type='button'>Fashion & Apparel</button></li>
        <li><button onClick={()=>handlecatagory('Industrial Machinery & Tools')} type='button'>Industrial Machinery & Tools</button></li>
        <li><button onClick={()=>handlecatagory('Health & Beauty')} type='button'>Health & Beauty</button></li>
        <li><button onClick={()=>handlecatagory('Automotive Parts & Accessories')} type='button'>Automotive Parts & Accessories</button></li>
        <li><button onClick={()=>handlecatagory('Musical Instruments')} type='button'>Musical Instruments</button></li>
        </ul>
        </div>
         </div>  
         <div className='grid grid-cols-1'> 
           <div>
          <input type="text"  value={imageurl} onChange={(e)=>setimageurl(e.target.value)} name='image' placeholder="Product image(for uploading need some time)" className="input  mt-3 w-3xl ml-96 border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none placeholder:font-light "/>
          <button type="button" onClick={handleimage} className="file-input w-36 pl-4" accept="image/*">Upload Image</button>
          <input type="file" id="fileInput" onChange={handlefile} accept="image/*" className='hidden' />
           </div>
           <input type="text" placeholder="Product description" name='short_description'  className="input mt-8 w-3xl ml-96  border-transparent border-dashed border-b-2 border-b-orange-500 focus:outline-none font-semibold text-lg" />   
           </div>  
           <div className='text-center mt-10'><button type='submit' className='btn btn-outline border-orange-500 border-2 font-bold text-lg lobstar hover:text-white hover:bg-orange-500 px-10 py-1 rounded-xl'>Submit</button></div>
           </form>  
        </div>
    );
};

export default Add;