import React from "react";
import { CiMail,CiLinkedin } from "react-icons/ci";


export default function Footer() {
  return (
    <section className="text-balance flex-col flex items-center font-medium justify-center  text-[#ffffff66] py-[8rem] px-[4rem] rounded-[20px_20px_0px_0px]">
      <footer className="flex items-center justify-start gap-[20%] w-full mt-[2rem]">
        <div className="flex flex-col ">
          <p className="text-white mb-4">Pexiflow</p>
          <p className="mb-2">Be The Professional</p>
          <p>Join the Future</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-white mb-4">Links</p>
          <p className="mb-2">Home</p>
          <p>Features</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-white mb-4">Company</p>
          <p className="mb-2">About</p>
          <p>Contact</p>
        </div>
      </footer>
      <div className="flex items-center justify-between w-full mt-[6rem] text-white">
        <p>© 2023 Pexilium</p>
        <div className="flex items-center gap-2">
          <p><CiMail size={30}/></p>
          <p><CiLinkedin size={30}/></p>
        </div>
      </div>
    </section>
  );
}
