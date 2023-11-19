import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111111] p-5">
        <div className="w-full h-[70vh] flex justify-center items-center px-10">
        <div className="flex flex-col"  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
          <div className="text-gray-400 w-1/2 mx-auto">
          <h1 className="font-bold text-3xl text-green-500 ">Logo.</h1>
            <p className="">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 w-1/2"  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
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
              className="bg-transparent w-full px-2 text-white"
            />
            <button className="text-white bg-green-500 w-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
        </div>
        <div className="flex text-gray-400 justify-center"  >
          <p>© Copyright Glint 2022</p>
          <p>Site Template by Colorlib</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
