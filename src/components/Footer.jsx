import React from "react";
import { BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="bg-black w-full h-[70vh] flex justify-center items-center">
        <div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl text-green-500 ">Logo.</h1>
          </div>
          <div className="text-gray-400">
            <p>
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-white text-xl font-semibold ">Get Notified</h2>
          </div>
          <div>
            <p className="text-gray-400">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
          </div>
          <div className="flex h-11">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="bg-transparent w-full"
            />
            <span>
              <BiEnvelope />
            </span>

            <button className="text-white bg-green-500 w-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex text-gray-400">
          <p>© Copyright Glint 2022</p>
          <p>Site Template by Colorlib</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
