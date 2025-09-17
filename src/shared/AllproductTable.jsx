import React from 'react';
import Table from './Table';
const AllproductTable = ({allproductsdata}) => {
    return (
        <div>
            <div className="overflow-x-auto h-[650px] ml-10 mr-10 scroll-smooth">
  <table className="table table-pin-rows">
    {/* head */}
    <thead>
      <tr className=' text-white font-bold text-xl cardo bg-orange-400 border-b-1 border-orange-600 border rounded-4xl'>
        <th>Image</th>
        <th className='pl-40'>Desciption</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Mininum Sell</th>
        <th>Options</th>
      </tr>
    </thead>
     {
    allproductsdata.map((productcategory)=>productcategory.items.map((product)=><tbody><Table key={product._id} catagoryid={productcategory._id} productid={product._id} product={product}></Table></tbody>))
      }
  </table>
</div>
        </div>
    );
};

export default AllproductTable;