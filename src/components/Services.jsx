import React from "react";
import { sevices } from "../constants/services";

const Services = () => {
  return (
    <div className="px-5 py-3 md:pt-10 md:px-14">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Most booked services</h1>
      <div className="pt-2 sm:pt-5 grid gap-5 grid-cols-1 md:grid-cols-2">
        {sevices.map((service) => (
          <div key={service.title} className="p-3 bg-white rounded">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">{service.title}</h2>
                <span className="text-sm sm:text-base text-gray-500">{service.experts} experts</span>
              </div>
              <div>
                <button className="border px-6 py-1.5 rounded bg-blue-600 text-white">
                  See all
                </button>
              </div>
            </div>
            <div className="flex overflow-auto scrollbar-hidden md:grid md:grid-cols-2">
              {service.service.map((res) => {
                return (
                  <div className="relative m-2 md:h-32 lg:h-48">
                    <div className="w-72 h-48  md:w-full md:h-full rounded-md overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={res.image}
                        alt=""
                      />
                      <h2 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                        {res.tag}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
