"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
export const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  style: "italic",
});

const raleway = Raleway({
  subsets: ["latin"],
});

function Navbar() {
  const [menu, setMenu] = useState(false);

  function toggle() {
    setMenu(!menu);
  }

  return (
    <div>
      <div className="fixed z-20 flex h-20 w-full items-center justify-between border-b-[1px] border-gray-600/20 bg-black px-10 text-white xl:px-28 2xl:px-[750px]">
        <div
          className={`font-poppins   cursor-pointer text-[38px] font-medium italic text-[#cecece]    ${poppins.className}`}
        >
          qid
        </div>
        <div className="md:hidden">
          {!menu ? (
            <IoMenu
              onClick={toggle}
              className="transform cursor-pointer text-3xl text-[#383838] duration-500  "
            />
          ) : (
            <RxCross2
              onClick={toggle}
              className="transform cursor-pointer text-3xl text-[#383838] duration-500  "
            />
          )}
        </div>
        <div
          className={`hidden space-x-12 text-[16px]  md:flex ${raleway.className} font-semibold`}
        >
          <div className="transform cursor-pointer text-[#7A7A7A] duration-500 hover:text-white">
            App
          </div>
          <div className="transform cursor-pointer text-[#7A7A7A] duration-500 hover:text-white">
            C-Form pro
          </div>
          <div className="transform cursor-pointer text-[#7A7A7A] duration-500 hover:text-white">
            Contact
          </div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden">
          <div
            onClick={toggle}
            className={`fixed left-0 top-20 z-20 w-full bg-[#202020] text-white ${raleway.className} transform font-bold transition duration-300 ease-in-out ${menu ? "opacity-100" : "opacity-0"}`}
          >
            <div className="border-b border-black px-8 py-3 hover:bg-[#3F444B]">
              App
            </div>
            <div className="border-b border-black px-8 py-3 hover:bg-[#3F444B]">
              C-Form pro
            </div>
            <div className="border-b border-black px-8 py-3 hover:bg-[#3F444B]">
              Contact
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
