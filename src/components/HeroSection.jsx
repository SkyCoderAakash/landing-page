import React from "react";
import { HeroImg } from "../constants/images";

const HeroSection = () => {
  return (
    <div className="flex px-5 sm:px-10 py-3 md:pt-14 md:px-14">
      <div className="w-full mt-12 sm:mt-10 md:mt-0 sm:w-6/12 md:w-5/12">
        <div className="mb-4 flex items-start justify-center sm:justify-start">
          <span className="bg-[#7AFF7F] p-3 rounded uppercase font-medium text-xs">
            on demand service plateform
          </span>
        </div>
        <p className="my-1 sm:my-3 lg:my-6 text-center sm:text-start text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[2rem] md:leading-[2.85rem] tracking-wider">
          On-demand <span className="text-blue-600">home services</span> are
          just a call away.
        </p>
        <p className="my-2 hidden md:block text-base font-medium">
          Enjoy quick, reliable solution when you need them the most with our
          on-demand services.
        </p>
        <div className="relative my-4 sm:max-w-96">
          <input
            type="text"
            placeholder="Location"
            className="w-full sm:w-[18rem] md:w-[20rem] lg:w-full py-2 pl-5 pr-10 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            className="absolute right-4 sm:right-28 md:right-20 lg:right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>

        <div className="relative my-4 sm:max-w-96">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-[18rem] md:w-[20rem] lg:w-full  py-2 pl-5 pr-10 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            className="absolute right-4 sm:right-28 md:right-20 lg:right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>

        <div className="my-3">
        <h1 className="text-sm font-medium text-center sm:text-start">
          Popular Search...
        </h1>
        <div className="flex justify-center items-center sm:justify-start gap-1">
          <h1 className="border-[1px] border-blue-600 rounded px-1.5 text-sm text-blue-600">
            Packers & Movers
          </h1>
          <h1 className="border-[1px] border-blue-600 rounded px-1.5 text-sm text-blue-600">
            AC Repair
          </h1>
          <h1 className="border-[1px] border-blue-600 rounded px-1.5 text-sm text-blue-600">
            Mens hair cut
          </h1>
        </div>
        </div>

        <div className="flex justify-center sm:justify-start my-8 gap-8">
          <div className="flex gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <div>
              <h1 className="font-semibold">4.7</h1>
              <h1 className="text-gray-400">Service Rating</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <svg
              fill="#000000"
              width="92px"
              height="92px"
              viewBox="0 0 32.00 32.00"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00032"
              className="w-5 h-5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="1.216"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z"></path>{" "}
              </g>
            </svg>

            <div>
              <h1 className="font-semibold">100k</h1>
              <h1 className="text-gray-400">Customer Globally</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-6/12 md:w-7/12 items-center my-auto md:my-0 hidden sm:block">
        <img className="" src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
