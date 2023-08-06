import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="p-4 flex justify-center items-center bg-[#1F1F1F] text-neutral-content">
        <div className="flex">
          <span>
            <AiOutlineInstagram className="w-10 h-10"></AiOutlineInstagram >
          </span>
          <span>
            <BiLogoFacebookSquare className="w-10 h-10"></BiLogoFacebookSquare>
          </span>
        </div>
      </div>

      <div className="footer p-10 bg-[#191919] text-white">
        <div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
