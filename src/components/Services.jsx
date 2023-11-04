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
      icon: <PiPaintBrushBroadLight className="text-9xl" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 2,
      title: "Illustration",
      icon: <BsBoundingBoxCircles className="text-9xl" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 3,
      title: "Marketing",
      icon: <AiOutlineNotification className="text-9xl" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 4,
      title: "Web Design",
      icon: <GiWorld className="text-9xl" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 5,
      title: "Packaging Design",
      icon: <BiCube className="text-9xl" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
    {
      id: 6,
      title: "Web Development",
      icon: <TfiBag className="text-9xl" />,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h2 className="text-green-500 font-semibold text-xl">WHAT WE DO</h2>
          <h1 className="font-bold text-4xl">
            We’ve got everything you need to launch and grow your business
          </h1>
          {services.map(({ id, title, icon, text }) => (
            <div key={id} className={`grid grid-cols-2 `}>
              <div>{icon}</div>
              <div>
                <h1 className="mt-4">{title}</h1>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
