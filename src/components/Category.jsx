import React from "react";
import { categoryArr } from "../constants/categoryArr";

const Category = () => {
  return (
    <div className="px-5 py-3 md:pt-4 md:px-14">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Explore all the catogories</h1>
      <div className="mt-2 md:mt-5 grid grid-cols-5 md:grid-cols-7 gap-4">
        {categoryArr.map((category) => {
          return (
            <div
              className="flex rounded-md justify-center items-center "
            >
              <div className="w-28">
                <div className="p-4 rounded-lg bg-white">
                  <img
                    src={category.img}
                    alt=""
                    className="aspect-square object-cover mx-auto"
                  />
                </div>
                <h1 className="min-h-16 md:min-h-20 text-center text-xs font-medium md:text-base">
                  {category.tag}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
