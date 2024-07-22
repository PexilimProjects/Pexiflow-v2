import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
export default function Main() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [theme]);
  
    const handleSwithcTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
  
  return (
    <div
      className={`grid grid-rows-[10vh_90vh] grid-cols-[17rem_1fr] dark:bg-[#202327] bg-Grey`}
    >
      <Navbar toggleTheme={handleSwithcTheme} theme={theme} />
      <Sidebar />
      <Outlet/>
    </div>
  );
}
