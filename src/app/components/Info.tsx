"use client";
import { FaChevronRight } from "react-icons/fa";
import { Raleway } from "next/font/google";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});

const raleway400 = Raleway({
  subsets: ["latin"],
  weight: "400",
});
gsap.registerPlugin(ScrollTrigger);

function Info() {
  const contentContainer = useRef<HTMLDivElement | null>(null);
  const BaseElement = useRef<HTMLDivElement | null>(null);
  const InfoElement = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const containerTl = gsap.timeline({ paused: true });
    const baseElementTl = gsap.timeline({ paused: true });
    const InfoElemetTl = gsap.timeline({ paused: true });
    const ShareElmentTl = gsap.timeline({ paused: true });
    const textContainer =
      contentContainer.current?.querySelector(".text-container");
    const button = contentContainer.current?.querySelector(
      ".create-account-button",
    );
    const image = contentContainer.current?.querySelector(".mobile-image");
    const textElement = BaseElement.current?.querySelector(".text-ele");
    const ManageElement = BaseElement.current?.querySelector(".managing-ele");
    const InfotextEle = InfoElement.current?.querySelector(".info-element");
    const paratextEle = InfoElement.current?.querySelector(".para-element");
    const sharetextEle = InfoElement.current?.querySelector(".sharetext");
    const shareparaText = InfoElement.current?.querySelector(".sharepara");

    if (textContainer && button && image && textElement && ManageElement) {
      containerTl
        .from(textContainer, { x: "-100vw", duration: 2, ease: "power3.out" })
        .from(
          button,
          { x: "-100vw", duration: 2, ease: "power3.out", stagger: 0.2 },
          0,
        )
        .from(
          image,
          { x: "100vw", duration: 2, ease: "power3.out", stagger: -0.2 },
          0,
        );
    }

    if (textElement && ManageElement) {
      baseElementTl
        .from(
          textElement,
          {
            x: "-100vw",
            duration: 2,
            ease: "power3.out",
            stagger: 0.2,
          },
          0,
        )
        .from(
          ManageElement,
          {
            y: "100vw",
            duration: 2,
            ease: "power3.out",
            stagger: -0.2,
          },
          0,
        );
    }

    if (InfotextEle && paratextEle) {
      InfoElemetTl.from(
        InfotextEle,
        {
          y: "-50vh",
          duration: 2,
          ease: "power3.inOut",
          stagger: -0.2,
          opacity: 0,
        },
        0,
      ).from(
        paratextEle,
        { y: "100vh", duration: 2, ease: "power3.inOut", stagger: -0.2 },
        0,
      );
    }

    if (sharetextEle && shareparaText) {
      ShareElmentTl.from(
        sharetextEle,
        { y: "100vh", duration: 2, ease: "power3.inOut", stagger: -0.2 },
        0,
      ).from(
        shareparaText,
        { y: "100vh", duration: 2, ease: "power3.inOut", stagger: -0.2 },
        0,
      );
    }
    const containerTrigger = ScrollTrigger.create({
      trigger: contentContainer.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => containerTl.play(),
    });

    const baseElementTrigger = ScrollTrigger.create({
      trigger: BaseElement.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => baseElementTl.play(),
    });

    const InfoElementTrigger = ScrollTrigger.create({
      trigger: InfoElement.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => InfoElemetTl.play(),
    });

    const ShareElementTrigger = ScrollTrigger.create({
      trigger: InfoElement.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => ShareElmentTl.play(),
    });

    return () => {
      containerTrigger.kill();
      baseElementTrigger.kill();
      InfoElementTrigger.kill();
      ShareElementTrigger.kill();
    };
  });

  return (
    <div
      className="bg bg-repeat "
      style={{ backgroundImage: `url('assets/bg2.png')` }}
    >
      <div className="h-full">
        <div className="h-max  w-full overflow-hidden  bg-black/70 px-6 xl:px-32 2xl:px-[750px]  ">
          <div className=" md:flex " ref={contentContainer}>
            <div className="mb-52 flex flex-col justify-center text-white md:w-1/2 md:pt-0">
              <div
                className={`text-5xl font-bold md:text-7xl ${raleway.className} text-container`}
              >
                <span
                  className={` bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent`}
                >
                  Secure
                </span>
                , easy, and always with you.
              </div>
              <div className="create-account-button mt-6 flex w-max cursor-pointer items-center justify-center rounded-full bg-white px-6 py-4 text-xl font-medium text-black">
                Create free Account{" "}
                <FaChevronRight className="ml-2 rounded-full bg-black p-1 text-white" />
              </div>
            </div>
            <div className="mobile-image md:w-1/2">
              <img
                src={"/assets/mobile.png"}
                className="z-20 pt-10"
                alt="mobile"
              />
            </div>
          </div>
          <div className="pb-10 md:flex" ref={BaseElement}>
            <div className=" -mt-10 mb-10 flex space-x-3 md:hidden lg:ml-14 xl:ml-48">
              <div className="shadow-top-left  -mt-14 h-min w-1/2 rounded-3xl border border-white/40 bg-[#121e13] p-4">
                <div className="py-4 text-center text-2xl text-white sm:text-5xl">
                  Managing
                </div>
              </div>

              <div
                className="shadow-bottom-left h-min w-1/2 rounded-3xl border border-white/40 bg-[#1a1507] p-4"
                style={{
                  boxShadow:
                    "-16px 49px 68px -18px rgba(226, 186.00000000000014, 0, 0.18)",
                }}
              >
                <div className="py-4 text-center text-2xl text-white sm:text-5xl">
                  Sharing
                </div>
              </div>
            </div>

            <div
              className={`text-[rgba(255, 255, 255, 0.82) ] text-ele  text-3xl font-bold text-white md:w-[40%] md:text-5xl
              xl:text-[3.4375em] ${raleway.className}`}
            >
              Two Base elements of Identity ecosystem
            </div>
            <div className="managing-ele hidden w-2/3 space-x-3 md:flex lg:ml-14 xl:ml-52">
              <div
                className="shadow-top-left -mt-6 h-min   rounded-3xl   border-[1px] border-solid border-[#FFFFFF30]  bg-[#121e13] p-4 "
                style={{
                  boxShadow:
                    "-2px -13px 99px -29px rgba(77.54021739130434, 225.75, 0, 0.34)",
                }}
              >
                <div className=" pb-1 text-5xl font-semibold text-white/40 ">
                  1
                </div>
                <div className="py-4 text-[2.5625em] leading-10 text-white">
                  Managing
                </div>
                <div className={`pb-2 text-[#7a7a7a] ${raleway400.className}`}>
                  Consolidate all your IDs securely in one place with qid,
                  making them easily accessible whenever you need them
                </div>
              </div>

              <div
                className="shadow-bottom-left h-min rounded-3xl  border-[1px] border-solid border-[#FFFFFF30] bg-[#1a1507]/70 p-4"
                style={{
                  boxShadow:
                    "-16px 49px 68px -18px rgba(226, 186.00000000000014, 0, 0.18)",
                }}
              >
                <div className="pb-1 text-5xl font-bold text-white/40">2</div>
                <div className="py-4 text-[2.5625em] leading-10 text-white">
                  Sharing
                </div>
                <div className={`pb-2 text-[#7a7a7a] ${raleway.className}`}>
                  Experience lightning-fast and trackable ID sharing with qid,
                  ensuring seamless and efficient communication
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-2/12 flex-col ">
              <div className=" -ml-4 flex w-10 justify-center border-b pb-5">
                <div className="h-28 w-2 bg-gradient-to-b from-transparent to-[#93fb6f] md:h-20 "></div>
              </div>
              <div className=" -ml-4 mt-4 flex w-10 justify-center border-b pb-5">
                <div className="h-80 w-2 bg-gradient-to-b from-[#93fb6f]  via-green-500 to-orange-500 md:h-56 "></div>
              </div>
              <div className="  -ml-4  mt-4 flex w-10 justify-center pb-5">
                <div className="h-56 w-2 bg-gradient-to-b from-orange-500  to-transparent md:h-36 "></div>
              </div>
            </div>
            <div className="ml-4 lg:-ml-4" ref={InfoElement}>
              <div className="py-10">
                <div
                  className={`info-element text-3xl leading-10 text-white md:w-[500px] md:text-[2.500em] ${raleway.className}`}
                >
                  Your true identity,{" "}
                  <span className="bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent">
                    managed
                  </span>{" "}
                  with ease.
                </div>
                <div className="para-element pt-4 text-white/40">
                  With qid, managing your IDs has never been easier. You can
                  store and access all your IDs in one place, share them
                  securely with others, and even get them verified with just a
                  few clicks. Say goodbye to the hassle of carrying physical IDs
                  or struggling with tedious verification processes, and hello
                  to the convenience and simplicity of qid.
                </div>
              </div>

              <div className="py-10">
                <div
                  className={` text-3xl leading-10 text-white md:w-[600px] md:text-[2.50em] ${raleway.className}`}
                >
                  <span
                    className={`sharetext bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent `}
                  >
                    Share
                  </span>{" "}
                  your identity with ease, qid has got you covered!
                </div>
                <div className="sharepara pt-4 text-white/40">
                  Sharing IDs with qid is simple and convenient. Just add the ID
                  to your qid profile and share it with anyone, anytime,
                  anywhere. No need to carry physical IDs or worry about losing
                  them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
