import React from 'react';
import Slider from '../shared/Slider';
import Homecard from '../shared/Homecard';
import Reviews from '../shared/Reviews';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div className='overflow-hidden '>
        <Slider></Slider>
        <Homecard></Homecard>
        <Reviews></Reviews>
        </div>
    );
};

export default Home;