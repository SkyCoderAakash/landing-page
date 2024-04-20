import React, { useState } from "react";
import { categoryArr } from "../constants/categoryArr";
// import one from '../images/one.png'

const Categories = () => {
  const [slide, setSlide] = useState(0);
  const clickRightArrow = () => {
    if(slide===9) return
    setSlide(slide + 3);
  };
  const clickLeftArrow = () => {
    if(slide===0) return
    setSlide(slide - 3);
  };
  return (
    <div className="max-w-[1245px] pt-2 mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl">Explore all the catogories</h1>
        <div className="flex gap-4">
          <div
            onClick={clickLeftArrow}
            className="w-8 h-8 p-2 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          >
            <svg
            onClick={clickLeftArrow}
              viewBox="0 -6.5 38 38"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>left-arrow</title> <desc>Created with Sketch.</desc>{" "}
                <g
                  id="icons"
                  stroke-width="3.8"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="ui-gambling-website-lined-icnos-casinoshunter"
                    transform="translate(-1641.000000, -158.000000)"
                    fill="#1C1C1F"
                    fill-rule="nonzero"
                  >
                    {" "}
                    <g id="1" transform="translate(1350.000000, 120.000000)">
                      {" "}
                      <path
                        d="M317.812138,38.5802109 L328.325224,49.0042713 L328.41312,49.0858421 C328.764883,49.4346574 328.96954,49.8946897 329,50.4382227 L328.998248,50.6209428 C328.97273,51.0514917 328.80819,51.4628128 328.48394,51.8313977 L328.36126,51.9580208 L317.812138,62.4197891 C317.031988,63.1934036 315.770571,63.1934036 314.990421,62.4197891 C314.205605,61.6415481 314.205605,60.3762573 314.990358,59.5980789 L322.274264,52.3739093 L292.99947,52.3746291 C291.897068,52.3746291 291,51.4850764 291,50.3835318 C291,49.2819872 291.897068,48.3924345 292.999445,48.3924345 L322.039203,48.3917152 L314.990421,41.4019837 C314.205605,40.6237427 314.205605,39.3584519 314.990421,38.5802109 C315.770571,37.8065964 317.031988,37.8065964 317.812138,38.5802109 Z"
                        id="left-arrow"
                        transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div
            onClick={clickRightArrow}
            className="w-8 h-8 p-2 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          >
            <svg
              onClick={clickRightArrow}
              viewBox="0 -6.5 38 38"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>left-arrow</title> <desc>Created with Sketch.</desc>{" "}
                <g
                  id="icons"
                  stroke-width="3.8"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="ui-gambling-website-lined-icnos-casinoshunter"
                    transform="translate(-1641.000000, -158.000000)"
                    fill="#1C1C1F"
                    fill-rule="nonzero"
                  >
                    {" "}
                    <g id="1" transform="translate(1350.000000, 120.000000)">
                      {" "}
                      <path
                        d="M317.812138,38.5802109 L328.325224,49.0042713 L328.41312,49.0858421 C328.764883,49.4346574 328.96954,49.8946897 329,50.4382227 L328.998248,50.6209428 C328.97273,51.0514917 328.80819,51.4628128 328.48394,51.8313977 L328.36126,51.9580208 L317.812138,62.4197891 C317.031988,63.1934036 315.770571,63.1934036 314.990421,62.4197891 C314.205605,61.6415481 314.205605,60.3762573 314.990358,59.5980789 L322.274264,52.3739093 L292.99947,52.3746291 C291.897068,52.3746291 291,51.4850764 291,50.3835318 C291,49.2819872 291.897068,48.3924345 292.999445,48.3924345 L322.039203,48.3917152 L314.990421,41.4019837 C314.205605,40.6237427 314.205605,39.3584519 314.990421,38.5802109 C315.770571,37.8065964 317.031988,37.8065964 317.812138,38.5802109 Z"
                        id="left-arrow"
                        transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden gap-12 mt-5">
        {categoryArr.map((category) => {
          return (
            <div className="flex rounded-md justify-center items-center duration-300" 
            style={{
              transform : `translateX(-${slide*95}%)`
            }}
            >
              <div className="w-28">
                <div className="p-4 rounded-lg bg-white">
                  <img
                    src={category.img}
                    alt=""
                    className="aspect-square object-cover mx-auto"
                  />
                </div>
                <h1 className="min-h-20 text-center font-medium text-base">{category.tag}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
