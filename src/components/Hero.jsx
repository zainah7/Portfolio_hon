import React from "react";
import hero from "../assets/hero.jpeg";
import { PiBehanceLogo } from "react-icons/pi";
import { BsDribbble } from "react-icons/bs";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div>
          <img src={hero} alt="hero" className="bg-cover h-[100vh] w-full" />
          <div className="overlay absolute inset-0 bg-gray-900 opacity-40"></div>
        </div>
        <div className="absolute  top-1/3 left-48 flex justify-between">
          <div className=" text-white text-2xl">
            <h2>WELCOME TO LOGO</h2>
            <h1 className="text-6xl w-1/2 font-semibold">
              We are a creative group of people who design influential brands
              and digital experiences.
            </h1>
            <div className="mt-6 space-x-5  ">
              <button className="border-4 hover:bg-white hover:text-black rounded-md px-6 py-4">
                START A PROJECT
              </button>
              <button className="border-4 hover:bg-white hover:text-black rounded-md px-6 py-4 ">
                MORE ABOUT US
              </button>
            </div>
          </div>
          <div className="text-4xl text-white p-20 space-y-2 ">
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
