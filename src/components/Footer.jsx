import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full h-45 gradient-bg">
      <div className="flex items-stretch h-full">
        <div className="flex-1 p-5 flex flex-col gap-4">
          <p className="text-base footer-body-text">
            Subscribe to our newsletter
          </p>
          <div className="flex">
            <input
              className="bg-white border border-black rounded-[7px] w-[400px] h-[40px] p-[5px]"
              placeholder="Enter email..."
            />
            <button className="relative left-[-87px] text-outline-white button-red rounded-r-[7px] border">
              Subscribe
            </button>
          </div>

          <p className="text-sm footer-body-text">
            Don’t worry we reserve our newsletter for important news <br /> so
            we only send a few updates a year
          </p>
        </div>
        <div className="flex-1 p-5 flex flex-col gap-4">
          <div className="flex justify-end gap-2.5 items-center">
            <FaFacebookSquare size={37} className="icon-white" />
            <PiInstagramLogoFill size={40} className="icon-white" />
            <AiFillTikTok size={40} className="icon-white" />
          </div>
          <p className="text-sm footer-body-text text-right">
            #123 Gregoria St., Molino 2, <br /> Bacoor City, Cavite
          </p>
          <p className="text-xs footer-body-text text-right">
            © 2025 Pawlish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
