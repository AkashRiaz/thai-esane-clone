import React from 'react';
import featured from '../../../assets/home/featured.jpg';
import './ParallaxSection.css'; 
import signature from '../../../assets/home/Sig.png'

const ParallaxSection = () => {
  return (
    <div className="hero h-[600px] bg-fixed" style={{backgroundImage: `url(${featured})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
       <div className='bg-white bg-opacity-80 flex flex-col justify-center md:p-10 p-3'>
       <p className="mb-5 text-black text-xs font-medium">"Our fresh home for Thai Esane will offer a whole new game for Nashville Thai food. In addition to the authentic Thai cuisine, we'll honor the culture as well through the restaurant's décor and hospitability." The restaurant offers a central bar, 120 interior seats and a patio for about 40. The aforementioned Buddha statue, made in Thailand, will greet you as you talk into the restaurant. Thai Esane Nashville or (TEN) is situated right off the famous Music Row roundabout at 1520 division street.</p>
      <img src={signature} alt="" className='w-20 mx-auto mb-8'/>
       </div>
    </div>
  </div>
</div>
  );
};

export default ParallaxSection;
