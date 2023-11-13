import React from "react";
import { PiPaintBrushBroadLight } from "react-icons/pi";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { AiOutlineNotification } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { BiCube } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Brand Identity",
      icon: <PiPaintBrushBroadLight className="text-5xl text-green-500" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 2,
      title: "Illustration",
      icon: <BsBoundingBoxCircles className="text-5xl text-green-500" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 3,
      title: "Marketing",
      icon: <AiOutlineNotification className="text-5xl text-green-500" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 4,
      title: "Web Design",
      icon: <GiWorld className="text-5xl text-green-500" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 5,
      title: "Packaging Design",
      icon: <BiCube className="text-5xl text-green-500" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 6,
      title: "Web Development",
      icon: <TfiBag className="text-5xl text-green-500" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
  ];
  return (
    <>
        <div className="flex flex-col justify-center space-y-5 my-10 items-center container mx-auto w-full h-screen">
          <div className="text-center leading-10 space-y-5">
          <h2 className="text-green-500 font-semibold text-xl">WHAT WE DO</h2>
          <h1 className="font-bold text-4xl w-1/2 mx-auto">
            We’ve got everything you need to launch and grow your business
          </h1>
          </div>
          <div className="grid grid-cols-2 gap-10 ">
            {services.map(({ id, title, icon, text }) => (
              <div className="flex items-center justify-center space-x-4" key={id}>
                <div className="mb-14">
                {icon}
                </div>
                <div>
                <h1 className="mt-4 font-bold text-2xl leading-10">{title}</h1>
                <p className="">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Services;
