import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
const Cartproduct = ({eachproduct,cart,setcart}) => {
  console.log(eachproduct._id)
  console.log(eachproduct.catagoryid)
    const handledelete=(_id)=>{
         Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`http://localhost:3000/cart/${_id}`,eachproduct)
         .then(data=>{
             if(data.data.deletedCount==1){
            console.log(data)
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
     const newcart=cart.filter(product=>product._id!==_id)
         setcart(newcart)
  }
  }
)
.catch((error)=>console.log(error))

/*axios.patch(`http://localhost:3000/cart/${eachproduct.catagoryid}/${eachproduct._id}`,{

})
.then(data=>console.log(data))
.catch(error=>console.log(error))*/
}
    });
    }
    return (
        <div>
           <div className="card w-96 border border-orange-500 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <div className='flex justify-between gap-3'>
        <div>
            <h2 className="card-title font-bold text-3xl text-orange-500 lobstar whitespace-nowrap">{eachproduct.name}</h2>
            <h2 className="card-title font-bold text-2xl text-white bg-orange-500 w-fit px-3 rounded-2xl whitespace-nowrap lobstar">{eachproduct.brand_name}</h2>
        </div>
        <img src={eachproduct.image} alt="" className='w-24 h-24 rounded-2xl'/>
    </div>
    <p className='text-xl text-orange-500 font-bold cardo'>Quantity: {eachproduct.minimum_selling_quantity}</p>
    <div className="justify-center card-actions">
      <button onClick={()=>handledelete(eachproduct._id)} className="btn btn-outline border-orange-500 lobstar text-lg hover:bg-orange-500 hover:text-white">Delete From Cart</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Cartproduct;