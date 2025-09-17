import Aos from 'aos';
import React from 'react';
import 'aos/dist/aos.css';
const Reviews = () => {
    Aos.init({
 duration: 2000,
 delay:500
});
    return (
        <div>
            <h1 className='lobstar text-orange-500 text-5xl text-center mt-20' data-aos='fade-left'>What Our Client Says</h1>
        <div className='flex justify-between ml-20 mt-14'>
            <div data-aos='fade-up'>
           <div className="avatar ml-20">
        <div className="ring-primary ring-offset-base-100 w-36 rounded-full ring-2 ring-offset-2">
        <img src="https://i.postimg.cc/fR7v3xT5/review1.jpg" />
        </div>
        </div>
        <p className='w-4/5 mt-5 lobstar text-orange-500 text-lg'>
         "This marketplace has completely streamlined our bulk purchasing. The prices are competitive, and the ordering process is smooth and reliable. Highly recommended!"   
        </p>
         </div>
            <div data-aos='fade-up'>
            <div className="avatar ml-20">
        <div className="ring-primary ring-offset-base-100 w-36 rounded-full ring-2 ring-offset-2">
        <img src="https://i.postimg.cc/QtCgnwgn/review2.jpg" />
        </div>
        </div>
         <p className='w-4/5 mt-5 lobstar text-orange-500 text-lg'>"We've been sourcing products here for months. The quality is always top-notch, and deliveries arrive on time. It saves us so much hassle compared to other suppliers."</p>
         </div>
            <div data-aos='fade-up'>
           <div className="avatar ml-20">
        <div className="ring-primary ring-offset-base-100 w-36 rounded-full ring-2 ring-offset-2">
        <img src="https://i.postimg.cc/K4SnjY6d/review3.jpg" />
        </div>
        </div>
        <p className='w-4/5 mt-5 lobstar text-lg text-orange-500'>
         "I love the variety of categories available. From electronics to health products, everything is just a click away. Perfect for growing our business inventory."   
        </p>
        </div>
        </div>
        </div>
    );
};

export default Reviews;