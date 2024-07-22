import React from "react";
import { InfiniteMovingCards } from "../../../Components/infinite-moving-cards";
export default function Testimonials() {
  return (
    <div className=" relative h-full w-full  rounded-md flex flex-col mt-[8rem] mb-[10rem]  dark:bg-grid-white/[0.05] items-center justify-center  ">
      <h3 className="mb-8 text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl  2xl:text-8xl font-bold text-center bg-clip-text text-transparent text-white bg-black z-50">
        Early Endorsements
      </h3>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
// transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
const testimonials = [
  {
    quote:
    "This is exactly what we needed. Its like filling the gap that was present in the industry for so long. As a freelance writer, I used to show my work samples in a PDF format. Now, I can flaunt my website and convert more leads. Waiting for the big launch",
    name: "Shivani Jha",
    title: "Content Writer",
  },
  {
    quote:
      "I stumbled upon Pexiflow early on and was impressed by the concept. As a freelance designer, I needed a way to showcase my work without the hassle of traditional website building. Pexiflow offered a user-friendly solution to present myself professionally without investing. I'm glad I jumped on board early!",
    name: "Vivek Sharma",
    title: "UI Designer",
  },
  {
    quote: "Pexiflow is a welcome addition to the design and creative space. While still in its early stages, the platform shows great promise for offering a user-friendly and efficient way to build online portfolios. I am excited to see how Pexiflow develops and expands its features in the future.    ",
    name: "Aditi",
    title: "Tech Reviewer",
  },
];