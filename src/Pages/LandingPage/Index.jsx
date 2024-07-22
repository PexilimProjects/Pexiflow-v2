import { useState, useRef } from "react";
import Navbar from "./Component/Navbar";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Hero from "./Component/Hero";
import DotPattern from "../../Components/dot-pattern";
import { cn } from "../../utils/cn";
import Arrow1 from "../../Assets/arrow1.svg";
import Arrow2 from "../../Assets/arrow2.svg";
import Arrow3 from "../../Assets/arrow3.svg";
import { BorderBeam } from "../../Components/border-beam";
import CompareTable from "./Component/CompareTable";
import Waitlist from "./Component/Waitlist";
import Features from "./Component/Features";
import Testimonials from "./Component/Testimonials";
import Footer from "./Component/Footer";

export default function Index() {
  const WaitlistRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (scrollYProgress.get() < 0.05) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });
  const slowScrollProgress = useTransform(scrollYProgress, [0, 1], [0, 4]);

  // Create motion values for each arrow
  const arrow1Y = useTransform(slowScrollProgress, [0, 1], [0, 300]);
  const arrow1X = useTransform(slowScrollProgress, [0, 1], [0, 600]);

  const arrow2X = useTransform(slowScrollProgress, [0, 1], [0, -500]);
  const arrow2Y = useTransform(slowScrollProgress, [0, 1], [0, 300]);

  const arrow3Y = useTransform(slowScrollProgress, [0, 1], [0, 320]);
  const arrow3X = useTransform(slowScrollProgress, [0, 1], [0, -450]);

  const horizontalRef = useRef(null);

  const { scrollYProgress: horizontalScrollProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(horizontalScrollProgress, [0, 1], ["0%", "-500%"]);

  const handleScrollToRef = () => {
    if (WaitlistRef.current) {
      WaitlistRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center flex-col overflow-x-clip">
      <Navbar scroll={handleScrollToRef} />
      <motion.img
        src={Arrow1}
        alt=""
        style={{ y: arrow1Y, x: arrow1X }}
        initial={{ top: 120, left: 40 }}
        className="absolute hidden sm:flex"
      />
      <motion.img
        src={Arrow2}
        alt=""
        style={{ x: arrow2X, y: arrow2Y }}
        initial={{ top: 200, right: 100 }}
        className="absolute hidden sm:flex"
      />
      <motion.img
        src={Arrow3}
        alt=""
        style={{ y: arrow3Y, x: arrow3X }}
        initial={{ top: 120, right: 40 }}
        className="absolute hidden sm:flex"
      />
      <Hero />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />

      <section className="flex items-center justify-center mt-10 relative  w-full rounded-2xl overflow-hidden">
        <div className="relative w-[80%] rounded-2xl bg-gradient-to from-[#000000] from-10% to-[#000000]/100">
          <div className="absolute h-[40vh] md:h-[60vh] 2xl:h-[80vh] w-[40vw] md:w-[60vw] 2xl:w-[150vh] rounded-[20rem] opacity-20 backdrop-blur-[10vh] blur-[10vh] -z-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#A83AFF] to-[#A83AFF]"></div>{" "}
          <img src="website.svg" alt="" className=" rounded-2xl" />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </section>
      <CompareTable />
      <Features />
      <div className="bg-black mt-16">
        <Testimonials />
        <Waitlist ref={WaitlistRef} />
        <Footer />
      </div>
    </div>
  );
}
