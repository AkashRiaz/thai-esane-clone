import React from "react";
import PageCover from "../../../components/PageCover/PageCover";
import homeBanner from "../../../assets/pageCover/03.png";
import nashvilleImg from "../../../assets/home/Cashew-Nut.jpg"
import brentWoodImg from "../../../assets/home/Crying-Lion.jpg"
import './Home.css'
import ParallaxSection from "../ParallaxSection/ParallaxSection";
import HomeSlider from "../HomeSlider/HomeSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <div className="text-center md:w-9/12 mx-auto my-5 md:my-24">
        <div>
          <h1 className="text-5xl font-light mb-5 md:px-10">
            Offering Authentic Thai Cuisine Since 2014.
          </h1>
          <p className="text-sm mb-6">
            Thai Esane is staying true to their authentic Southeastern Asian
            cuisine. Crowd favorite dishes are the papaya salad, Khao Soi noodle
            soup, Iconic Pad Thai, Curries and Malaysian noodles.
          </p>
          <p>
            Check out our menu. We're sure you'll find something to your liking!
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3 md:mx-20 md:mt-40 md:mb-8">
        <div className="hero-container">
          <div>
          <div
            className="hero h-[280px] hover-opacity hover:border-4 border-yellow-500"
            style={{
              backgroundImage:
                `url(${nashvilleImg})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 hover:bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content hover:bg-opacity-25">
              <div className="max-w-md ">
             
                <h1 className="mb-5 text-3xl text-white font-bold border-2 border-white py-[10px] px-4">Nashville Menu</h1>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="hero-container">
          <div>
          <div
            className="hero h-[280px] hover-opacity hover:border-4 border-yellow-500"
            style={{
              backgroundImage:
                `url(${brentWoodImg})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 hover:bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content hover:bg-opacity-25">
              <div className="max-w-md ">
             
                <h1 className="mb-5 text-3xl text-white font-bold border-2 border-white py-[10px] px-4">BrentWood Menu</h1>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <ParallaxSection></ParallaxSection>
    </div>
  );
};

export default Home;
