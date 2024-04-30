"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";

const poopins = Poppins({
  weight: "700",
  subsets: ["latin"],
  style: "italic",
});
const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});
function Business() {
  const contentContainer = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const ContentTimeline = gsap.timeline({ paused: true });
    const leftContent =
      contentContainer.current?.querySelector(".left-content");
    const RightContent =
      contentContainer.current?.querySelector(".right-content");

    if (leftContent && RightContent) {
      ContentTimeline.from(
        leftContent,
        {
          x: "100vw",
          duration: 2,
          ease: "power3.out",
          stagger: 0.2,
          y: "40vw",
          opacity: 0,
        },
        0,
      ).from(
        RightContent,
        {
          x: "-100vw",
          duration: 2,
          ease: "power3.out",
          stagger: 0.2,
          y: "40vh",
          opacity: 0,
        },
        0,
      );
    }

    const contentTrigger = ScrollTrigger.create({
      trigger: contentContainer.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => ContentTimeline.play(),
    });

    return () => {
      contentTrigger.kill();
    };
  });
  return (
    <div className="relative -mt-2 overflow-hidden">
      <div className="h-screen border-b border-gray-800/80">
        <Image
          fill
          src={"/assets/adha.png"}
          className="h-full w-full object-cover"
          alt="Background"
        ></Image>
        <div
          ref={contentContainer}
          className="absolute left-0 top-0 flex h-full w-full flex-col  items-center px-12 xl:px-52   2xl:px-[750px]"
        >
          <div
            className={` left-content mt-6 text-center text-4xl font-medium text-white md:text-7xl 2xl:text-8xl ${raleway.className}`}
          >
            <span className={`font-bold italic ${poopins.className}`}>qid</span>{" "}
            for{" "}
            <span className="bg-gradient-to-br from-gray-100/10 to-white bg-clip-text text-transparent">
              business
            </span>
          </div>
          <div
            className={`right-content mt-4 text-center  text-xl font-medium text-white md:text-3xl ${raleway.className}`}
          >
            manage all your IDs with one QR
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
