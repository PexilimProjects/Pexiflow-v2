import React from "react";

export default function Hero() {
  return (
    <section className="overflow-x-hidden md:mx-[168px] px-4 py-[160px] flex flex-col justify-center items-center relative">
      <img
        src="PointerArrow.svg"
        alt=""
        className="hidden sm:flex absolute top-[15%] left-[18%]"
      />
      <h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold tracking-[-2.4px] text-black text-balance py-[24px]">
        Transform Your Marketing{" "}
        <span className="bg-gradient-to-r from-[#A83AFF] to-[#FF8A00] inline-block text-transparent bg-clip-text">
          with Proactiv
        </span>
      </h1>
      <span className="text-balance text-center text-xs md:text-sm lg:text-base leading-[28px] text-[#2d2929] pt-4">
        Automate Campaigns, Engage Audiences, and Boost
      </span>
      <span className="text-balance text-center text-xs md:text-sm lg:text-base  text-[#2d2929] pb-4 ">
        Lead Generation with Our All-in-One Marketing Solution
      </span>
      <img
        src="underline.png"
        alt=""
        className="hidden sm:flex absolute top-[62%] right-[20%] w-[15%]"
      />

      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A83AFF,#FF8A00_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
          Join the Waitlist
        </span>
      </button>
    </section>
  );
}
