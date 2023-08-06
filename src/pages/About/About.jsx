import React from 'react';
import PageCover from '../../components/PageCover/PageCover';
import aboutImage from '../../assets/pageCover/banner.jpg'
import food from '../../assets/pageCover/about-food.png'
import AboutGallery from '../../components/AboutGallary/AboutGallary';

const About = () => {
    return (
        <div>
            <PageCover bgImg={aboutImage} coverTitle={"About"}></PageCover>
            <div className='our-story mx-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 mx-2 md:mx-20 my-10 md:my-24 items-center justify-center md:gap-0 gap-3'>
                    <div>
                        <h1 className='text-5xl font-normal mb-5'>Our Story</h1>
                        <p className='text-[13px] font-normal'>"Where it began" The Sayasack family started a restaurant named KingMarket in Antioch and has served middle Tennessee with fresh authentic Thai/Lao food since 2007. Since June 2014, Chef and owner Nina Singto, is the mastermind behind TEN bringing popular Thai dishes from the iconic Pad Thai to Malaysian – Style Noodles, and various authentic Southeast Asian cuisine here in the South. The name of the restaurant, Thai Esane, refers to Lao-speaking people in northeastern Thailand, and the food reflects that. It's roughly equal parts Thai and Lao, with flavors and textures honed to suit the tastes of the Sayasack family over the years.</p>
                        <button className='btn btn-primary mt-4'>Order Online</button>
                    </div>
                    <div className='md:ml-8'>
                       <img src={food} alt="" className='h-60'/>
                    </div>
                </div>
            </div>
            <div>
                <AboutGallery></AboutGallery>
            </div>
        </div>
    );
};

export default About;