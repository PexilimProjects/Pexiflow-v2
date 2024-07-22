import React from "react";
import { Plus, EllipsisVertical } from "lucide-react";
export default function Projects() {
  return (
    <div className="flex flex-wrap p-[24px] gap-[24px] ">
      <Project />
      <div className="flex flex-col items-center justify-center border border-TextGrey rounded-[24px] h-[16rem] w-[20rem]">
        <div className="rounded-full bg-Gray700 text-white p-2">
          <Plus />
        </div>
        Add Project/Casestudy
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="flex flex-col gap-4 dark:bg-[#1A1D1F] dark:border-0 border-TextGrey rounded-[24px] border h-[16rem] w-[22rem] p-[24px]">
      <div>
        <div className="flex items-center justify-between text-[20px] font-semibold">
          Health Care Case Study
          <EllipsisVertical />
        </div>
        <p className="text-[#616161] text-[12px] font-semibold">UI/UX</p>
      </div>
      <img src="Rectangle 2.png" alt="" />
    </div>
  );
}
