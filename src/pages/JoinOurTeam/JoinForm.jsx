import React, {useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";

const JoinForm = () => {
    const [verified, setVerified] = useState(false)
    const onChange =(value) =>{
        console.log("Captcha value:", value);
        setVerified(true)
      }
  return (
   <div>
   <form action="">
   <div className="space-y-5">
      <div className="form">
        <input type="text" required />
        <label className="search-label">Search 1</label>
      </div>
      <div className="form">
        <input type="text" required />
        <label className="search-label">Search 2</label>
      </div>
      <div className="form">
        <input type="text" required />
        <label className="search-label">Search 3</label>
      </div>
      <div className="form-area">
        <textarea type="text" required />
        <label className="search-label">Search 4</label>
      </div>
      
      <div className="form">
  <input type="file" name="" id="" className="h-5" />
  <label className="select-label">Select an option</label>
</div>
    </div>
    <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
    className="mt-5 mb-8"
  />
     <button type="submit" className="w-[400px] btn mt-5" disabled={!verified}>Send Message</button>
   </form>
   </div>
  );
};

export default JoinForm;
