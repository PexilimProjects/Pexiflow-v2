import React from "react";
import { Upload, X } from "lucide-react";

export default function Popup({ onClose, Component }) {
  return (
    <>
      <div className="absolute bg-black h-screen w-screen top-0 left-0 right-0 opacity-20 blur-3xl backdrop-blur-xl "></div>
      <div className="opacity-100 backdrop-blur-lg shadow-2xl overflow-y-scroll p-4 flex flex-col absolute rounded-lg h-[60vh] w-[30vw]  bg-white m-auto left-0 right-0 top-0 bottom-0  border border-TextGrey">
        <div className="flex items-center justify-end  p-1 rounded-full">
          <div onClick={() => onClose()} className="cursor-pointer">
            <X />
          </div>
        </div>
        {Component}
      </div>
    </>
  );
}
