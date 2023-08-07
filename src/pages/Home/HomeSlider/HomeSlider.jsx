import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowDown } from 'react-icons/fi';
import { Parallax } from "react-parallax";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HomeSlider.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import slider1 from '../../../assets/slider/slider1.jpg'
import slider2 from '../../../assets/slider/slider2.jpg'
import slider3 from '../../../assets/slider/slider3.jpg'
import slider4 from '../../../assets/slider/slider4.jpg'
import slider5 from '../../../assets/slider/slider5.jpg'
import slider6 from '../../../assets/slider/slider6.jpg'
import slider7 from '../../../assets/slider/slider7.jpg'

const HomeSlider = () => {
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
            bgImage={slider2}
            bgImageAlt="the menu"
            strength={50}
            className="md:h-[600px] h-[200px] flex flex-col justify-center items-center"
          >
              <div className="text-center">
              <h2 className="md:text-5xl text-3xl font-bold text-white">THAI ESANE</h2>
              <button className="btn mt-8 md:mt-20">Order Online</button>
            </div>

            <div className="mx-auto md:mt-28 md:ml-28 ml-14 mt-6">
              <a href="#bellow">
                <span className=" inline-block p-2 rounded-full">
                  <FiArrowDown className="h-7 w-7  text-black" />
                </span>
              </a>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
        <Parallax
            blur={{ min: -20, max: 15 }}
            bgImage={slider3}
            bgImageAlt="the menu"
            strength={50}
            className="md:h-[600px] h-[200px] flex flex-col justify-center items-center"
          >
              <div className="text-center">
              <h2 className="md:text-5xl text-3xl font-bold text-white">THAI ESANE</h2>
              <button className="btn mt-8 md:mt-20">Order Online</button>
            </div>

            <div className="mx-auto md:mt-28 md:ml-28 ml-14 mt-6">
              <a href="#bellow">
                <span className=" inline-block p-2 rounded-full">
                  <FiArrowDown className="h-7 w-7  text-black" />
                </span>
              </a>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
        <Parallax
            blur={{ min: -20, max: 15 }}
            bgImage={slider4}
            bgImageAlt="the menu"
            strength={50}
            className="md:h-[600px] h-[200px] flex flex-col justify-center items-center"
          >
              <div className="text-center">
              <h2 className="md:text-5xl text-3xl font-bold text-white">THAI ESANE</h2>
              <button className="btn mt-8 md:mt-20">Order Online</button>
            </div>

            <div className="mx-auto md:mt-28 md:ml-28 ml-14 mt-6">
              <a href="#bellow">
                <span className=" inline-block p-2 rounded-full">
                  <FiArrowDown className="h-7 w-7  text-black" />
                </span>
              </a>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
        <Parallax
            blur={{ min: -20, max: 15 }}
            bgImage={slider5}
            bgImageAlt="the menu"
            strength={50}
            className="md:h-[600px] h-[200px] flex flex-col justify-center items-center"
          >
              <div className="text-center">
              <h2 className="md:text-5xl text-3xl font-bold text-white">THAI ESANE</h2>
              <button className="btn mt-8 md:mt-20">Order Online</button>
            </div>

            <div className="mx-auto md:mt-28 md:ml-28 ml-14 mt-6">
              <a href="#bellow">
                <span className=" inline-block p-2 rounded-full">
                  <FiArrowDown className="h-7 w-7  text-black" />
                </span>
              </a>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
        <Parallax
            blur={{ min: -20, max: 15 }}
            bgImage={slider6}
            bgImageAlt="the menu"
            strength={50}
            className="md:h-[600px] h-[200px] flex flex-col justify-center items-center"
          >
              <div className="text-center">
              <h2 className="md:text-5xl text-3xl font-bold text-white">THAI ESANE</h2>
              <button className="btn mt-8 md:mt-20">Order Online</button>
            </div>

            <div className="mx-auto md:mt-28 md:ml-28 ml-14 mt-6">
              <a href="#bellow">
                <span className=" inline-block p-2 rounded-full">
                  <FiArrowDown className="h-7 w-7  text-black" />
                </span>
              </a>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
        <Parallax
            blur={{ min: -20, max: 15 }}
            bgImage={slider7}
            bgImageAlt="the menu"
            strength={50}
            className="md:h-[600px] h-[200px] flex flex-col justify-center items-center"
          >
              <div className="text-center">
              <h2 className="md:text-5xl text-3xl font-bold text-white">THAI ESANE</h2>
              <button className="btn mt-8 md:mt-20">Order Online</button>
            </div>

            <div className="mx-auto md:mt-28 md:ml-28 ml-14 mt-6">
              <a href="#bellow">
                <span className=" inline-block p-2 rounded-full">
                  <FiArrowDown className="h-7 w-7  text-black" />
                </span>
              </a>
            </div>
          </Parallax>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
