import React from "react";
import { Pencil } from "lucide-react";
import index from "../AdvanceProfile";
export default function Skills() {
  const skills = [
    "Figma",
    "Asana",
    "Ux Research",
    "Photoshop",
    "Project Planning",
  ];
  return (
    <div className="dark:bg-[#24292E] dark:border-0 dark:text-white p-[12px] rounded-[8px] border border-Grey200 w-[20rem]">
      <div className="flex justify-between items-center self-stretch text-[16px] font-bold leading-[24px]">
        Skills
        <Pencil style={{ fontWeight: "normal" }} />
      </div>
      <div className="flex gap-[10px] flex-wrap mt-[10px]">
        {skills.map((skill,index) => (
          <Tab skill={skill} key={index}/>
        ))}
      </div>
    </div>
  );
}

function Tab({ skill }) {
  return (
    <div className="px-[18px] py-[8px] flex items-center justify-center rounded-[14px] border-TextGrey border">
      {skill}
    </div>
  );
}
