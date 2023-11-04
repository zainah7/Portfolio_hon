import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className=" absolute top-0 w-full container flex justify-between p-5">
        <div>
          <h1 className=" font-bold text-4xl  text-white">Logo</h1>
        </div>
        <div className="flex justify-center items-center gap-3">
          <h1 className="font-semibold text-xl text-green-500">Menu</h1>
          <GiHamburgerMenu className="text-2xl cursor-pointer text-white" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
