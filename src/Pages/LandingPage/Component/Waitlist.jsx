import React, { useState } from "react";

export default function Waitlist({WaitlistRef}) {
  const [showInput, setShowInput] = useState(false);
  const [animate, setAnimate] = useState(false); // New state for animation

  const handleClick = () => {
    setAnimate(true); // Start animation
    setTimeout(() => {
      setShowInput(true); // After animation, show input
    }, 400); // Adjust time to match your animation duration
  };

  return (
    <section className="bg-black py-16 mt-16 relative text-white" ref={WaitlistRef}>
      <img src="Waitlist.png" alt="" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold tracking-[-2.4px] text-white py-[24px]">
        Join the Waitlist Now
      </h1>
      {showInput ? (
        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 transform  mt-4 input-animate bg-white text-black px-4 py-2 text-lg rounded-xl">
          <input placeholder="Enter Your Email" type="text" className="bg-transparent outline-none" autoFocus />
          <button className="hover:bg-slate-200 px-2 py-1 rounded-lg">&rarr;</button>
        </div>
      ) : (
        <button
          className={`absolute top-[70%] left-1/2 -translate-x-1/2 transform  mt-4 button-animate ${
            animate ? "fade-out" : ""
          } bg-white rounded-lg py-2 px-4 text-lg text-black font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400`}
          onClick={handleClick}
        >
          Join the Waitlist &rarr;
        </button>
      )}
    </section>
  );
}
