"use client";
import { ReactNode, useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Support = () => {
  const contentContainer = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const containerTl = gsap.timeline({ paused: true });
    const contactUs = contentContainer.current?.querySelector(".contactus");
    const Form = contentContainer.current?.querySelector(".form");
    if (contactUs && Form) {
      containerTl
        .from(
          contactUs,
          {
            x: "-100vw",
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            opacity: 0,
          },
          0,
        )
        .from(
          Form,
          {
            x: "100vw",
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            opacity: 0,
          },
          0,
        );

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
    }
  }, []);
  return (
    <>
      <div
        ref={contentContainer}
        className="min-w-screen overflow-hidden   bg-[url(https://oneqid.com/wp-content/uploads/2023/09/grid-for-video.png)] bg-contain bg-center"
      >
        <div className="h-full w-full bg-black/80 px-6">
          <div className="font-abc grid min-h-screen  max-w-7xl grid-cols-1 place-items-center text-white md:grid-cols-2   md:gap-x-8 md:px-16 lg:mx-auto">
            <div className="contactus col-span-1 flex w-11/12 flex-col gap-6 pt-32">
              <div className="text-5xl font-semibold text-white md:text-7xl">
                Contact Us
              </div>
              <div className="text-2xl font-semibold leading-tight text-stone-300/90">
                Discover Qid – Your Partner in Secure Identity Management
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-100 ">
                <MdOutlineMail className="h-7 w-7" />
                contact@oneqid.com
              </div>
              <div className="font-abc flex items-center gap-2 text-lg font-semibold text-gray-100">
                <FaPhoneAlt className="h-6 w-5" />
                <div className="font-abc">+91 960 950 849 0</div>
              </div>
              <hr className="my-2 w-3/4 md:px-44"></hr>
              <div className="text-3xl font-semibold  tracking-wide text-blue-400 md:text-3xl">
                Trusted by 25,000+ Users
              </div>
            </div>
            <div className="form col-span-1 w-full px-1 py-6 md:pt-24">
              <div className="w-full gap-3 rounded-[24px] border-[1px] border-stone-500 bg-black/60 p-6 md:w-11/12  md:p-10 ">
                <InputBox classname="border-b-[1px] border-stone-500 bg-transparent w-full   py-2 outline-none">
                  Name <span className="text-red-500">*</span>
                </InputBox>
                <div className="flex w-full flex-col gap-3 md:flex-row">
                  <InputBox classname="border-b-[1px] border-stone-500 bg-transparent w-full md:w-11/12 outline-none p-3">
                    Phone Number{" "}
                  </InputBox>
                  <InputBox classname="border-b-[1px] border-stone-500 bg-transparent w-full outline-none   p-3">
                    Email <span className="text-red-500">*</span>
                  </InputBox>
                </div>
                <InputBox classname="border-b-[1px] border-stone-500 bg-transparent w-full  outline-none  p-3">
                  Message <span className="text-red-500">*</span>
                </InputBox>
                <div className="flex flex-col md:flex-row  md:justify-end">
                  <button
                    type="button"
                    className="my-4 rounded-full bg-white  px-10 py-4 font-semibold text-black hover:bg-blue-400 hover:text-white"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function InputBox({
  classname,
  children,
}: {
  classname: string;
  children: ReactNode;
}) {
  return (
    <div className="my-2.5">
      <label className="font-abc text-white/70">{children}</label>
      <input aria-label="a" className={classname}></input>
    </div>
  );
}
export default Support;
