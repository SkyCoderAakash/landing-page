import React from "react";
import { contactDetails } from "../constants/contact";

const Contact = () => {
  return (
    <div className="px-5 py-3 mb-8 sm:md-12 lg:mb-20 md:pt-4 md:px-14">
      <h1 className="font-bold text-2xl sm:text-4xl text-center">
        Send a message!
      </h1>
      <h1 className="font-bold text-xl sm:text-2xl text-center">
        Don't waste your time just call us
      </h1>
      <div className="sm:flex mt-5 justify-center gap-5">
        <div className="bg-blue-500 px-5 my-auto py-16 rounded w-full sm:w-1/2">
          <h1 className="text-center text-white text-xl">
            Email : {contactDetails.email}
          </h1>
          <h1 className="text-center text-white text-xl">
            Phone : {contactDetails.phoneNo}
          </h1>
          <h1 className="text-center text-white text-xl mt-5">
            Whatsapp us direcly on
          </h1>
          <h1 className="text-center text-white text-xl">
            Phone : {contactDetails.phoneNo}
          </h1>
          <h1 className="text-center text-white text-xl mt-5">
            Chat with our sales team
          </h1>
          <div className="flex justify-center items-center my-3">
            <button className="border border-green-600 px-5 py-1 rounded-lg text-white bg-green-600">
              Chat with sales
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="text-2xl font-semibold mt-5 sm:mt-0">Fill out your details</h1>
          <form action="">
            <div className="flex gap-5">
              <input className="w-full my-2 py-1 px-5 rounded outline-none border border-blue-600" type="text" placeholder="Name" />
              <input className="w-full my-2 py-1 px-5 rounded outline-none border border-blue-600" type="text" placeholder="Phone" />
            </div>
            <div className="flex gap-5">
              <input className="w-full my-2 py-1 px-5 rounded outline-none border border-blue-600" type="email" placeholder="email" />
              <input className="w-full my-2 py-1 px-5 rounded outline-none border border-blue-600" type="text" placeholder="Service" />
            </div>
            <textarea 
              
              placeholder="Enter your query here..."
              className="w-full h-40  my-2 py-1 px-5 outline-none border border-blue-600 rounded resize-none"
            />
            <div className="flex justify-center items-center mt-1">
            <button className="border border-blue-600 w-60 font-semibold px-5 py-1 rounded-lg text-white bg-blue-600">
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
