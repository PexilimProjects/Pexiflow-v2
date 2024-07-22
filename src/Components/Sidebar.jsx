import { useState } from "react";
import { House, Users, LaptopMinimal, Headphones } from "lucide-react";

export default function Sidebar() {
  const [Selected, setSelected] = useState("Dashboard");
  const TabsData = [
    { Icon: House, Title: "Dashboard" },
    { Icon: Users, Title: "Community" },
    { Icon: LaptopMinimal, Title: "Skill house" },
    { Icon: Users, Title: "Freelance Kit" },
  ];
  return (
    <aside className="sticky col-start-1 row-start-2 flex flex-col gap-3">
      <div className="dark:text-white flex flex-col mx-[32px] p-[12px] gap-[10px] items-start self-stretch dark:bg-[#1A1D1F] bg-[white] rounded-xl mt-4">
        <p className="text-base font-bold leading-6">Menu</p>
        {TabsData.map((tab, index) => (
          <Tabs
            key={index}
            Selected={Selected}
            setSelected={setSelected}
            Icon={tab.Icon}
            Title={tab.Title}
          />
        ))}
      </div>
        <div className="dark:text-white  dark:bg-[#1A1D1F] rounded-xl flex items-start self-stretch justify- gap-[1rem] p-[24px_34px] bg-white mx-[32px] cursor-pointer">
          <Headphones className="dark:text-white text-[#383f45]" />
          <span>Support</span>
        </div>
    </aside>
  );
}

function Tabs({ Selected, setSelected, Icon, Title }) {
  return (
    <div
      className={`rounded-lg ${
        Selected === Title ? "bg-Gradient" : ""
      } cursor-pointer`}
      onClick={() => setSelected(Title)}
    >
      <div
        className={`dark:bg-[#1A1D1F] bg-white m-[2px] flex items-center justify-center py-[12px] px-[24px] gap-[10px] rounded-lg`}
      >
        <Icon className="dark:text-white text-[#383f45]" />
        <span
          className={`${
            Selected === Title
              ? "font-semibold bg-Gradient text-transparent bg-clip-text"
              : ""
          }`}
        >
          {Title}
        </span>
      </div>
    </div>
  );
}
