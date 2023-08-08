import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-parallax";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'
import slider3 from '../../assets/slider/slider3.jpg'
import slider4 from '../../assets/slider/slider4.jpg'
import slider5 from '../../assets/slider/slider5.jpg'

const OtherPageSlider = ({coverTitle}) => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Parallax
              blur={{ min: -20, max: 15 }}
              bgImage={slider1}
              bgImageAlt="the menu"
              strength={50}
              className="md:h-[500px] h-[200px] flex flex-col justify-center items-center"
            >
                <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-white">{coverTitle}</h2>
              </div>
  
            </Parallax>
          </SwiperSlide>
          <SwiperSlide>
          <Parallax
              blur={{ min: -20, max: 15 }}
              bgImage={slider2}
              bgImageAlt="the menu"
              strength={50}
              className="md:h-[500px] h-[200px] flex flex-col justify-center items-center"
            >
                <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-white">{coverTitle}</h2>
              </div>
            </Parallax>
          </SwiperSlide>
          <SwiperSlide>
          <Parallax
              blur={{ min: -20, max: 15 }}
              bgImage={slider3}
              bgImageAlt="the menu"
              strength={50}
              className="md:h-[500px] h-[200px] flex flex-col justify-center items-center"
            >
                <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-white">{coverTitle}</h2>
              </div>
            </Parallax>
          </SwiperSlide>
          <SwiperSlide>
          <Parallax
              blur={{ min: -20, max: 15 }}
              bgImage={slider4}
              bgImageAlt="the menu"
              strength={50}
              className="md:h-[500px] h-[200px] flex flex-col justify-center items-center"
            >
                <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-white">{coverTitle}</h2>
              </div>
            </Parallax>
          </SwiperSlide>
          
          <SwiperSlide>
          <Parallax
              blur={{ min: -20, max: 15 }}
              bgImage={slider5}
              bgImageAlt="the menu"
              strength={50}
              className="md:h-[500px] h-[200px] flex flex-col justify-center items-center"
            >
                <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-white">{coverTitle}</h2>
              </div>
            </Parallax>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default OtherPageSlider;