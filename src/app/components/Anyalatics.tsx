"use client";
import { FaChevronRight } from "react-icons/fa";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Poppins, Raleway } from "next/font/google";
const raleway = Raleway({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});

const poopins = Poppins({
  weight: "700",
  subsets: ["latin"],
  style: "italic",
});

const raleway700 = Raleway({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

interface personCard {
  img: string;
  title: string;
  name: string;
  desc: string;
}
interface CardProps {
  children: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

function Analytics() {
  const Container = useRef<HTMLDivElement | null>(null);
  const ButtonContainer = useRef<HTMLDivElement | null>(null);
  const ParaContainer = useRef<HTMLDivElement | null>(null);
  const CardContainer = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const containerTl = gsap.timeline({ paused: true });
    const buttonTl = gsap.timeline({ paused: true });
    const ParaTl = gsap.timeline({ paused: true });
    const CardTl = gsap.timeline({ paused: true });
    const QrElement = Container.current?.querySelector(".qrelement");
    const BusinessCard = Container.current?.querySelector(".business-card");
    const ApiCard = Container.current?.querySelector(".api-card");
    const FormCard = Container.current?.querySelector(".form-card");
    const ButtonElement = ButtonContainer.current?.querySelector(".button");
    const ParaElement = ParaContainer.current?.querySelector(".para");
    const TitleElement = ParaContainer.current?.querySelector(".title");
    const LeftCard = CardContainer.current?.querySelector(".left-card");
    const middleCard = CardContainer.current?.querySelector(".middle-card");
    const rightCard = CardContainer.current?.querySelector(".right-card");
    if (QrElement && BusinessCard && ApiCard && FormCard) {
      containerTl
        .from(
          QrElement,
          {
            x: "-100vw",
            y: "-100vw",
            opacity: 0,
            duration: 2,
            ease: "power3.out",
          },
          0,
        )
        .from(
          BusinessCard,
          {
            x: "100vw",
            opacity: 0,
            duration: 2,
            ease: "power3.out",
          },
          0,
        )
        .from(
          ApiCard,
          { y: "50vw", opacity: 0, duration: 2, ease: "power3.out" },
          0,
        )
        .from(
          FormCard,
          {
            x: "30vw",
            opacity: 0,
            duration: 2,
            ease: "power3.out",
          },
          0,
        );
    }

    if (ButtonElement) {
      buttonTl.from(
        ButtonElement,
        { x: "-100vw", opacity: 0, duration: 1, ease: "power3.out", y: "20vw" },
        0,
      );
    }

    if (ParaElement && TitleElement) {
      ParaTl.from(
        ParaElement,
        { x: "100vw", opacity: 0, duration: 1, ease: "power3.out" },
        0,
      ).from(
        TitleElement,
        { x: "100vw", opacity: 0, duration: 1, ease: "power3.out" },
        0,
      );
    }
    if (LeftCard && middleCard && rightCard) {
      CardTl.from(
        LeftCard,
        {
          x: "-100vw",
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        },
        0,
      )
        .from(
          middleCard,
          {
            y: "50vw",
            opacity: 0,
            duration: 2,
            ease: "power3.out",
          },
          0,
        )
        .from(
          rightCard,
          {
            x: "100vw",
            opacity: 0,
            duration: 2,
            ease: "power3.out",
          },
          0,
        );
    }

    const containerTrigger = ScrollTrigger.create({
      trigger: Container.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => containerTl.play(),
    });

    const ButtonTrigger = ScrollTrigger.create({
      trigger: ButtonContainer.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => buttonTl.play(),
    });
    const ParaTrigger = ScrollTrigger.create({
      trigger: ButtonContainer.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => ParaTl.play(),
    });

    const CardTrigger = ScrollTrigger.create({
      trigger: CardContainer.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => CardTl.play(),
    });

    return () => {
      containerTrigger.kill();
      ButtonTrigger.kill();
      ParaTrigger.kill();
      CardTrigger.kill();
    };
  });
  return (
    <div
      className="bg overflow-hidden bg-repeat"
      ref={Container}
      style={{ backgroundImage: `url(/assets/bg2.png)` }}
    >
      <div className="h-full">
        <div
          className={`h-max w-full  bg-black/85 px-6 pb-10  text-white md:px-0 xl:px-24  2xl:px-[750px] ${raleway.className}`}
        >
          <div className="md:flex">
            <div className="qrelement md:w-2/6">
              <Card>
                <img
                  src={"/assets/qr.png"}
                  className="rounded-3xl"
                  alt="qrcode"
                ></img>
                <div className="mt-4 text-center text-2xl font-medium">
                  Collect IDs with QR
                </div>
                <div className="py-4 text-center text-[#9c9c9c]">
                  Easy to setup QR code stand
                </div>
              </Card>

              <Card>
                <div className="text-start  text-2xl font-medium">
                  Customized Interface
                </div>
                <div
                  className="py-4
text-[#9c9c9c]"
                >
                  Tailor qid’s interface to perfectly align with your brand,
                  creating a seamless and personalized user experience.
                </div>
              </Card>
            </div>
            <div className="md:w-[90%]">
              <div className="business-card">
                <Card>
                  <div className="py-4 text-2xl font-medium">
                    Business Analytics
                  </div>
                  <img src={"/assets/data.png"} className="" alt="a"></img>
                  <div
                    className="py-4
text-[#9c9c9c]"
                  >
                    Unlock the power of data with qid – your ultimate tool for
                    comprehensive business analytics.
                  </div>
                </Card>
              </div>

              <div className="md:flex">
                <div className="api-card md:w-1/2">
                  <Card>
                    <div className="text-start  text-2xl font-medium">
                      Developer APIs
                    </div>
                    <div
                      className="#9c9c9c py-4 text-[#9c9c9c]
"
                    >
                      Supercharge your applications with qid’s robust developer
                      APIs, enabling you to effortlessly leverage the full
                      potential of our platform and create unique, personalized
                      experiences for your users.
                    </div>
                  </Card>
                </div>
                <div className="form-card md:w-1/2">
                  <Card>
                    <div className="text-start  text-2xl font-medium">
                      One-Click C-Form
                    </div>
                    <div className="py-4 text-[#9c9c9c]">
                      Simplify C-Form filling with qid’s 1-Click solution,
                      automating the process and saving you time while ensuring
                      compliance.
                    </div>
                  </Card>
                </div>
              </div>
              <div ref={ButtonContainer}>
                <div className="button mt-4 flex w-max cursor-pointer items-center justify-center rounded-full bg-white px-4 py-3 text-xl font-medium text-black sm:px-6 sm:py-4 md:translate-x-28">
                  Create Business Account{" "}
                  <FaChevronRight className="ml-2 rounded-full bg-black p-1 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="py-20" ref={ParaContainer}>
            <div
              className={`title text-center text-5xl font-medium md:text-6xl ${raleway700.className}`}
            >
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                Identified
              </span>{" "}
              by{" "}
              <span className={`font-bold italic ${poopins.className}`}>
                qid
              </span>
            </div>
            <div className="para py-4 text-center text-xl text-[#dedede] md:text-2xl">
              Let’s dive into the real stories of how our service has touched
              the lives of our customers.
            </div>

            <div className=" mt-6 items-center  px-10" ref={CardContainer}>
              <Carousel>
                <CarouselContent>
                  <CarouselItem className=" left-card md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={"/assets/pq.jpg"}
                      title={
                        " Guests are benefited as they can pre-fill the required documents beforethey come-in."
                      }
                      name={"Krishan Pandey"}
                      desc={"Property Owner, The Unmad, Dharamkot"}
                    />
                  </CarouselItem>
                  <CarouselItem className="middle-card md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={"/assets/ps.jpg"}
                      title={
                        "Best bheed management software for your property's front desk. ID collection has never been this fast."
                      }
                      name={"Dhruv Arora"}
                      desc={"Property Owner, Unplan Hostels, Rishikesh"}
                    />
                  </CarouselItem>
                  <CarouselItem className="right-card md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={"/assets/px.jpg"}
                      title={
                        "Even while on the move, QID allows me to easily monitor and manage the business with precision."
                      }
                      name={"Jitesh Agarwal"}
                      desc={"Founder, The Lost Hostels"}
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={"/assets/pz.jpg"}
                      title={
                        " QID is set to revolutionise not just hospitality, but also other identity-centric industries."
                      }
                      name={"Mayur Sontakke"}
                      desc={"Founder & CEO, NomadGao"}
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ children }: CardProps) {
  return (
    <div className="m-4 rounded-3xl border  border-gray-400/40 bg-gradient-to-r from-white/10  to-black p-6">
      {children}
    </div>
  );
}

function PersonCard({ img, title, name, desc }: personCard) {
  return (
    <div className="m-2 flex h-96 flex-col rounded-3xl border border-gray-400/20 bg-black p-4">
      <img
        src={img}
        className="mb-4 h-24 w-24 rounded-full object-cover"
        alt=""
      ></img>
      <div className="mb-2 text-xl">{title}</div>
      <div className="mb-2 text-xl font-bold text-gray-500">{name}</div>
      <div className="text-gray-500">{desc}</div>
    </div>
  );
}

export default Analytics;
