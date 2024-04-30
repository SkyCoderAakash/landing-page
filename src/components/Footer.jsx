import React, { useState } from "react";
import { followUs } from "../constants/footer";

const Footer = () => {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [isActiveFour, setIsActiveFour] = useState(false);
  const [isActiveFive, setIsActiveFive] = useState(false);

  const toggleOne = () => {
    setIsActiveOne(!isActiveOne);
    setIsActiveTwo(false);
    setIsActiveThree(false);
    setIsActiveFour(false);
    setIsActiveFive(false);
  };
  const toggleTwo = () => {
    setIsActiveOne(false);
    setIsActiveTwo(!isActiveTwo);
    setIsActiveThree(false);
    setIsActiveFour(false);
    setIsActiveFive(false);
  };
  const toggleThree = () => {
    setIsActiveOne(false);
    setIsActiveTwo(false);
    setIsActiveThree(!isActiveThree);
    setIsActiveFour(false);
    setIsActiveFive(false);
  };
  const toggleFour = () => {
    setIsActiveOne(false);
    setIsActiveTwo(false);
    setIsActiveThree(false);
    setIsActiveFour(!isActiveFour);
    setIsActiveFive(false);
  };
  const toggleFive = () => {
    setIsActiveOne(false);
    setIsActiveTwo(false);
    setIsActiveThree(false);
    setIsActiveFour(false);
    setIsActiveFive(!isActiveFive);
  };

  return (
    <div className="px-5 py-3 md:pt-4 md:px-14 border-t-2">
      <div>
        <h1 className="text-4xl font-bold">logo</h1>
        <h1 className="mt-2 text-base font-medium">
          India's fastest online service provider
        </h1>
      </div>
      <div className="hidden md:flex my-6 lg:justify-around">
        <div className="flex sm:justify-between lg:gap-10 ">
          <div>
            <h1 className="text-lg font-bold my-1">Popular Links</h1>
            <ul>
              <li>Packers and movers in New Delhi</li>
              <li>Web designers in Pune</li>
              <li>Pest control in Mumbai</li>
              <li>Interior Decorators in Chandighar</li>
              <li>Wedding Caterers in Noida</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold my-1">Corporate</h1>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div className="flex sm:justify-between sm:mt-5 md:mt-0 lg:gap-10 ">
          <div>
            <h1 className="text-lg font-bold my-1">Careers</h1>
            <ul>
              <li>View job opening</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold my-1">Business</h1>
            <ul>
              <li>Register as business</li>
            </ul>
          </div>
        </div>
        <div className="flex sm:justify-between sm:mt-5 md:mt-0 lg:gap-10 ">
          <div>
            <h1 className="text-lg font-bold my-1">Blogs</h1>
            <ul>
              <li>Add a vlog</li>
              <li>View Blogs</li>
              <li>View Updates</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold my-1">Follow us</h1>
            <ul className="md:flex gap-2 lg:block">
              {followUs.map((link) => (
                <li>
                  <img className="w-6" src={link.link} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 md:hidden">
        <div className="border-b-2">
          <div
            className="flex justify-between p-2 cursor-pointer"
            onClick={toggleOne}
          >
            <h1 className="font-bold">Popular Links</h1>
            <h1 className="font-bold">{isActiveOne ? "-" : "+"}</h1>
          </div>
          {isActiveOne && (
            <ul className="border-t-2">
              <li className="font-medium px-2 py-1">
                Packers and movers in New Delhi
              </li>
              <li className="font-medium px-2 py-1">Web designers in Pune</li>
              <li className="font-medium px-2 py-1">Pest control in Mumbai</li>
              <li className="font-medium px-2 py-1">
                Interior Decorators in Chandighar
              </li>
              <li className="font-medium px-2 py-1">
                Wedding Caterers in Noida
              </li>
            </ul>
          )}
        </div>
        <div className="border-b-2">
          <div
            className="flex justify-between p-2 cursor-pointer"
            onClick={toggleTwo}
          >
            <h1 className="font-bold">Corporate</h1>
            <h1 className="font-bold">{isActiveTwo ? "-" : "+"}</h1>
          </div>
          {isActiveTwo && (
            <ul className="border-t-2">
              <li className="font-medium px-2 py-1">About us</li>
              <li className="font-medium px-2 py-1">Contact us</li>
              <li className="font-medium px-2 py-1">Privacy Policy</li>
              <li className="font-medium px-2 py-1">Terms and Conditions</li>
            </ul>
          )}
        </div>
        <div className="border-b-2">
          <div
            className="flex justify-between p-2 cursor-pointer"
            onClick={toggleThree}
          >
            <h1 className="font-bold">Business</h1>
            <h1 className="font-bold">{isActiveThree ? "-" : "+"}</h1>
          </div>
          {isActiveThree && (
            <ul className="border-t-2">
              <li className="font-medium px-2 py-1">Register as business</li>
            </ul>
          )}
        </div>
        <div className="border-b-2">
          <div
            className="flex justify-between p-2 cursor-pointer"
            onClick={toggleFour}
          >
            <h1 className="font-bold">Careers</h1>
            <h1 className="font-bold">{isActiveFour ? "-" : "+"}</h1>
          </div>
          {isActiveFour && (
            <ul className="border-t-2">
              <li className="font-medium px-2 py-1">View job opening</li>
            </ul>
          )}
        </div>
        <div className="border-b-2">
          <div
            className="flex justify-between p-2 cursor-pointer"
            onClick={toggleFive}
          >
            <h1 className="font-bold">Blogs</h1>
            <h1 className="font-bold">{isActiveFive ? "-" : "+"}</h1>
          </div>
          {isActiveFive && (
            <ul className="border-t-2">
              <li className="font-medium px-2 py-1">Add a vlog</li>
              <li className="font-medium px-2 py-1">View Blogs</li>
              <li className="font-medium px-2 py-1">View Updates</li>
            </ul>
          )}
        </div>
        <div className="border-b-2">
          <div className="p-2 flex justify-between">
            <h1 className="font-bold">Follow Us</h1>
            <ul className="flex  gap-2">
              {followUs.map((link) => (
                <li>
                  <img className="w-6" src={link.link} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-center font-medium my-2">
        Copyright 2024 aresuno.com
      </h1>
    </div>
  );
};

export default Footer;
