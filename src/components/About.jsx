import React from "react";
const About = () => {
  return (
    <>
      <div className="bg-green-500 p-5 space-y-7 h-[130vh] py-5 w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center my-3 items-center space-y-5">
          <h2 className="font-bold text-xl">HELLO THERE</h2>
          <h1 className="font-bold text-8xl text-white ">We Are Logo</h1>
          <hr className="text-white w-full " />
        </div>
        <div className="flex justify-center">
          <p className="text-center text-2xl w-3/4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>

        <div className="flex justify-around items-center space-x-20">
          <div className="flex  flex-col border-r-2 ">
            <h1 className="text-white font-bold text-7xl">127</h1>
            <p className="font-bold mr-10 ">Awards Received</p>
          </div>
          <div className="flex  flex-col border-r-2">
            <h1 className="text-white font-bold text-7xl mr-10">1505</h1>
            <p className="font-bold">Cups of Coffee</p>
          </div>
          <div className="flex  flex-col border-r-2">
            <h1 className="text-white font-bold text-7xl">109</h1>
            <p className="font-bold mr-10">Projects Completed</p>
          </div>
          <div className="flex  flex-col ">
            <h1 className="text-white font-bold text-7xl">102</h1>
            <p className="font-bold">Happy Clients</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
