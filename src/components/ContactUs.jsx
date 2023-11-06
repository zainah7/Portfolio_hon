import React from "react";
import { PiBehanceLogo } from "react-icons/pi";
import { BsDribbble } from "react-icons/bs";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const ContactUs = () => {
  return (
    <>
      <div className="bg-slate-800 h-screen w-full">
        <div className="flex flex-col justify-center items-center pt-36 ">
          <h2 className="text-2xl text-green-500">CONTACT US</h2>
          <h1 className="text-6xl text-white font-bold">
            Reach out for a new project or just say hello
          </h1>
        </div>
        <div className="flex justify-center mt-20 w-1/2 mx-auto">
          <div className="w-3/4 bg-transparent shadow-white shadow-2xl">
            <form class="w-full max-w-sm">
              <div class="flex w-full items-center border-b border-teal-500 py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                  aria-label="Full name"
                />
              </div>
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your Email"
                  aria-label="Full name"
                />
              </div>
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Subject"
                  aria-label="Full name"
                />
              </div>
              <div class="flex items-center border-b border-teal-500 py-2">
                <textarea
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your Message"
                  aria-label="Full name"
                />
              </div>

              <button className="bg-green-500 hover:bg-green-600 w-full text-white h-14 ">
                SUBMIT
              </button>
            </form>
          </div>

          <div className="w-3/12 bg-inherit  shadow-2xl shadow-green-500 ">
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
              <FiFacebook className=" text-white hover:text-green-500  text-4xl cursor-pointer" />
              <FiTwitter className=" text-white  hover:text-green-500   text-4xl  cursor-pointer" />
              <FiInstagram className=" text-white  hover:text-green-500  text-4xl cursor-pointer" />
              <PiBehanceLogo className="  text-white  hover:text-green-500  text-4xl cursor-pointer" />
              <BsDribbble className=" text-white  hover:text-green-500  text-4xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
