import { FaChevronRight } from "react-icons/fa";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import React from "react";

interface personCard {
  img: string;
  title: string;
  name: string;
  desc: string;
}
interface CardProps {
  children: React.ReactNode;
}

function Analytics() {
  return (
    <div
      className="bg bg-repeat"
      style={{ backgroundImage: `url(/assets/bg2.png)` }}
    >
      <div className="h-full">
        <div className="h-max w-full  bg-black/85 px-6  py-10 text-white xl:px-52  2xl:px-[750px]">
          <div className="md:flex">
            <div className="md:w-2/6">
              <Card>
                <img
                  src={"/assets/qr.png"}
                  className="rounded-3xl"
                  alt="qrcode"
                ></img>
                <div className="mt-4 text-center text-2xl font-medium">
                  Collect IDs with QR
                </div>
                <div className="py-4 text-center text-gray-500">
                  Easy to setup QR code stand
                </div>
              </Card>

              <Card>
                <div className="text-center  text-2xl font-medium">
                  Customized Interface
                </div>
                <div className="py-4 text-gray-500">
                  Tailor qid’s interface to perfectly align with your brand,
                  creating a seamless and personalized user experience.
                </div>
              </Card>
            </div>
            <div className="md:w-4/6">
              <div>
                <Card>
                  <div className="py-4 text-2xl font-medium">
                    Business Analytics
                  </div>
                  <img src={"/assets/data.png"} className="" alt="a"></img>
                  <div className="py-4 text-gray-500">
                    Unlock the power of data with qid – your ultimate tool for
                    comprehensive business analytics.
                  </div>
                </Card>
              </div>

              <div className="md:flex">
                <div className="md:w-1/2">
                  <Card>
                    <div className="text-center  text-2xl font-medium">
                      Developer APIs
                    </div>
                    <div className="py-4 text-gray-500">
                      Supercharge your applications with qid’s robust developer
                      APIs, enabling you to effortlessly leverage the full
                      potential of our platform and create unique, personalized
                      experiences for your users.
                    </div>
                  </Card>
                </div>
                <div className="md:w-1/2">
                  <Card>
                    <div className="text-center  text-2xl font-medium">
                      One-Click C-Form
                    </div>
                    <div className="py-4 text-gray-500">
                      Simplify C-Form filling with qid’s 1-Click solution,
                      automating the process and saving you time while ensuring
                      compliance.
                    </div>
                  </Card>
                </div>
              </div>

              <div className="mt-6 flex w-max cursor-pointer items-center justify-center rounded-full bg-white px-4 py-3 text-xl font-medium text-black sm:px-6 sm:py-4">
                Create Business Account{" "}
                <FaChevronRight className="ml-2 rounded-full bg-black p-1 text-white" />
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="text-center text-5xl font-medium md:text-7xl">
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                Identified
              </span>{" "}
              by <span className="font-bold italic">qid</span>
            </div>
            <div className="py-4 text-center text-xl md:text-2xl">
              Let’s dive into the real stories of how our service has touched
              the lives of our customers.
            </div>

            <div className=" mt-6 items-center  px-10">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={"/assets/pq.jpg"}
                      title={
                        " Guests are benefited as they can pre-fill the required documents beforethey come-in."
                      }
                      name={"Krishan Pandey"}
                      desc={"Property Owner, The Unmad, Dharamkot"}
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <PersonCard
                      img={"/assets/ps.jpg"}
                      title={
                        "Best bheed management software for your property's front desk. ID collection has never been this fast."
                      }
                      name={"Dhruv Arora"}
                      desc={"Property Owner, Unplan Hostels, Rishikesh"}
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
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
