import React from 'react';

const Add = () => {
    return (
        <div>
          <div className='grid grid-cols-2 max-w-[780px] ml-96 mt-36 gap-5 '>
         <input type="text" placeholder="Type here" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500" />
         <input type="text" placeholder="Type here" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500" />
         <input type="text" placeholder="Type here" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500" />
         <input type="text" placeholder="Type here" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500" />
         <input type="text" placeholder="Type here" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500" />
         <input type="text" placeholder="Type here" className="input mb-5 w-full border-transparent border-dashed border-b-2 border-b-orange-500" />   
         </div>  
         <div className='grid grid-cols-1'> 
          <input type="text" placeholder="Type here" className="input mt-3 w-3xl ml-96 border-transparent border-dashed border-b-2 border-b-orange-500" />
           <input type="text" placeholder="Type here" className="input mt-8 w-3xl ml-96  border-transparent border-dashed border-b-2 border-b-orange-500" />   
           </div>     
        </div>
    );
};

export default Add;