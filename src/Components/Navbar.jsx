import React from "react";
import { MailOpen, ChevronDown, MoonStar, Sun, Bell } from "lucide-react";
import LogoLight from "../Assets/Logo Light.svg";
import LogoDark from "../Assets/Logo Dark.svg";
// import { NavLink } from "react-router-dom";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="dark:text-white flex items-center justify-between py-[16px] px-[40px] col-span-2 row-span-1">
      <img
        src={theme == "light" ? LogoLight : LogoDark}
        alt=""
        className="w-[8%]"
      />
      <div className="gap-[24px] flex items-center justify-center">
        {/* <NavLink to="/inbox"> */}
          <div className=" py-[12px] px-[20px]  flex items-center justify-center dark:bg-[#1A1D1F] bg-[white] rounded-md">
            <MailOpen className="dark:text-white text-[#454c52]" />
          </div>
        {/* </NavLink> */}
        <div className="dark:bg-[#1A1D1F] py-[4px] px-[20px] flex items-center justify-center gap-4 bg-[white] rounded-md">
          <div className="rounded-full h-[32px] w-[32px]">
            <img
              src="
          https://s3-alpha-sig.figma.com/img/e2a0/edb6/9d7fc38659a5c982c9dc7148c1dbdacd?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oic-c7kjB-lA369~GpUjYXwrEUHaVtVREfkTMMbbx2jYA2yAHaHyYUTm~ecJYlQoWjIqYlxO5OArwkGpt~kFypf7rYenJpYc8UdmjqnaYjaDsRkN0MdL8KbZYcYsLOP-IPvYFAfK4OQAJNd7-manyWdWdRozv8hmI8WDHR45eWUNVAcH3aaFmCCs75sZqLFT5pbcuzTrgi62I1Xy4DKmKg74J9mu6yqsoS~BjuEfQ2UhWLPCllHuL1uGqm4ZaWTuXayHXR23QWRYr3CdKIQ3OCsbODWKknojC4SW3m3i8AeGKnBRoQIGuYqdvVT3IygASviX6pY~KhXqYjLN2Datvw__"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[14px]">Amira Singh</p>
            <p className="text-Gradient1 text-[12px]">PRODUCT DESIGNER</p>
          </div>
          <div className="">
            <ChevronDown />
          </div>
        </div>

        <div className=" py-[12px] px-[20px]  flex items-center justify-center dark:bg-[#1A1D1F] bg-[white] rounded-md">
          <Bell className="dark:text-white text-[#454c52]" />
        </div>

        <div
          onClick={() => toggleTheme()}
          className="dark:bg-[#1A1D1F] cursor-pointer py-[12px] px-[20px] flex items-center justify-center bg-[white] rounded-md"
        >
          {theme === "light" ? (
            <MoonStar className="dark:text-white text-[#454c52]" />
          ) : (
            <Sun className="dark:text-white text-[#454c52]" />
          )}
        </div>
      </div>
    </nav>
  );
}
