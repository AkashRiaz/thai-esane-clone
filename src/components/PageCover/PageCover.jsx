import React from "react";
import { Parallax } from "react-parallax";
const PageCover = ({bgImg, coverTitle}) => {
  return (
    <Parallax
      blur={{ min: -20, max: 10 }}
      bgImage={bgImg}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[500px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageCover;
