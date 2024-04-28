import { Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="bg-black h-full w-full text-white">
      <div className="border-t border-gray-500/70  w-full h-max  2xl:px-[750px] xl:px-52 px-6  ">
        <div className="py-16 md:flex">
          <div className="md:w-2/4">
            <div className="text-7xl font-bold italic mt-10">qid</div>
          </div>
          <div className="md:w-2/4 md:flex">
            <div className="md:w-1/2 space-y-5 py-10 md:py-0 text-white/70">
              <div className="text-2xl  font-medium text-white">
                Download App
              </div>
              <div>Android</div>
              <div>iOS</div>
              <div>C-Form Pro Plugin</div>
              <div>Book a Demo</div>
            </div>

          <div className="md:w-1/2 space-y-5 text-white/70">
            <div className="text-2xl font-medium text-white">Legal</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Cancellation and Refund Policy</div>
            <div>Shipping and Return Policy</div>
          </div>
          </div>

        </div>

        <div className="flex md:flex-row flex-col items-center justify-between border-t py-8 pb-20 border-gray-500/70">
            <div>
            Oneqid Technologies Private Limited

            </div>
            <Linkedin className="mt-6 md:mt-0"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
