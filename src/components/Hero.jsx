import React from "react";
import hero from "../assets/hero.jpeg";
import { PiBehanceLogo } from "react-icons/pi";
import { BsDribbble } from "react-icons/bs";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div className="overflow-hidden h-screen">
        <div>
          <div className="overlay absolute inset-0 bg-gray-950 bg-opacity-100">
          <img src={hero} alt="hero" className="bg-cover h-[120vh] w-screen" />
          </div>
        </div>
        <div className="absolute  top-1/3 left-48 flex justify-between items-center">
          <div className=" text-white text-2xl space-y-10"  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
            <h2 >WELCOME TO LOGO</h2>
            <h1 className="text-6xl w-[60%] font-semibold leading-relaxed">
              We are a creative group of people who design influential brands
              and digital experiences.
            </h1>
            <div className="mt-48 space-x-5  ">
              <button className="border-2 hover:bg-white hover:text-black rounded-md px-6 py-3">
                START A PROJECT
              </button>
              <button className="border-2 hover:bg-white hover:text-black rounded-md px-6 py-3 ">
                MORE ABOUT US
              </button>
            </div>
          </div>
          <div className="text-4xl text-white p-10 space-y-5 ">
            <FiFacebook className="border-2 rounded-full px-2 py-2 cursor-pointer" />
            <FiTwitter className="border-2 rounded-full px-2 py-2 cursor-pointer" />
            <FiInstagram className="border-2 rounded-full px-2 py-2 cursor-pointer" />
            <PiBehanceLogo className="border-2 rounded-full px-2 py-2 cursor-pointer" />
            <BsDribbble className="border-2 rounded-full px-2 py-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
