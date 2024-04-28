"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Poppins } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function Hero() {
  useGSAP(() => {
    gsap.to("#heading", { opacity: 0.8, delay: 0.5, y: -10 });
    gsap.to("#button", { opacity: 1, delay: 0.8, y: 1 });
  }, []);
  return (
    <div className="relative">
      <div className="h-screen border-b border-gray-800/80">
        <Image
          fill
          src={"/assets/bg-main.png"}
          className="h-full w-full object-cover"
          alt="Background"
        ></Image>
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-center  px-12 text-[#e9e7e7] md:items-center xl:px-32  2xl:px-[750px] ">
          <h1
            className={`mb-3 text-left text-5xl font-bold text-white opacity-0 md:text-center md:text-7xl ${raleway.className}`}
            id="heading"
          >
            every person deserves to know and be known by their true identity
          </h1>
          <div
            className={` cursor-pointer rounded-full bg-white px-10 py-4 text-xl font-medium text-black opacity-0 ${poppins.className}`}
            id="button"
          >
            Download qid
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
