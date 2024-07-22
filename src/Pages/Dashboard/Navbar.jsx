import React from "react";
import { AppWindowMac,Rocket,Brush } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate();

  return (
    <div className="flex justify-between items-stretch self-center">
      <div className="flex gap-3"> 
        <div onClick={()=>navigate("/")} className="cursor-pointer flex p-[12px_24px] justify-center items-start gap-2 dark:bg-white dark:text-[#1A1D1F]  text-white bg-slate-700 rounded-lg">
          <AppWindowMac />
          Profile
        </div>
        <div onClick={()=>navigate("/templates")} className="cursor-pointer flex p-[12px_24px] justify-center items-start gap-2  rounded-lg dark:bg-[#454C52] bg-Grey dark:text-[#9EA5AD] text-TextGrey">
          <Brush />
          Template
        </div>
      </div>
      <div className="border flex p-[12px_24px] justify-center items-start gap-2 text-Success dark:bg-Success dark:text-white font-semibold bg-transparent border-Success rounded-lg">
        <Rocket />
        Publish Site
      </div>
    </div>
  );
}
