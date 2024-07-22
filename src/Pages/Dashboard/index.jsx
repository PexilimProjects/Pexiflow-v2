import React from "react";
import Navbar from "./Navbar";
import BasicProfile from "./Profile/BasicProfile/Index";
import AdvanceProfile from "./Profile/AdvanceProfile/index";

export default function Index() {
  return (
    <div className="rounded-xl dark:bg-[#1A1D1F] bg-white p-[28px_24px] mr-11 my-[20px]">
      <Navbar />
      <div className="mt-[24px] flex gap-[28px] ">
        <BasicProfile data={data}/>
        <AdvanceProfile />
      </div>
    </div>
  );
}

const data = {
  name: "Amira Singh",
  post: "Product Designer",
  img: "test.png",
  bio: "I am Amira Singh, a product designer driven by a passion for crafting user-centric experiences that seamlessly blend form and function. With a keen eye for detail and a creative approach to problem-solving, I specialize in designing intuitive interfaces and products that enhance user satisfaction and usability.",
  skills: ["Figma", "Asana", "Ux Research", "Photoshop", "Project Planning"],
};
