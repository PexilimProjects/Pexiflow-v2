import React from "react";
import Name from "./Name";
import Bio from "./Bio";
import Skills from "./Skills";
import Socials from "./Socials";

export default function Index({data}) {
  return (
    <div className="flex flex-col gap-[24px] ">
      <Name name={data.name} post={data.post} img={data.img}/>
      <Bio />
      <Skills />
      <Socials />
    </div>
  );
}
