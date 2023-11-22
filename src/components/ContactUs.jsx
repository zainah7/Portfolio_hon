import React from "react";
import { PiBehanceLogo } from "react-icons/pi";
import { BsDribbble } from "react-icons/bs";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const ContactUs = () => {
  return (
    <>
      <div className="bg-[#151515] md:h-[150vh] w-full">
        <div className="flex flex-col justify-center items-center pt-36 ">
          <h2 className="text-2xl text-green-500">CONTACT US</h2>
          <h1 className="text-xl md:text-6xl text-white text-center font-bold">
            Reach out for a new project or just say hello
          </h1>
        </div>
        <div className="md:flex justify-center p-5  md:p-20  space-y-10 md:space-y-0  mx-auto">
          <div className="md:w-[50%] w-full bg-[#111111] rounded-md  shadow-2xl">
            <form class="w-full h-screen max-w-2xl p-10 space-y-10">
              <div class="flex items-center border-b border-[#39B54A] py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                  aria-label="Full name"
                />
              </div>
              <div class="flex items-center border-b border-[#39B54A] py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your Email"
                  aria-label="Full name"
                />
              </div>
              <div class="flex items-center border-b border-[#39B54A] py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Subject"
                  aria-label="Full name"
                />
              </div>
              <div class="flex items-center border-b border-[#39B54A] py-2">
                <textarea
                  class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  rows={10}
                  cols={90}
                  placeholder="Your Message"
                  aria-label="Full name"
                />
              </div>

              <button className="bg-green-500 hover:bg-green-600 w-full text-white h-14 ">
                SUBMIT
              </button>
            </form>
          </div>

          <div className="md:w-[25%] bg-[#121212] rounded-md p-5 space-y-10  shadow-2xl ">
            <div>
              <h2 className="text-white">CONTACT INFO</h2>
            </div>
            <div className="text-gray-400 mt-8">
              <h2 className="font-semibold text-green-500 ">
                Where to Find Us
              </h2>
              <p>1600 Amphitheatre Parkway</p>
              <p>Mountain View, CA</p>
              <p>94043 US</p>
            </div>
            <div className="text-gray-400 mt-5">
              <h2 className="font-semibold text-green-500">Email Us At</h2>
              <p>contact@glintsite.com</p>
              <p>info@glintsite.com</p>
            </div>
            <div className="text-gray-400 mt-5">
              <h2 className="font-semibold text-green-500 ">Call Us At</h2>
              <p>Phone: (+63) 555 1212</p>
              <p>Mobile: (+63) 555 0100</p>
              <p>Fax: (+63) 555 0101</p>
            </div>
            <div className="flex space-x-5 ">
              <FiFacebook className=" text-white hover:text-green-500  text-xl cursor-pointer" />
              <FiTwitter className=" text-white  hover:text-green-500   text-xl  cursor-pointer" />
              <FiInstagram className=" text-white  hover:text-green-500  text-xl cursor-pointer" />
              <PiBehanceLogo className="  text-white  hover:text-green-500  text-xl cursor-pointer" />
              <BsDribbble className=" text-white  hover:text-green-500  text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
