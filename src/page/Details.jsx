import { useLoaderData, useParams } from 'react-router';
import ReactStars from "react-rating-stars-component";
import Ratingdisplay from '../shared/Ratingdisplay';
import Modaldisplay from '../shared/Modaldisplay';
const Details = () => {

    const {catagoryid,productid}=useParams()
    const {_id,image,name,main_quantity,minimum_selling_quantity,price,brand_name,product_content,rating,short_description}=useLoaderData()
    return (
        <div>
           <div className="card card-side flex bg-base-100 shadow-lg border border-orange-500 w-4xl ml-64 mt-10 rounded-2xl">
  <div>
    <img
      src={image}
      alt="Album" className='w-5xl h-96 rounded-3xl mt-7 mb-5 ml-5' />
  </div>
  <div className="card-body">
    <div className='flex justify-between mt-5 gap-5 items-center'>
        <h2 className="card-title ml-16 text-3xl text-orange-500 lobstar whitespace-nowrap">{name}</h2>
        <h1 className='bg-orange-500 text-white font-bold cardo text-2xl rounded-2xl px-5 whitespace-nowrap py-1 mr-5'>{brand_name}</h1>
    </div>
    <div className='mt-5 space-y-3'>
    <p className='ml-10 text-xl font-bold cardo text-orange-500'>{product_content}</p>
    <p className='ml-10 text-xl   font-bold cardo text-orange-500'>{short_description}</p>
    </div>
    <div className='flex mt-5'>
     <p className='text-2xl text-orange-500 font-bold  ml-10 lobstar whitespace-nowrap'>Stock Product: <span className='text-yellow-600'>{main_quantity}</span></p>
     <p className='text-2xl text-orange-500 font-bold  ml-10 lobstar whitespace-nowrap'>Sell Product: <span className='text-yellow-600'>{minimum_selling_quantity}</span></p>
    </div>
    <div className='mt-5 flex'>
     <p className='text-2xl text-orange-500 font-bold ml-10 lobstar'>Price: <span className='text-yellow-600'>{price} $</span></p>
     <Ratingdisplay rating={rating}></Ratingdisplay>
    </div>
    <div className="card-actions ml-8 mr-5 mt-5 lobstar">
      <button className="btn btn-outline w-full text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-2xl" onClick={()=>document.getElementById('my_modal_5').showModal()}>Buy</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <Modaldisplay stock={main_quantity} sell={minimum_selling_quantity} price={price}></Modaldisplay>
</dialog>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Details;