import React from 'react';
import Table from './Table';
const AllproductTable = ({allproductsdata}) => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Mininum Sell</th>
        <th>Options</th>
      </tr>
    </thead>
      {/* row 1 */}
     {
    allproductsdata.map((productcategory)=>productcategory.items.map((product)=><tbody><Table key={product._id} catagoryid={productcategory._id} productid={product._id} product={product}></Table></tbody>))
      }
    {/* foot */}
  </table>
</div>
        </div>
    );
};

export default AllproductTable;