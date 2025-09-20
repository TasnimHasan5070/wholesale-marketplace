import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
//import 'swiper/css/lazy';
import { Autoplay} from 'swiper/modules';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import store from '../assets/store.jpg';
import percentage from '../assets/percentage.jpg';
import saleoffer from '../assets/sale_offer.jpg';
import online from '../assets/online.jpg';
import bigsale from '../assets/big_sale.png';
import offers2 from '../assets/offers2.png';
import sale2 from '../assets/sale2.png';
import salediscount from '../assets/sale_discount.jpg';
import offers from '../assets/offers.png';

import '../../src/index.css';

const Slider = () => {
  // Motion variants for staggered animations
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const floatAnimation = (xValues, yValues, duration, delay = 0) => ({
    animate: { x: xValues, y: yValues },
    transition: { duration: duration, delay: delay, repeat: Infinity },
  });

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        lazy={true}
        preloadImages={false} // only load visible slides
      >
        {/* ---------- Slide 1 ---------- */}
        <SwiperSlide>
          <div className="card card-side border-b-2 border-orange-700 gap-20 rounded-none bg-amber-100 h-[500px]">
            <motion.div
              className="pl-40 mt-6 flex gap-40"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div>
                <motion.img
                  src={store}
                  loading="lazy"
                  alt="store"
                  className="w-52 h-52 rounded-full object-cover mb-14"
                  {...floatAnimation([0, 100, 0], [0, 80, 0], 5)}
                />
                <motion.img
                  src={percentage}
                  loading="lazy"
                  alt="percentage"
                  className="w-52 h-52 rounded-full object-cover"
                  {...floatAnimation([0, 90, 0], [0, -80, 0], 4, 3)}
                />
              </div>
              <div>
                <motion.img
                  src={saleoffer}
                  loading="lazy"
                  alt="saleoffer"
                  className="w-52 h-52 rounded-full object-cover mb-14"
                  {...floatAnimation([0, -80, 0], [0, 80, 0], 4, 3)}
                />
                <motion.img
                  src={online}
                  loading="lazy"
                  alt="online"
                  className="w-52 h-52 rounded-full object-cover"
                  {...floatAnimation([0, -80, 0], [0, -80, 0], 5)}
                />
              </div>
            </motion.div>

            <div className="card-body">
              <motion.h2
                className="card-title cardo font-extrabold text-3xl mt-10"
                initial={{ scale: 0, color: '#FFFFFF' }}
                animate={{
                  scale: 1,
                  color: ['#8AFA00', '#FA1100', '#975a16'],
                }}
                transition={{ duration: 3 }}
              >
                Streamline Your Wholesale Shopping Experience!
              </motion.h2>

              <p className="text-[#FA1100] text-2xl font-bold mt-5 cardo">
                Whether you're a retailer, distributor, or business owner,
                <br />
                our marketplace connects you with reliable suppliers for
                <br />
                all your needs.
              </p>

              <motion.img
                src={offers}
                loading="lazy"
                alt="offers"
                className="w-72 h-60 object-cover mt-7"
                animate={{ x: [500, 0], rotate: [0, 360], rotateX: [0, 360] }}
                transition={{ duration: 5, ease: 'linear', delay: 2 }}
              />
            </div>
          </div>
        </SwiperSlide>

        {/* ---------- Slide 2 ---------- */}
        <SwiperSlide>
          <div className="card border-b-2 border-orange-700 bg-[#2b2934] shadow-sm rounded-none h-[500px]">
            <div className="flex justify-between gap-28 pl-10">
              <motion.img
                src={bigsale}
                loading="lazy"
                alt="bigsale"
                className="w-[1000px] h-64 mt-16"
                animate={{ rotateY: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
              <div className="w-full">
                <img
                  src={offers2}
                  loading="lazy"
                  alt="offers2"
                  className="w-[500px] h-96 mt-7"
                />
              </div>
            </div>

            <Marquee
              loop={0}
              speed={50}
              autoFill={true}
              className="w-screen overflow-hidden mt-10"
            >
              <img
                src={sale2}
                loading="lazy"
                alt="sale2"
                className="w-full h-32 object-cover"
              />
            </Marquee>
          </div>
        </SwiperSlide>

        {/* ---------- Slide 3 ---------- */}
        <SwiperSlide>
          <div className="card card-side border-b-2 border-orange-700 rounded-none shadow-sm h-[500px]">
            <figure>
              <img
                src={salediscount}
                loading="lazy"
                alt="salediscount"
                className="w-screen object-cover h-full"
              />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default memo(Slider);