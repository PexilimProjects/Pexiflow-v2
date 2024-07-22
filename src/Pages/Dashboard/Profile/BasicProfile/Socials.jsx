import React from "react";
import { Pencil } from "lucide-react";

export default function Socials() {
  return (
    <div className="dark:bg-[#24292E] dark:border-0 dark:text-white p-[12px] rounded-[8px] border border-Grey200 w-[20rem]">
      <div className="flex justify-between items-center self-stretch text-[16px] font-bold leading-[24px]">
        Socials
        <Pencil style={{ fontWeight: "normal" }} />
      </div>
      <div className="mt-[12px] flex gap-3 flex-wrap">
        <img src="simple-icons_x.svg" alt="" />
        <img src="skill-icons_instagram.svg" alt="" />
        <img src="skill-icons_linkedin.svg" alt="" />
      </div>
    </div>
  );
}
