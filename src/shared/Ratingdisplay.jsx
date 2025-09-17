import React from 'react';
import ReactStars from "react-rating-stars-component";
const Ratingdisplay = ({rating}) => {
    const ratingChanged = (newRating) => {
  console.log(newRating);
};
    return (
        <div>
            <ReactStars
    count={5}
    value={Number(rating)}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />

      
        </div>
    );
};

export default Ratingdisplay;