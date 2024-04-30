import Link from "next/link";

const Downloadapp = () => {
  const classname = "w-full mb-1 hover:cursor-pointer";
  return (
    <div className="min-w-screen  flex flex-col items-center">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-x-3 px-3 pb-8 pt-32 md:grid md:grid-cols-2 md:place-items-center md:px-4 md:pt-28">
        <div className=" flex flex-grow flex-col gap-8">
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
        <div className="w-full flex-grow ">
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
