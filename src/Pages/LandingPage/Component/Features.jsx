import React from "react";
import Scrollable from "./Scrollable";
import BlurIn from "../../../Components/blur-in";
import { CiLink } from "react-icons/ci";

import { motion, useScroll, useTransform } from "framer-motion";
export default function Features() {
  return (
    <section className="md:mx-[rem] lg:mx-[8rem] flex flex-col flex-wrap gap-12 items-center justify-center mt-[5rem]">
      <h1 className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold tracking-[-2.4px] text-black text-balance py-[24px]">
        Features{" "}
      </h1>{" "}
      <div className="flex flex-wrap items-center justify-center gap-12 text-[#7D7D8A]">
        <div className="bg-[#F7F8FA] border-[#EAEBEF] mx-2 sm:h-[400px] sm:w-[350px] rounded-xl border shadow-sm relative">
          <img src="./Features/1.svg" alt="" />
          <div className="px-[34px] py-[16px]">
            <p className="text-[#020210] font-bold">Create Templates</p>
            <p>
              Reply to messages quickly but personally? Create WhatsApp
              templates for different use cases.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F8FA] border-[#EAEBEF] mx-2 h-[400px] w-[350px] rounded-xl border shadow-sm">
          <img src="./Features/2.svg" alt="" />
          <div className="px-[34px] py-[16px]">
            <p className="text-[#020210] font-bold">Create Templates</p>
            <p>
              Reply to messages quickly but personally? Create WhatsApp
              templates for different use cases.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F8FA] border-[#EAEBEF] mx-2 h-[400px] w-[350px] rounded-xl border shadow-sm">
          <img src="./Features/3.svg" alt="" />
          <div className="px-[34px] py-[16px]">
            <p className="text-[#020210] font-bold">Create Templates</p>
            <p>
              Reply to messages quickly but personally? Create WhatsApp
              templates for different use cases.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F8FA] border-[#EAEBEF] mx-2 h-[400px] w-[350px] rounded-xl border shadow-sm">
          <img src="./Features/4.svg" alt="" />
          <div className="px-[34px] py-[16px]">
            <p className="text-[#020210] font-bold">Create Templates</p>
            <p>
              Reply to messages quickly but personally? Create WhatsApp
              templates for different use cases.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F8FA] border-[#EAEBEF] mx-2 h-[400px] w-[350px] rounded-xl border shadow-sm">
          <img src="./Features/5.svg" alt="" />
          <div className="px-[34px] py-[16px]">
            <p className="text-[#020210] font-bold">Create Templates</p>
            <p>
              Reply to messages quickly but personally? Create WhatsApp
              templates for different use cases.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F8FA] border-[#EAEBEF] mx-2 h-[400px] w-[350px] rounded-xl border shadow-sm relative">
          <img src="./Features/6.svg" alt="" />
          <div className="px-[34px] py-[16px]">
            <p className="text-[#020210] font-bold">Create Templates</p>
            <p>
              Reply to messages quickly but personally? Create WhatsApp
              templates for different use cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveOneClick() {
  return (
    <article className="h-full w-full bg-[white] shadow-lg hover:shadow-xl  rounded-xl p-8 group relative overflow-hidden   ">
      <h1 className="text-customBlack font-semibold text-[20px]">
        Live In One Click
      </h1>
      <p className="text-[16px] text-[rgb(187_187_187)]">
        Share your entire calendar as a public review link so anyone can follow
        along
      </p>
      <div className="rounded-3xl flex gap-2 items-center justify-center bg-customBlack absolute text-[white] px-4 py-2">
        <CiLink />
        Go Live
      </div>
      <img
        src="sample.png"
        alt=""
        className="absolute -left-10 -bottom-10 transition duration-300 ease-linear group-hover:translate-x-[50rem] "
      />
    </article>
  );
}

function FreelanceKit() {
  return (
    <article className="h-full w-full bg-[white] shadow-lg hover:shadow-xl transition rounded-xl p-8 group relative"></article>
  );
}

function Tools() {
  return (
    <article className="relative flex justify-end items-center group border-dashed border-[3px] rounded-xl hover:bg-[#edeff9] border-[rgb(187_187_187)] h-full hover:border-[#6777ca]">
      <img
        src="download (2).png"
        alt="sample"
        className="h-36  absolute left-0 -top-2 group-hover:scale-105 group-hover:-rotate-12 transition ease-linear"
      />
      <img
        src="download (3).png"
        alt=""
        className="h-36 -top-3 left-[3rem] absolute z-10 group-hover:scale-110 transition ease-linear"
      />
      <img
        src="download (1).png"
        alt=""
        className="h-36 -top-2 left-[6rem] absolute z-0 group-hover:scale-105 group-hover:rotate-12 transition ease-linear"
      />
      <p className="font-semibold text-[20px] text-customBlack px-4">
        Sync To All You Faviourtie tools
      </p>
    </article>
  );
}
