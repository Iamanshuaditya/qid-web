"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Downloadapp = () => {
  const contentContainer = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const containerTl = gsap.timeline({ paused: true });
    const Store = contentContainer.current?.querySelector(".store");
    const Image = contentContainer.current?.querySelector(".img");

    if (Store && Image) {
      containerTl
        .from(
          Store,
          {
            x: "-100vw",
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.2,
            opacity: 0,
          },
          0,
        )
        .from(
          Image,
          {
            y: "100vw",
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.2,
            opacity: 0,
          },
          0,
        );
    }

    const ContainerTrigger = ScrollTrigger.create({
      trigger: contentContainer.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => containerTl.play(),
    });

    return () => {
      ContainerTrigger.kill();
    };
  });
  const classname = "w-full mb-1 hover:cursor-pointer";
  return (
    <div
      className="min-w-screen  flex flex-col items-center overflow-hidden"
      ref={contentContainer}
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-x-3 px-3 pb-8 pt-32 md:grid md:grid-cols-2 md:place-items-center md:px-4 md:pt-28">
        <div className=" store flex flex-grow flex-col gap-8">
          <div className="font-abc  text-4xl font-extrabold tracking-tight text-black md:text-6xl">
            Get the qid App
          </div>
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div className="flex w-full flex-col gap-3 py-4 md:w-3/5 md:px-3">
              <Link
                href={"https://apps.apple.com/us/app/qid-quick-id/id1629041779"}
              >
                {" "}
                <img
                  alt=""
                  className={classname}
                  src="assets/apple-download-2-1024x312.png"
                ></img>{" "}
              </Link>
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid"
                }
              >
                {" "}
                <img
                  alt=""
                  className={classname}
                  src="assets/gplay-diwn-2-1024x312.png"
                ></img>
              </Link>
            </div>
            <div className="w-full md:w-2/5">
              <img alt="" src="assets/qr-code-5-2.png"></img>
            </div>
          </div>
        </div>
        <div className="img w-full flex-grow ">
          <img
            alt=""
            className="h-full w-full"
            src="/assets/Asset-16.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Downloadapp;
