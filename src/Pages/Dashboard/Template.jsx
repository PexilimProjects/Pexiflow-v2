import React from "react";
import Navbar from "./Navbar";
import {
  EllipsisVertical,
  ChevronRight as ChevronRightIcon,
  CheckIcon,
} from "lucide-react";
import { AnimatedSubscribeButton } from "../../Components/AnimatedButton";

export default function Template() {
  return (
    <section className="rounded-xl dark:bg-[#1A1D1F] bg-white p-[28px_24px] mr-11 my-[20px]">
      <Navbar />
      <div className="flex flex-wrap gap-[24px] p-[24px]">
        <Templates />
        <Templates />
        <Templates />
        <Templates />
      </div>
    </section>
  );
}

const Templates = () => {
  return (
    <div>
      <div className="bg-Grey flex flex-col gap-4 dark:bg-[#1A1D1F] dark:border-0 border-TextGrey rounded-[24px] border h-[16rem] w-[20rem] p-[24px]">
        <div>
          <div className="flex items-center justify-between text-[20px] font-semibold">
            Portfolio{" "}
            <div className="">
              <AnimatedSubscribeButton
                buttonColor="#000000"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                  <span className="group inline-flex items-center">
                    Apply{" "}
                    {/* <ChevronRightIcon className="transition-transform duration-300 group-hover:translate-x-1" /> */}
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 " />
                    Applied{" "}
                  </span>
                }
              />
            </div>
          </div>
          {/* <p className="text-[#616161] text-[12px] font-semibold hover:underline cursor-pointer">
            Preview
          </p> */}
        </div>
        <img src="Rectangle 2.png" alt="" />
      </div>
    </div>
  );
};
