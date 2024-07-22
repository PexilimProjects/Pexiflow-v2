import React from "react";

export default function Scrollable({ img, heading, description, Component }) {
  return (
    <div className="flex ml-[10rem] text-white w-full">
      {img ? (
        <div className="flex items-center justify-center  bg-[#3e51f6] rounded-xl">
          <img src={img} alt="" className="h-[150%]" />
        </div>
      ) : (
        <div></div>
        // <Component />
      )}
      <div className="flex flex-col justify-end items-left font-medium text-[28px] text-balance pl-10 pb-10 ">
        <h6>{heading}</h6>
        <p className="text-[#a0a0a1] text-[20px]">{description}</p>
      </div>
    </div>
  );
}
