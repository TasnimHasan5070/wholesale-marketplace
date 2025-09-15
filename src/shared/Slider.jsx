import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import store from '../assets/store.jpg'
import percentage from '../assets/percentage.jpg'
import saleoffer from '../assets/sale offer.jpg'
import online from '../assets/online.jpg'
import bigsale from '../assets/big sale.png'
import { color, motion, scale } from "motion/react"
import offers2 from '../assets/offers2.png'
import sale2 from '../assets/sale2.png'
import salediscount from '../assets/sale discount.jpg'
import offers from '../assets/offers.png'
import '../../src/index.css'
import Marquee from "react-fast-marquee";
const Slider = () => {
    return (
        <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
      autoplay={{
        delay:9000,
        disableOnInteraction:false,
      }}
      loop={true}
    >
            
    <SwiperSlide>
      <div className="card card-side border-b-2 border-orange-700  gap-20 rounded-none bg-amber-100 h-[500px]">
  <div className='pl-40 mt-6 flex gap-40'>
    <div>
      <motion.img
      animate={{
        x:[0,100,0],
         y:[0,80,0],
         }}
        transition={{duration:5,repeat:Infinity}}      
      src={store}
      alt="loading"  className='w-52 h-52 rounded-full object-cover mb-14'/>
      <motion.img
      animate={{
        x:[0,90,0],
         y:[0,-80,0],
         }}
        transition={{duration:4,delay:3,repeat:Infinity}}
      src={percentage}
      alt="loading"  className='w-52 h-52 rounded-full object-cover'/>
    </div>
    <div>
      <motion.img
      animate={{
        x:[0,-80,0],
         y:[0,80,0],
         }}
        transition={{duration:4,delay:3,repeat:Infinity}}
      src={saleoffer}
      alt="Movie"  className='w-52 h-52 rounded-full object-cover mb-14'/>
      <motion.img
      animate={{
        x:[0,-80,0],
         y:[0,-80,0],
         }}
      transition={{duration:5,repeat:Infinity}}  
      src={online}
      alt="Movie"  className='w-52 h-52 rounded-full object-cover'/>
    </div>
  </div>
  <div className="card-body">
    <motion.h2 className="card-title cardo  font-extrabold text-3xl mt-10"
     initial={{scale:0,color:'#FFFFFF'}}
     animate={{scale:1,color:['#8AFA00','#FA1100','#975a16']}}
     transition={{duration:3}}
    >Streamline Your Wholesale Shopping Experience!</motion.h2>
    <p className='text-[#FA1100] text-2xl font-bold mt-5 cardo'>Whether you're a retailer, distributor, or business owner,<br></br>our marketplace connects you with reliable suppliers for<br></br>all your needs.</p>
    <motion.img animate={{x:[500,0],rotate:[0,360]}}  transition={{duration:5,ease:'linear'}} rotatex={{duration:2,delay:2,ease:'linear'}} src={offers} alt="loading"  className='w-72 h-60 object-cover mt-7'/>
  </div>
</div>
 </SwiperSlide>  

 <SwiperSlide>
  <div className="card  border-b-2 border-orange-700 bg-[#2b2934] shadow-sm rounded-none h-[500px]">
  <div  className='flex justify-between gap-28 pl-10'>
    <motion.img
      src={bigsale}
      alt="Movie" className='w-[1000px] h-64 mt-16'
      animate={{rotateY:360}}
      transition={{duration:5,repeat:Infinity,ease:'linear'}}
      />
      <div className='w-full '>
        <img src={offers2} alt="loading" className='w-[500px] h-96 mt-7'/>
      </div>
  </div>
  <Marquee  loop={0} speed={50} autoFill={true} className='w-screen overflow-hidden mt-10'><img src={sale2} alt="loading" className='w-full h-32 object-cover'/></Marquee>
</div>
  </SwiperSlide> 

<SwiperSlide>
<div className="card card-side border-b-2 border-orange-700 rounded-none shadow-sm h-[500px] ">
  <figure>
    <img
      src={salediscount}
      alt="Movie"  className='w-screen object-cover h-full'/> 
  </figure>
</div>
</SwiperSlide>

</Swiper>
        </div>

    );
};

export default Slider;