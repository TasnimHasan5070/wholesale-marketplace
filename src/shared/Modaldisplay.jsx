import React, { useContext, useState } from 'react';
import { LuCirclePlus } from "react-icons/lu";
import { FiMinusCircle } from "react-icons/fi";
import Swal from 'sweetalert2';
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { Authcontext } from './Authcontext';

const Modaldisplay = ({name,image,brand_name,minimum_selling_quantity,sell,price,catagoryid,productid,main_quantity}) => {
    const {user}=useContext(Authcontext)
    const [quantity,setquantity]=useState(Number(sell))
    const handleincrease=()=>{
            setquantity(quantity+1)
    }
    const handledecrease=()=>{
        setquantity(quantity-1)
    }
    const handleconfirm=()=>{
        if(quantity<(Number(sell))){
             toast.error("Can't sell below the sell number 😐", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
   return;
        }

        if(quantity>=(Number(sell))){
            axios.patch(`https://wholesale-platfrom-server.vercel.app/products/${catagoryid}/${productid}/stock`,
            {
                quantity:Number(quantity),
                main_quantity:Number(main_quantity)
            }
        )
            .then(data=>console.log(data))
            .catch(error=>console.log(error))

            axios.post(`https://wholesale-platfrom-server.vercel.app/cart`,{name:name,brand_name:brand_name,_id:productid,minimum_selling_quantity:minimum_selling_quantity,main_quantity:main_quantity,catagoryid:catagoryid,clientemail:user.email,quantity:quantity,image:image})
      .then(data=>{
        console.log(data)
        if(data.data.insertedId==productid){
            toast.success("Successfully added in the cart 🙂"), {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
        }
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

        
    }
    return (
        <div className="modal-box">
            <div className='flex justify-between'>
                <h3 className="font-bold text-lg text-orange-500">Name:{user?.displayName}</h3>
                <h3 className="font-bold text-lg text-orange-500">Email:{user?.email}</h3>
            </div>
      <div className='flex justify-between mt-3'>
                <h3 className="font-bold text-lg text-orange-500">Stock Product:{main_quantity} piece</h3>
                <h3 className="font-bold text-lg text-orange-500">PerUnitPrice:{price} $</h3>
            </div>
            <div className='flex justify-between mt-3'>
                <input type="text" placeholder="Shipping Address" className="input w-64" />
                <h3 className="font-bold text-lg text-orange-500">Payment Method:COD</h3>
            </div>
            <div className='mt-10 flex justify-center gap-3'><button onClick={handleincrease}><LuCirclePlus size={20}/></button><input type="text" value={quantity} onChange={(e)=>setquantity(e.target.value)} readOnly className="input w-44" /><button onClick={handledecrease}><FiMinusCircle size={20}/></button></div>
            <div className='mt-5 flex justify-center'><button className="btn" onClick={handleconfirm}>Confirm</button></div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
    );
};

export default Modaldisplay;