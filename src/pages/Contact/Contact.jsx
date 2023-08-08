import React from "react";
import OtherPageSlider from "../../components/PageCover/OtherPageSlider";
import location from "../../assets/contact/location.png";
import CommonForm from "../../components/CommonForm/CommonForm";
import featured from '../../assets/home/featured.jpg'

const Contact = () => {
  return (
    <div>
      <OtherPageSlider coverTitle={"Contact"}></OtherPageSlider>
      <div>
        <div className="my-14 md:my-20">
          <h2 className="text-center text-4xl font-normal mb-6">Our Locations</h2>
          <div className="md:mx-20">
            <img src={location} alt="" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-0 mx-auto">
            <div className="text-center">
              <h3>Nashville</h3>
              <a href="#">
                <span>1520 Division Street <br /> Nashville, TN 37203</span>
              </a>
              <p>(615) 454-5373</p>
              <p>Monday - Saturday: 11:00 am - 9:00 pm</p>
              <p>Sunday: Closed</p>
              <span></span>
            </div>
            <div className="text-center">
              <h3>Nashville</h3>
              <a href="#">
                <span>1520 Division Street <br /> Nashville, TN 37203</span>
              </a>
              <p>(615) 454-5373</p>
              <p>Monday - Saturday: 11:00 am - 9:00 pm</p>
              <p>Sunday: Closed</p>
              <span></span>
            </div>
          </div>
        </div>
        <div>
        <div className="hero h-[450px] bg-fixed" style={{backgroundImage: `url(${featured})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">

    </div>
  </div>
</div>
        </div>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:my-20 my-10">
            <div className="left-side flex justify-center">
              <div className="w-7/12">
              <h2 className="md:text-5xl text-3xl font-normal text-black  md:mb-7 mb-4">Contact Us</h2>
              <p>Please use our form to send us a message and we'll be in touch shortly!</p>
              </div>
            </div>
            <div className="right-side">
              <CommonForm></CommonForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
