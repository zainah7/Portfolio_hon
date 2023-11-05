import React from "react";
import growGreen from "../assets/grow-green.jpg";
import guitarist from "../assets/guitarist.jpg";
import lady from "../assets/lady-shutterbug.jpg";
import palmeira from "../assets/palmeira.jpg";
import beetle from "../assets/the-beetle.jpg";
import woodcraft from "../assets/woodcraft.jpg";

const RecentWorks = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center bg-black w-full h-screen">
          <div className="w-1/2  text-center mb-5 leading-5 ">
            <h2 className="text-xl text-green-500 font-semibold">
              RECENT WORKS
            </h2>
            <h1 className="text-6xl text-white font-semibold">
              We love what we do, check out some of our latest works
            </h1>
          </div>
        </div>
        <div className=" relative flex -top-52 left-10 justify-center ">
          <div>
            <img src={lady} alt="ladyimg" />
            <img src={beetle} alt="beetle" />
            <img src={guitarist} alt="guitarist" />
          </div>
          <div>
            <img src={woodcraft} alt="woodcraft" />
            <img src={growGreen} alt="growGreen" />

            <img src={palmeira} alt="palmeira" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWorks;
