import React from 'react';
import { Parallax } from "react-parallax";

const HomeBanner = ({ bgImage, coverTitle }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 10 }}
            bgImage={bgImage}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[500px] relative">
                <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase text-white bg-black py-2 px-4 inline-block">{coverTitle}</h1>
                    </div>
                    <div>
                        <button className='btn mt-32'>Order Online</button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default HomeBanner;
