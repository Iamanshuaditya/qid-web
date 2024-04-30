import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});
const Footer = () => {
  return (
    <div
      className={`xs:h-screen font-abc border-t-[1px] border-gray-500 bg-black px-8 py-8 md:px-16 md:py-0 2xl:h-fit ${raleway.className}`}
    >
      <div className="flex w-11/12 max-w-7xl flex-col  gap-12 lg:mx-auto">
        <div className="flex flex-col items-start   gap-16 px-6 md:flex-row md:items-center md:justify-between   ">
          <div className="font-poppins flex-grow text-6xl font-bold italic text-white/70 ">
            qid
          </div>
          <Functionalites
            label="Download App"
            features={DownloadApp}
          ></Functionalites>
          <Functionalites label="Legal" features={Legal}></Functionalites>
        </div>
        <div className="mb-10 flex max-w-7xl  flex-col items-center gap-4 border-t-[0.5px] border-gray-300 py-8 md:flex-row md:justify-between">
          <div className="pb-10 text-sm font-bold text-white md:order-first md:text-xl">
            Oneqid Technologies Private Limited
          </div>
          <Link
            href={"https://www.linkedin.com/company/oneqid/"}
            target="_blank"
            className="order-first flex h-8 w-8 items-center justify-center rounded-full bg-white md:-order-first"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

const DownloadApp = ["Android", "iOS", "C-Form Pro Plugin", "Book a Demo"];
const Legal = [
  "Privacy Policy",
  "Terms of Use",
  "Cancellation and Refund Policy",
  "Shipping and Return Policy",
];

function Functionalites({
  features,
  label,
}: {
  features: string[];
  label: string;
}) {
  return (
    <div className="flex flex-col gap-6  md:pt-[76px]">
      <div className="mb-2 text-2xl font-semibold text-white">{label}</div>
      {features.map((feature, index) => {
        return (
          <div
            key={index}
            className="text-md transform font-medium text-gray-300/80 duration-150 hover:cursor-pointer hover:text-gray-100"
          >
            {feature}
          </div>
        );
      })}
    </div>
  );
}
export default Footer;
