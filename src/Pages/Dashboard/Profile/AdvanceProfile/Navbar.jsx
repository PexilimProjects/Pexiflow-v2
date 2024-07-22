import React from "react";
import { SquareStack, Newspaper,GraduationCap,Star } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [Selected, setSelected] = useState("Projects");
  useEffect(()=>{
    navigate(Selected.toLowerCase())
  },[Selected])

  return (
    <div className=" flex items-center content-center gap-[16px] self-stretch flex-wrap">
      <div
        onClick={() => setSelected("Projects")}
        className={`${
          Selected === "Projects"
            ? "dark:text-white text-Grey900 border-b-2 border-Grey900"
            : "dark:text-[#9EA5AD] text-TextGrey"
        } cursor-pointer py-[12px] px-[24px] flex items-center justify-start gap-[8px]  text-[16px] font-bold leading-[24px]`}
      >
        <SquareStack />
        Projects
      </div>
      <div
        onClick={() => setSelected("Experience")}
        className={`${
          Selected === "Experience"
            ? "dark:text-white text-Grey900 border-b-2 border-Grey900"
            : "dark:text-[#9EA5AD] text-TextGrey"
        } py-[12px] cursor-pointer px-[24px] flex  items-center justify-start gap-[8px]  text-[16px] font-bold leading-[24px]`}
      >
        <Newspaper />
        Experience
      </div>
      <div
        onClick={() => setSelected("Education")}
        className={`${
          Selected === "Education"
            ? "dark:text-white text-Grey900 border-b-2 border-Grey900"
            : "dark:text-[#9EA5AD] text-TextGrey"
        } py-[12px] px-[24px] flex cursor-pointer items-center justify-start gap-[8px]  text-[16px] font-bold leading-[24px]`}
      >
        <GraduationCap /> Education
      </div>
      <div
        onClick={() => setSelected("achivements")}
        className={`${
          Selected === "achivements"
            ? "dark:text-white text-Grey900 border-b-2 border-Grey900"
            : "dark:text-[#9EA5AD] text-TextGrey"
        } py-[12px] px-[24px] flex items-center cursor-pointer  justify-start gap-[8px]  text-[16px] font-bold leading-[24px]`}
      >
        <Star />
        Achievements
      </div>
    </div>
  );
}
