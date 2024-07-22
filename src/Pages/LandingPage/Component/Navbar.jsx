import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({scroll}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="overflow-x-hidden mx-1 sm:mx-[4rem] lg:mx-[7.5rem] mt-4 flex justify-between items-center list-none px-[16px] text-[16px] bg-white">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="flex items-center gap-2 font-bold">
          <img src="logo.svg" alt="Logo" className="-[1px]"/>
        </div>
        <div className="lg:flex items-center hidden">
          <li className="px-[16px] py-[8px]">Features</li>
          <li className="px-[16px] py-[8px]">Pricing</li>
          <li className="px-[16px] py-[8px]">Blog</li>
          <li className="px-[16px] py-[8px]">Contact</li>
        </div>
      </div>
      <div className="flex items-center md:gap-3">
        <button onClick={()=>scroll()} className="text-[12px] sm:text-[16px] rounded-md bg-[#262626] text-[#fafafa] flex items-center justify-center font-medium p-[8px_16px] opacity-80 backdrop-blur">
          Join Beta
        </button>
        <div className="p-2 flex items-center justify-center lg:hidden cursor-pointer" onClick={toggleMenu}>
          <img src="menu.svg" alt="Menu" />
        </div>
      </div>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 -right-44 w-full bg-white flex flex-col items-center lg:hidden z-50" 
        >
          <li className="px-[16px] py-[8px]">Features</li>
          <li className="px-[16px] py-[8px]">Pricing</li>
          <li className="px-[16px] py-[8px]">Blog</li>
          <li className="px-[16px] py-[8px]">Contact</li>
        </motion.ul>
      )}
    </nav>
  );
}
