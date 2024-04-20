import React from "react";
import { followUs, footerLinks } from "../constants/footer";

const Footer = () => {
  return (
    <div className="px-5 py-3 md:pt-4 md:px-14 border-t-2">
      <div>
        <h1 className="text-4xl font-bold">logo</h1>
        <h1 className="mt-2 text-base font-medium">
          India's fastest online service provider
        </h1>
      </div>
      <div className="lg:flex justify-center mt-10 gap-10 pb-5 border-b-2">
        <div className="lg:flex gap-10">
          {footerLinks.map((res) => (
            <div>
              <h1 className="text-lg font-bold">{res.title}</h1>
              <ul className="mt-2">
                {res.links.map((link) => (
                  <li className="text-base font-medium cursor-pointer">{link.link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
        <h1 className="text-lg font-bold">{followUs.title}</h1>
        <div className="mt-2">{followUs.links.map((link)=> <img className="rounded-full w-7 cursor-pointer" src={link.link} alt="" /> )}</div>
        </div>
      </div>
      <h1 className="text-center font-medium my-5">Copyright 2024 aresuno.com</h1>
    </div>
  );
};

export default Footer;
