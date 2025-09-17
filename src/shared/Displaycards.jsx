import React from 'react';

const Displaycards = ({categories}) => {
    return (
        <div>
          <div className="card w-96 bg-base-100 card-xs shadow-sm border-orange-500  border-2 py-2 hover:scale-105">
  <div className="card-body text-center">
    <h2 className="card-title  font-bold text-lg pl-16 cardo">{categories.category}</h2>
    <p className='text-lg text-orange-500 font-bold cardo'>Total Product:{categories.items.length}</p>
  </div>
</div>
        </div>
    );
};

export default Displaycards;