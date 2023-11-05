import React from "react";
import apple from "../assets/apple.png";
import atom from "../assets/atom.png";
import blackberry from "../assets/blackberry.png";
import dropbox from "../assets/dropbox.png";
import envato from "../assets/envato.png";
import firefox from "../assets/firefox.png";
import joomla from "../assets/joomla.png";
import magento from "../assets/magento.png";
import user1 from "../assets/user-01.jpg";
import user2 from "../assets/user-02.jpg";
import user3 from "../assets/user-05.jpg";

const OurClient = () => {
  const clients = [
    {
      id: 1,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
      img: <img src={user1} alt="" />,
      name: "Tim Cook",
      job: "CEO Apple",
    },
    {
      id: 2,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
      img: <img src={user2} alt="" />,
      name: "Satya Nadella",
      job: "CEO Microsoft",
    },
    {
      id: 3,
      text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
      img: <img src={user3} alt="" />,
      name: "Sundar Pichai",
      job: "CEO Google",
    },
  ];
  return (
    <>
      <div className="bg-slate-100 w-full h-screen flex flex-col justify-center items-center space-y-20">
        <div className="w-1/2 text-center">
          <h2 className="text-xl text-green-500 font-semibold">OUR CLIENTS</h2>
          <h1 className="text-7xl font-semibold ">
            Logo has been honored to partner up with these clients
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img src={apple} alt="" className="w-36 h-36" />
          <img src={atom} alt="" className="w-36 h-36" />
          <img src={blackberry} alt="" className="w-36 h-36" />
          <img src={dropbox} alt="" className="w-36 h-36" />
          <img src={envato} alt="" className="w-36 h-36" />
          <img src={firefox} alt="" className="w-36 h-36" />
          <img src={joomla} alt="" className="w-36 h-36" />
          <img src={magento} alt="" className="w-36 h-36" />
        </div>
        <hr className="bg-gray-200 w-1/2 h-1" />
        <div className="flex flex-col justify-center items-center">
          {clients.map(({ id, text, img, name, job }) => (
            <div key={id} className={``}>
              <div>{text}</div>
              <div>
                <h1 className="mt-4">{img}</h1>
                <p>{name}</p>
                <p>{job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurClient;
