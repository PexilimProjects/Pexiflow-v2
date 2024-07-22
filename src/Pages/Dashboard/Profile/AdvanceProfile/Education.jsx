import React from 'react'
import { Plus } from 'lucide-react';
export default function Education() {
  return (
    <div className="flex flex-col flex- p-[24px] gap-[24px] ">
      <Project />
      <div className="flex flex-col gap-4 items-center justify-center border border-TextGrey rounded-[24px] h-[10rem] w-full">
        <div className="rounded-full bg-Gray700 text-white p-2">
          <Plus />
        </div>
        Add Expirience
      </div>
    </div>  )
}

function Project() {
  return (
    <div className="dark:bg-[#1A1D1F] dark:border-0 text-justify leading-6   flex flex-col gap-1 border-TextGrey rounded-[24px] border  w-full p-[24px]">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[18px]">Frontent Developer</p>
        <span className="text-[14px] text-TextGrey">Full Time</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-[16px]">Pexilim</p>
        <p className="text-[14px] text-TextGrey">Feb 2022 - Present</p>
      </div>
      <span className="text-justify leading-6 mt-4">
        Worked as a fulltime designer with 2+ yera of experience leaded team of4
        Worked as a fulltime designer with 2+ yera of experience leaded team of4
        Worked as a fulltime designer with 2+ yera of experience leaded team of4
      </span>
    </div>
  );
}